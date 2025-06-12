import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role VARCHAR(100) DEFAULT 'Team Member',
      experience VARCHAR(50) DEFAULT 'Junior',
      specialty VARCHAR(100) DEFAULT 'All-rounder',
      phone VARCHAR(20),
      join_date DATE DEFAULT CURRENT_DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password, role, experience, specialty, phone, join_date)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.experience}, ${user.specialty}, ${user.phone}, ${user.joinDate})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedFixtures() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS fixtures (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      opponent VARCHAR(255) NOT NULL,
      match_date DATE NOT NULL,
      match_time TIME NOT NULL,
      venue VARCHAR(255) NOT NULL,
      match_type VARCHAR(100) NOT NULL,
      format VARCHAR(50) NOT NULL,
      status VARCHAR(50) DEFAULT 'upcoming',
      result VARCHAR(50),
      our_score VARCHAR(100),
      opponent_score VARCHAR(100),
      margin VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const fixtures = [
    {
      opponent: 'Harrow Cricket Club',
      match_date: '2025-01-25',
      match_time: '14:00',
      venue: 'Greenford Sports Ground',
      match_type: 'League Match',
      format: 'T20',
      status: 'upcoming'
    },
    {
      opponent: 'West London Warriors',
      match_date: '2025-02-01',
      match_time: '10:00',
      venue: 'Ealing Cricket Ground',
      match_type: 'Friendly',
      format: 'T20',
      status: 'upcoming'
    },
    {
      opponent: 'Uxbridge United',
      match_date: '2025-01-11',
      match_time: '13:00',
      venue: 'Uxbridge Sports Club',
      match_type: 'League Match',
      format: 'T20',
      status: 'completed',
      result: 'Won',
      our_score: '165/6 (20)',
      opponent_score: '142/8 (20)',
      margin: 'Won by 23 runs'
    }
  ];

  const insertedFixtures = await Promise.all(
    fixtures.map(
      (fixture) => sql`
        INSERT INTO fixtures (opponent, match_date, match_time, venue, match_type, format, status, result, our_score, opponent_score, margin)
        VALUES (${fixture.opponent}, ${fixture.match_date}, ${fixture.match_time}, ${fixture.venue}, ${fixture.match_type}, ${fixture.format}, ${fixture.status}, ${fixture.result || null}, ${fixture.our_score || null}, ${fixture.opponent_score || null}, ${fixture.margin || null})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedFixtures;
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    const result = await sql.begin(async (sql) => {
      await seedUsers();
      await seedFixtures();
      await seedCustomers();
      await seedInvoices();
      await seedRevenue();
      return 'Seeding completed';
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

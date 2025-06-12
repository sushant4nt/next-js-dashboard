import {
  UserGroupIcon,
  CalendarIcon,
  TrophyIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  members: UserGroupIcon,
  matches: CalendarIcon,
  wins: TrophyIcon,
  years: ClockIcon,
};

export default async function CricketCardWrapper() {
  // These would normally come from database queries
  const totalMembers = 24;
  const upcomingMatches = 4;
  const recentWins = 2;
  const yearsActive = 2;

  return (
    <>
      <CricketCard title="Team Members" value={totalMembers} type="members" />
      <CricketCard title="Upcoming Matches" value={upcomingMatches} type="matches" />
      <CricketCard title="Recent Wins" value={recentWins} type="wins" />
      <CricketCard title="Years Active" value={yearsActive} type="years" />
    </>
  );
}

export function CricketCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'members' | 'matches' | 'wins' | 'years';
}) {
  const Icon = iconMap[type];

  const getColorClass = (type: string) => {
    switch (type) {
      case 'members': return 'text-blue-600';
      case 'matches': return 'text-green-600';
      case 'wins': return 'text-yellow-600';
      case 'years': return 'text-purple-600';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className={`h-5 w-5 ${getColorClass(type)}`} /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
} 
import { lusitana } from '@/app/ui/fonts';
import { StarIcon, UserGroupIcon, HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${lusitana.className} text-5xl lg:text-6xl font-bold mb-6`}>
            About <span className="text-yellow-400">GQ United CC</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Where it all began... A community-driven cricket club born from passion, friendship, 
            and the simple joy of playing the game we love.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-6`}>
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Back in 2023, during a community get-together for Ganpati celebrations hosted by our club chairperson, 
                <strong> Mr. Vishal Soni</strong>, a casual cricket chat sparked something special. What started as a simple 
                conversation among neighbours quickly grew into a movement fueled by passion and play.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A few months later, in April 2023, a spontaneous message in our community WhatsApp group led five of us 
                to gather at a nearby park for a friendly game of gully cricket with a soft tennis ball. The rules were 
                as quirky as the setup — "one-tip one-hand out," "direct hits to a certain spot = out" — but the joy, 
                the laughter, and the energy were real. That day, something clicked.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We started playing regularly with our founding members <strong>Sushant Gupta, Raman Agarwal, Udit Jain, 
                and Dhiren Grover</strong> — the backbone of this club. Sometimes we were three, sometimes eight — but we 
                never stopped. Rainy days didn't stop us; we shifted to playing in our building basement, inventing new 
                rules like "ceiling hit = out." Winters didn't stop us either — we played in tennis courts wrapped in 
                heavy jackets, warmed more by our love for the game than anything else.
              </p>
              <p className="text-lg text-gray-600">
                By February 2025, we had grown into a group of 18 regulars. In March 2025, we decided to take things to 
                the next level: play on proper grounds, with proper gear, and enter real tournaments. That's when 
                <strong> GQ United</strong> was born — named after Greenford Quay, home to many of our players.
              </p>
            </div>
            <div className="relative">
              <div className="bg-blue-100 p-8 rounded-2xl">
                <Image
                  src="/teampic.png"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  alt="GQ United CC team members in their official blue and white team jerseys"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-100 p-8 rounded-2xl">
                <Image
                  src="/team-yoga.jpg"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg object-cover"
                  alt="GQ United CC team practicing yoga and fitness training sessions"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-6`}>
                Our Legacy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We officially registered the club under the <strong>ECB</strong>, and soon after, we entered the 
                <strong> Last Man Stands</strong> (LMS) commercial league. The excitement was high, but so were the 
                costs — gear, training, facilities. That's when we looked to partner with local businesses who shared 
                our belief in healthy, active communities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We were fortunate to find a strong ally in <strong>GBS (Global Banking School)</strong>, who came on 
                board as our <strong>Title Sponsor</strong>. Their support gave us the boost we needed, and today, we 
                are proudly playing both <strong>tennis ball and leather ball cricket</strong> on proper grounds.
              </p>
              <p className="text-lg text-gray-600">
                We've sparred with established clubs like <strong>Harrow Cricket Club</strong> and dived into modern 
                formats like <strong>LMS</strong>, gaining valuable experience along the way. We're proud of how far 
                we've come, and even more excited about what's ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-4`}>
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              <strong>GQ United</strong> is more than a cricket club — it's a community-driven space where passion for sport brings people together. 
              Our vision is to be an <strong>inclusive, social cricket club</strong> that celebrates diversity across <strong>age, gender, ethnicity, and abilities</strong>.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <em>Come join us — let's play, laugh, and grow together.</em>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <AcademicCapIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Development</h3>
              <p className="text-gray-600">
                Provide opportunities for <strong>young kids</strong> to develop skills and confidence through sport, 
                nurturing the next generation of cricket talent.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UserGroupIcon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Women's Inclusion</h3>
              <p className="text-gray-600">
                Encourage <strong>working women</strong> to join our games and experience the joy of 
                active social gathering in a supportive environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HomeIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Community</h3>
              <p className="text-gray-600">
                Create a safe, fun, and welcoming environment where everyone feels like a team — 
                whether it's your first match or your fiftieth.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Leadership Section */}
      <section className="py-16 bg-gray-50 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-4`}>
              Leadership & Founding Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who started this journey and continue to lead 
              GQ United Cricket Club with dedication and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center lg:col-span-1">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">VS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vishal Soni</h3>
              <p className="text-blue-600 font-medium mb-2">Club Chairperson</p>
              <p className="text-sm text-gray-600">The visionary who sparked the initial conversation that led to GQ United</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">SG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sushant Gupta</h3>
              <p className="text-blue-600 font-medium mb-2">Founding Member</p>
              <p className="text-sm text-gray-600">One of the backbone members who helped build the club from the ground up</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">RA</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Raman Agarwal</h3>
              <p className="text-blue-600 font-medium mb-2">Founding Member</p>
              <p className="text-sm text-gray-600">A dedicated founding member committed to the club's growth and success</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">UJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Udit Jain</h3>
              <p className="text-blue-600 font-medium mb-2">Founding Member</p>
              <p className="text-sm text-gray-600">An integral founding member who has been part of the journey since day one</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-800">DG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dhiren Grover</h3>
              <p className="text-blue-600 font-medium mb-2">Founding Member</p>
              <p className="text-sm text-gray-600">A passionate founding member who continues to drive the club forward</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 

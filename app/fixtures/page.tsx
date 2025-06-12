import { lusitana } from '@/app/ui/fonts';
import { CalendarIcon, MapPinIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const upcomingFixtures = [
  {
    id: 1,
    opponent: 'Glaq Super Kings',
    date: '2025-06-16',
    time: '14:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 2,
    opponent: 'International Yoga Day Event',
    date: '2025-06-21',
    time: '10:00',
    venue: 'Greenford Sports Ground',
    type: 'Special Event',
    format: 'Community Event',
    status: 'upcoming'
  },
  {
    id: 3,
    opponent: 'Friends United',
    date: '2025-07-01',
    time: '13:30',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 4,
    opponent: 'Divine Fighter',
    date: '2025-07-08',
    time: '14:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 5,
    opponent: 'Willow Leather CC',
    date: '2025-07-21',
    time: '13:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 6,
    opponent: 'Willow Leather CC',
    date: '2025-07-29',
    time: '14:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 7,
    opponent: 'Friends United',
    date: '2025-08-12',
    time: '13:30',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  },
  {
    id: 8,
    opponent: 'Fine Legs CC Wembley',
    date: '2025-08-18',
    time: '14:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match',
    format: 'T20',
    status: 'upcoming'
  }
];

const recentResults = [
  {
    id: 1,
    opponent: 'Uxbridge United',
    date: '2025-01-11',
    venue: 'Uxbridge Sports Club',
    type: 'League Match',
    format: 'T20',
    result: 'Won',
    score: 'GQ United: 165/6 (20) vs Uxbridge: 142/8 (20)',
    margin: 'Won by 23 runs'
  },
  {
    id: 2,
    opponent: 'Acton Aces',
    date: '2025-01-04',
    venue: 'Greenford Sports Ground',
    type: 'Friendly',
    format: 'T20',
    result: 'Lost',
    score: 'GQ United: 134/9 (20) vs Acton: 138/5 (19.2)',
    margin: 'Lost by 5 wickets'
  },
  {
    id: 3,
    opponent: 'Ealing Eagles',
    date: '2024-12-21',
    venue: 'Ealing Cricket Ground',
    type: 'League Match',
    format: 'T20',
    result: 'Won',
    score: 'GQ United: 178/4 (20) vs Ealing: 156/7 (20)',
    margin: 'Won by 22 runs'
  }
];

const getResultColor = (result: string) => {
  switch (result) {
    case 'Won': return 'bg-green-100 text-green-800';
    case 'Lost': return 'bg-red-100 text-red-800';
    case 'Draw': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getMatchTypeColor = (type: string) => {
  switch (type) {
    case 'League Match': return 'bg-blue-100 text-blue-800';
    case 'Cup Match': return 'bg-purple-100 text-purple-800';
    case 'Friendly': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function FixturesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`${lusitana.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6`}>
              Fixtures & <span className="text-yellow-400">Results</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Stay updated with our upcoming matches and recent performance in leagues and tournaments
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">8</h3>
              <p className="text-sm sm:text-base text-gray-600">Upcoming Matches</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">2</h3>
              <p className="text-sm sm:text-base text-gray-600">Recent Wins</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">3</h3>
              <p className="text-sm sm:text-base text-gray-600">Recent Loss</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">T20</h3>
              <p className="text-sm sm:text-base text-gray-600">Primary Format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4`}>
              Upcoming Fixtures
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars! Here are our upcoming matches where we'll showcase our skills and team spirit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {upcomingFixtures.map((fixture) => (
              <div key={fixture.id} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      GQ United CC vs {fixture.opponent}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getMatchTypeColor(fixture.type)}`}>
                      {fixture.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {fixture.format}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="font-medium">
                      {new Date(fixture.date).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-5 w-5 mr-3 text-blue-600" />
                    <span>{fixture.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-3 text-blue-600" />
                    <span>{fixture.venue}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4`}>
              Recent Results
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our recent performances and see how we've been progressing in our cricket journey.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentResults.map((result) => (
              <div key={result.id} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        GQ United CC vs {result.opponent}
                      </h3>
                      <div className="flex gap-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getMatchTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getResultColor(result.result)}`}>
                          {result.result}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 text-blue-600" />
                        <span>
                          {new Date(result.date).toLocaleDateString('en-GB', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{result.venue}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 mb-1">{result.score}</p>
                      <p className="text-sm text-gray-600">{result.margin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                    <TrophyIcon className={`h-8 w-8 ${result.result === 'Won' ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* League Information */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold mb-4`}>
              League Information
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We participate in multiple leagues and tournaments to provide our members with competitive cricket opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Last Man Stands (LMS)</h3>
                <p className="text-blue-100 text-sm">
                  Our primary league where we compete in T20 format matches against local clubs.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">West London League</h3>
                <p className="text-blue-100 text-sm">
                  Regional competition featuring teams from across West London area.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Friendly Matches</h3>
                <p className="text-blue-100 text-sm">
                  Regular friendly games to build team chemistry and provide practice opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
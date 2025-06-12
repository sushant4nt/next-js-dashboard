import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const upcomingMatches = [
  {
    id: 1,
    opponent: 'Harrow Cricket Club',
    date: '2025-01-25',
    time: '14:00',
    venue: 'Greenford Sports Ground',
    type: 'League Match'
  },
  {
    id: 2,
    opponent: 'West London Warriors',
    date: '2025-02-01',
    time: '10:00',
    venue: 'Ealing Cricket Ground',
    type: 'Friendly'
  },
  {
    id: 3,
    opponent: 'Southall Strikers',
    date: '2025-02-08',
    time: '13:30',
    venue: 'Greenford Sports Ground',
    type: 'League Match'
  }
];

export default function UpcomingMatches() {
  return (
    <div className="flex w-full flex-col md:col-span-1">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Upcoming Matches
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {upcomingMatches.map((match, i) => {
            return (
              <div
                key={match.id}
                className={`flex flex-row items-center justify-between py-4 ${
                  i !== 0 ? 'border-t' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      vs {match.opponent}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="mr-3">
                        {new Date(match.date).toLocaleDateString('en-GB', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span className="truncate">{match.venue}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  match.type === 'League Match' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {match.type}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">
            View all fixtures →
          </h3>
        </div>
      </div>
    </div>
  );
} 
import { UserGroupIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const teamStats = [
  { label: 'Founding Members', count: 4, color: 'bg-blue-500' },
  { label: 'Senior Players', count: 8, color: 'bg-green-500' },
  { label: 'Intermediate', count: 8, color: 'bg-yellow-500' },
  { label: 'Junior Players', count: 4, color: 'bg-purple-500' },
];

const recentActivity = [
  {
    id: 1,
    activity: 'Won against Uxbridge United',
    date: '2025-01-11',
    type: 'match'
  },
  {
    id: 2,
    activity: 'New member joined: Ebad Noman',
    date: '2025-01-01',
    type: 'member'
  },
  {
    id: 3,
    activity: 'Training session completed',
    date: '2024-12-28',
    type: 'training'
  }
];

export default function TeamStats() {
  return (
    <div className="flex w-full flex-col md:col-span-1">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Team Overview
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* Team Composition */}
        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <UserGroupIcon className="h-5 w-5 mr-2 text-blue-600" />
            Team Composition
          </h3>
          <div className="space-y-3">
            {teamStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${stat.color} mr-3`}></div>
                  <span className="text-sm text-gray-700">{stat.label}</span>
                </div>
                <span className="text-sm font-semibold">{stat.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <StarIcon className="h-5 w-5 mr-2 text-yellow-600" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                  activity.type === 'match' ? 'bg-green-500' :
                  activity.type === 'member' ? 'bg-blue-500' : 'bg-gray-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.activity}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.date).toLocaleDateString('en-GB', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
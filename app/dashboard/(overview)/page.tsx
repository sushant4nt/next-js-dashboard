import CricketCardWrapper from '@/app/ui/dashboard/cricket-cards';
import UpcomingMatches from '@/app/ui/dashboard/upcoming-matches';
import TeamStats from '@/app/ui/dashboard/team-stats';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { auth } from '@/auth';
 
export default async function Page() {
  const session = await auth();
  const userName = session?.user?.name || 'Member';
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Welcome back, {userName}!
      </h1>
      <p className="text-gray-600 mb-6">
        Here's what's happening with GQ United Cricket Club
      </p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CricketCardWrapper />
        </Suspense>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Suspense fallback={<div className="h-96 bg-gray-100 rounded-lg animate-pulse" />}>
          <UpcomingMatches />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-100 rounded-lg animate-pulse" />}>
          <TeamStats />
        </Suspense>
      </div>
    </main>
  );
}
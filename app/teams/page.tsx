import { lusitana } from '@/app/ui/fonts';
import { UserIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const teamMembers = [
  { name: 'Vishal Soni', role: 'Club Chairperson', experience: 'Senior', specialty: 'Leadership' },
  { name: 'Sushant Gupta', role: 'Founding Member', experience: 'Senior', specialty: 'All-rounder' },
  { name: 'Raman Agarwal', role: 'Founding Member', experience: 'Senior', specialty: 'Batsman' },
  { name: 'Dhiren Grover', role: 'Founding Member', experience: 'Senior', specialty: 'Bowler' },
  { name: 'Aakar Sinhal', role: 'Team Member', experience: 'Intermediate', specialty: 'Batsman' },
  { name: 'Akshay Varun', role: 'Team Member', experience: 'Intermediate', specialty: 'All-rounder' },
  { name: 'Ankit Bedi', role: 'Team Member', experience: 'Senior', specialty: 'Bowler' },
  { name: 'Praveen Nair', role: 'Team Member', experience: 'Senior', specialty: 'Wicket Keeper' },
  { name: 'Sajeel Sharief', role: 'Team Member', experience: 'Intermediate', specialty: 'Batsman' },
  { name: 'Suleman Sheikh', role: 'Team Member', experience: 'Senior', specialty: 'All-rounder' },
  { name: 'Alex Tharakan', role: 'Team Member', experience: 'Intermediate', specialty: 'Bowler' },
  { name: 'Ameen Faiyaz', role: 'Team Member', experience: 'Junior', specialty: 'Batsman' },
  { name: 'Ssiddharth Tyagi', role: 'Team Member', experience: 'Intermediate', specialty: 'All-rounder' },
  { name: 'Vivek Arvind', role: 'Team Member', experience: 'Senior', specialty: 'Bowler' },
  { name: 'Fazal Jamadar', role: 'Team Member', experience: 'Intermediate', specialty: 'Fielder' },
  { name: 'Mannu Jalan', role: 'Team Member', experience: 'Junior', specialty: 'Batsman' },
  { name: 'Lalit Pandey', role: 'Team Member', experience: 'Senior', specialty: 'All-rounder' },
  { name: 'Derik Patel', role: 'Team Member', experience: 'Intermediate', specialty: 'Bowler' },
  { name: 'Sakif Chowdhury', role: 'Team Member', experience: 'Junior', specialty: 'Batsman' },
  { name: 'Tejas Patel', role: 'Team Member', experience: 'Intermediate', specialty: 'All-rounder' },
  { name: 'Deep Patel', role: 'Team Member', experience: 'Junior', specialty: 'Fielder' },
  { name: 'Navhal Mohit', role: 'Team Member', experience: 'Intermediate', specialty: 'Bowler' },
  { name: 'Feel Patel', role: 'Team Member', experience: 'Junior', specialty: 'Batsman' },
  { name: 'Ebad Noman', role: 'Team Member', experience: 'Intermediate', specialty: 'All-rounder' },
];

const getExperienceColor = (experience: string) => {
  switch (experience) {
    case 'Senior': return 'bg-blue-100 text-blue-800';
    case 'Intermediate': return 'bg-green-100 text-green-800';
    case 'Junior': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getSpecialtyIcon = (specialty: string) => {
  switch (specialty) {
    case 'Leadership': return <StarIcon className="h-4 w-4" />;
    case 'Wicket Keeper': return <TrophyIcon className="h-4 w-4" />;
    default: return <UserIcon className="h-4 w-4" />;
  }
};

export default function TeamsPage() {
  const foundingMembers = teamMembers.filter(member => member.role === 'Founding Member' || member.role === 'Club Chairperson');
  const regularMembers = teamMembers.filter(member => member.role === 'Team Member');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`${lusitana.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6`}>
              Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Meet the passionate cricketers who make GQ United CC a family united by our love for the game
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">24</h3>
              <p className="text-sm sm:text-base text-gray-600">Total Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">4</h3>
              <p className="text-sm sm:text-base text-gray-600">Founding Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">8</h3>
              <p className="text-sm sm:text-base text-gray-600">All-rounders</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">2</h3>
              <p className="text-sm sm:text-base text-gray-600">Years Together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4`}>
              Founding Members & Leadership
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The visionaries who started this journey and continue to lead GQ United CC with passion and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {foundingMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                <div className="flex justify-center items-center gap-2 mb-2">
                  {getSpecialtyIcon(member.specialty)}
                  <span className="text-sm text-gray-600">{member.specialty}</span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(member.experience)}`}>
                  {member.experience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4`}>
              Team Members
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated players who bring skill, enthusiasm, and team spirit to every match and training session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="flex justify-center items-center gap-2 mb-2">
                  {getSpecialtyIcon(member.specialty)}
                  <span className="text-sm text-gray-600">{member.specialty}</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getExperienceColor(member.experience)}`}>
                  {member.experience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold mb-4`}>
            Want to Join Our Team?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're always looking for passionate cricketers to join our growing family. 
            Whether you're a beginner or experienced player, there's a place for you at GQ United CC.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
          >
            Join Our Team
          </a>
        </div>
      </section>
    </div>
  );
} 
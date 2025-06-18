import { ArrowRightIcon, PlayIcon, UsersIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-8 sm:py-12 lg:py-20">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className={`${lusitana.className} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6`}>
                Welcome to <span className="text-yellow-400">GQ United CC</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed">
                Where passion meets excellence. Join GQ United cricket club 
                and be part of our winning tradition since 2023.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center">
                <Link
                  href="/join"
                  className="flex items-center justify-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  <span>Join the Club</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full order-1 lg:order-2">
              <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/teampic.png"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                  alt="GQ United CC team photo with players in their blue and white jerseys"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/cricket_image.png"
                  alt="Cricket player icon"
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">13+</h3>
              <p className="text-sm sm:text-base text-gray-600">League Matches</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <UsersIcon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">25+</h3>
              <p className="text-sm sm:text-base text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <CalendarIcon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">2</h3>
              <p className="text-sm sm:text-base text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6`}>
                Our Legacy
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 2023, GQ United Cricket Club has been at the forefront of cricket 
                excellence in Greenford Quay, London. We nurture talent, build character, and create champions 
                both on and off the field.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our state-of-the-art facilities, experienced team members, and strong community 
                bonds make us the perfect place for cricket enthusiasts of all levels.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm sm:text-base"
              >
                Read Our Full Story
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
            <div className="w-full order-1 lg:order-2">
              <div className="bg-blue-100 p-4 sm:p-6 lg:p-8 rounded-2xl max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/team-yoga.jpg"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                  alt="GQ United CC team practicing yoga and fitness training on the cricket field"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4`}>
              Our Proud Sponsors
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're grateful to our amazing sponsors who support GQ United CC and help us achieve excellence on and off the field.
            </p>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-28 h-16 sm:w-32 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src="/gbs-logo.png"
                  width={128}
                  height={80}
                  alt="Global Banking School Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Global Banking School</h3>
              <p className="text-xs sm:text-sm text-blue-600 font-medium mb-3">Higher Education Institution</p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Prestigious UK-based educational institution changing lives through industry-focused higher education, supporting our players' academic and professional development.
              </p>
              <div className="flex justify-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
              </div>
              <Link
                href="https://www.globalbanking.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors text-xs sm:text-sm"
              >
                Visit Website
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-28 h-16 sm:w-32 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src="/social-untold.jpg"
                  width={128}
                  height={80}
                  alt="SocialUntold Logo"
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">SocialUntold</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Digital marketing and social media experts helping us connect with our community and share our cricket journey.
              </p>
              <div className="flex justify-center space-x-1 mb-3 sm:mb-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></div>
              </div>
              <Link
                href="https://www.youtube.com/@socialuntold"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors text-xs sm:text-sm"
              >
                Visit YouTube Channel
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm sm:text-base"
            >
              View All Our Sponsors
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-600 text-white">
        <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl text-center">
          <h2 className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6`}>
            Ready to Join Our Cricket Family?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a seasoned player or just starting your cricket journey, 
            we welcome you to be part of our winning tradition.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-500 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base lg:text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

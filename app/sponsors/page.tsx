import { lusitana } from '@/app/ui/fonts';
import { UserGroupIcon, HeartIcon, StarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function SponsorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${lusitana.className} text-5xl lg:text-6xl font-bold mb-6`}>
            Our <span className="text-yellow-400">Sponsors</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're grateful to our amazing sponsors and partners who make our cricket dreams possible. 
            Together, we're building a stronger cricket community in London.
          </p>
        </div>
      </section>

      {/* Title Sponsors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-4`}>
              Title Sponsors
            </h2>
            <p className="text-lg text-gray-600">
              Our premier partners who provide major support for our club operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/gbs-logo.png"
                  width={128}
                  height={80}
                  alt="Global Banking School Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Banking School</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">Higher Education Institution</p>
              <p className="text-gray-600 mb-4">
                Prestigious UK-based educational institution changing lives through industry-focused higher education, supporting our players' academic and professional development.
              </p>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/social-untold.jpg"
                  width={128}
                  height={80}
                  alt="SocialUntold Logo"
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SocialUntold</h3>
              <p className="text-gray-600 mb-4">
                Digital marketing and social media experts helping us connect with our community and share our cricket journey.
              </p>
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <Link
                href="https://www.youtube.com/@socialuntold"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors text-sm"
              >
                Visit YouTube Channel
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-4`}>
              Become Our Next Sponsor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join GBS and SocialUntold in supporting GQ United CC. Partner with us to reach London's vibrant cricket community and make a lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Available Sponsorship Slots */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-dashed border-blue-300 hover:border-blue-500 transition-colors duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equipment Partner</h3>
              <p className="text-gray-600 mb-4">
                Provide cricket equipment and gear for our growing team of 25+ active members.
              </p>
              <div className="text-sm text-blue-600 font-medium">Available Slot</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-dashed border-green-300 hover:border-green-500 transition-colors duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏟️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ground Partner</h3>
              <p className="text-gray-600 mb-4">
                Support our home ground maintenance and facility improvements at Greenford Sports Ground.
              </p>
              <div className="text-sm text-green-600 font-medium">Available Slot</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-dashed border-purple-300 hover:border-purple-500 transition-colors duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Partner</h3>
              <p className="text-gray-600 mb-4">
                Support our coaching programs and player development initiatives for all skill levels.
              </p>
              <div className="text-sm text-purple-600 font-medium">Available Slot</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h3 className={`${lusitana.className} text-2xl font-bold mb-4`}>
              Ready to Make an Impact?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Partner with GQ United CC and gain exposure to thousands of cricket fans through our matches, 
              events, and digital presence. Let's build something great together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:sponsors@gqunitedcc.com?subject=Sponsorship Inquiry"
                className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                href="tel:+442012345678"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl font-bold mb-4`}>
              Why Sponsor GQ United CC?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Partner with us and gain exposure to London's vibrant cricket community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UserGroupIcon className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Visibility</h3>
              <p className="text-blue-100">
                Reach thousands of cricket fans through our matches, events, and digital presence
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HeartIcon className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Impact</h3>
              <p className="text-green-100">
                Support grassroots cricket development and youth programs in Mumbai
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <StarIcon className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Association with Excellence</h3>
              <p className="text-green-100">
                Align your brand with our reputation for sportsmanship and success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-6`}>
            Interested in Sponsoring Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our family of sponsors and be part of Mumbai's most exciting cricket club. 
            Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
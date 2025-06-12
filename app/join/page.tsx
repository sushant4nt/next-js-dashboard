import { lusitana } from '@/app/ui/fonts';
import { UserIcon, EnvelopeIcon, PhoneIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`${lusitana.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6`}>
              Join <span className="text-yellow-400">GQ United CC</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Ready to be part of our cricket family? Fill out the form below and start your journey with us!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className={`${lusitana.className} text-2xl sm:text-3xl font-bold text-gray-900 mb-6`}>
                  Membership Application
                </h2>
                
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          id="address"
                          name="address"
                          rows={3}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Enter your full address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cricket Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Cricket Experience
                    </h3>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Cricket Experience Level *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (3-5 years)</option>
                        <option value="advanced">Advanced (6+ years)</option>
                        <option value="professional">Professional/Semi-Professional</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Playing Position
                      </label>
                      <select
                        id="position"
                        name="position"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select preferred position</option>
                        <option value="batsman">Batsman</option>
                        <option value="bowler">Bowler</option>
                        <option value="all-rounder">All-rounder</option>
                        <option value="wicket-keeper">Wicket Keeper</option>
                        <option value="fielder">Fielder</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="previousClubs" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Cricket Clubs/Teams
                      </label>
                      <textarea
                        id="previousClubs"
                        name="previousClubs"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="List any previous cricket clubs or teams you've played for (optional)"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Additional Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability *
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="availability[]" value="weekdays" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">Weekdays</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="availability[]" value="weekends" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">Weekends</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="availability[]" value="evenings" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">Evenings</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to join GQ United CC? *
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us why you're interested in joining our cricket club..."
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                        I agree to the club's terms and conditions, and I understand that membership is subject to approval by the club committee. *
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                        I would like to receive updates and newsletters from GQ United CC.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-8">
                <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl mb-8">
                  <h3 className={`${lusitana.className} text-xl sm:text-2xl font-bold text-gray-900 mb-4`}>
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Application Review</h4>
                        <p className="text-sm text-gray-600">Our committee will review your application within 3-5 business days.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Welcome Call</h4>
                        <p className="text-sm text-gray-600">We'll contact you to discuss membership details and answer any questions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">First Training</h4>
                        <p className="text-sm text-gray-600">Join us for your first training session and meet the team!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className={`${lusitana.className} text-xl font-bold text-gray-900 mb-4`}>
                    Need Help?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about joining? We're here to help!
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center text-gray-600">
                      <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-600" />
                      info@gqunitedcc.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <PhoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                      +44 20 1234 5678
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      href="/about"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Learn more about our club →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
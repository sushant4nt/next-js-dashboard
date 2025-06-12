import GQUnitedLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Branding and Info */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
              <GQUnitedLogo />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join the Winning Team
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Access your member dashboard, view match schedules, track your performance, 
              and stay connected with the GQ United CC community.
            </p>
            <div className="hidden lg:block">
              <Image
                src="/teampic.png"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover w-full h-auto"
                alt="GQ United CC team members in their official blue and white jerseys"
              />
            </div>
          </div>
          
          {/* Right side - Login Form */}
          <div className="w-full flex justify-center order-1 lg:order-2">
            <Suspense fallback={
              <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                <div className="animate-pulse">
                  <div className="h-6 sm:h-8 bg-gray-200 rounded mb-3 sm:mb-4"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded mb-6 sm:mb-8"></div>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-10 sm:h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div>
                      <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-10 sm:h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-10 sm:h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            }>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
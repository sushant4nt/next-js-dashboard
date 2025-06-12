'use client';
 
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
 
export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className={`${lusitana.className} text-2xl sm:text-3xl font-bold text-gray-900 mb-2`}>
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Sign in to access your GQ United CC member area
          </p>
        </div>
        
        <form action={formAction} className="space-y-4 sm:space-y-6">
          <div>
            <label
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label
              className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                minLength={6}
              />
              <KeyIcon className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center text-sm sm:text-base" 
            aria-disabled={isPending}
          >
            {isPending ? 'Signing in...' : 'Sign In'}
            <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          {errorMessage && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-2.5 sm:p-3 rounded-lg">
              <ExclamationCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <p className="text-xs sm:text-sm">{errorMessage}</p>
            </div>
          )}
        </form>
        
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            New to GQ United CC?{' '}
            <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
              Join our club
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
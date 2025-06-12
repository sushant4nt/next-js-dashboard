import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${lusitana.className} text-4xl lg:text-5xl font-bold mb-4`}>
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                GQ United Cricket Club ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, use our services, or interact with our club.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Date of birth and emergency contact information</li>
                <li>Cricket experience and playing position preferences</li>
                <li>Payment information for membership fees</li>
                <li>Photos and videos from club events (with consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>To process membership applications and manage club operations</li>
                <li>To communicate about matches, events, and club news</li>
                <li>To process payments and maintain financial records</li>
                <li>To ensure player safety and emergency contact procedures</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations and ECB requirements</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>With the England and Wales Cricket Board (ECB) for registration purposes</li>
                <li>With league organizers for match scheduling and results</li>
                <li>With emergency services if required for player safety</li>
                <li>When required by law or legal process</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We regularly review our security practices and update them as necessary to maintain 
                the confidentiality and integrity of your information.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing 
                experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Remember your preferences and login status</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                7. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate or incomplete data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                8. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required by law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                9. Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take special care to protect the privacy of children under 18. For junior members, 
                we require parental consent before collecting any personal information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Parents have the right to review, modify, or delete their child's personal information 
                at any time.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on our website and updating the 
                "Last updated" date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance of 
                the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                11. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>GQ United Cricket Club</strong></p>
                <p className="text-gray-600 mb-2">Email: privacy@gqunitedcc.com</p>
                <p className="text-gray-600 mb-2">Phone: +44 20 1234 5678</p>
                <p className="text-gray-600">Address: Greenford Sports Ground, Greenford, London</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
} 
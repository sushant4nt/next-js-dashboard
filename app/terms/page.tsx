import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${lusitana.className} text-4xl lg:text-5xl font-bold mb-4`}>
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services or joining our club.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                1. Introduction and Acceptance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to GQ United Cricket Club ("GQ United CC," "we," "our," or "us"). These Terms of Service 
                ("Terms") govern your use of our website, services, and membership in our cricket club.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing our website, applying for membership, or participating in club activities, 
                you agree to be bound by these Terms. If you do not agree to these Terms, please do not 
                use our services or participate in club activities.
              </p>
            </div>

            {/* Membership Terms */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                2. Membership Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Eligibility</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Membership is open to individuals who:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Are at least 16 years of age (junior membership available for younger players with parental consent)</li>
                <li>Agree to abide by club rules and ECB regulations</li>
                <li>Complete the membership application process</li>
                <li>Pay applicable membership fees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Membership Fees</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Membership fees are due annually and must be paid in full before participation in club activities. 
                Fees are non-refundable except in exceptional circumstances at the discretion of the club committee.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.3 Membership Benefits</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Members are entitled to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Participate in club matches and training sessions</li>
                <li>Use club facilities and equipment</li>
                <li>Attend club social events</li>
                <li>Vote in club meetings and elections</li>
                <li>Access to club coaching and development programs</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                3. Code of Conduct
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All members must adhere to the following code of conduct:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Respect all players, officials, spectators, and club property</li>
                <li>Play cricket in the spirit of the game and fair play</li>
                <li>Follow all ECB regulations and club rules</li>
                <li>Maintain appropriate behavior on and off the field</li>
                <li>Report any incidents or concerns to club officials</li>
                <li>Abstain from discrimination, harassment, or bullying</li>
                <li>Avoid bringing the club into disrepute</li>
              </ul>
            </div>

            {/* Safety and Insurance */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                4. Safety and Insurance
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Safety Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All players must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Wear appropriate protective equipment during matches and training</li>
                <li>Follow safety guidelines and instructions from coaches and officials</li>
                <li>Report any injuries or safety concerns immediately</li>
                <li>Ensure they are physically fit to participate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.2 Insurance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The club maintains public liability insurance. However, members are strongly advised 
                to have their own personal accident and equipment insurance. The club is not liable 
                for personal injuries or loss of personal property.
              </p>
            </div>

            {/* Liability and Risk */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cricket is a sport that involves inherent risks. By participating in club activities, 
                you acknowledge and accept these risks. To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>The club is not liable for personal injuries sustained during cricket activities</li>
                <li>The club is not responsible for loss or damage to personal property</li>
                <li>Members participate at their own risk</li>
                <li>The club's liability is limited to the amount of membership fees paid</li>
              </ul>
            </div>

            {/* Website Terms */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                6. Website Use
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Acceptable Use</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Upload or transmit harmful content or malware</li>
                <li>Interfere with the website's operation or security</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Intellectual Property</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our website, including text, images, logos, and designs, is owned by 
                GQ United CC or our licensors and is protected by copyright and other intellectual 
                property laws.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                7. Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which explains 
                how we collect, use, and protect your personal information.
              </p>
              <Link
                href="/privacy"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View Privacy Policy →
              </Link>
            </div>

            {/* Disciplinary Procedures */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                8. Disciplinary Procedures
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The club reserves the right to take disciplinary action against members who breach 
                these Terms or club rules. Disciplinary measures may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Verbal or written warnings</li>
                <li>Temporary suspension from club activities</li>
                <li>Termination of membership</li>
                <li>Reporting to relevant authorities if required</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Members have the right to appeal disciplinary decisions through the club's 
                established appeals process.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                9. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate membership with appropriate notice:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Members may resign by giving 30 days written notice</li>
                <li>The club may terminate membership for breach of Terms or non-payment of fees</li>
                <li>Upon termination, all rights and privileges of membership cease immediately</li>
                <li>Outstanding fees and obligations remain payable</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                10. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms are governed by the laws of England and Wales. Any disputes arising 
                from these Terms or club membership will be subject to the exclusive jurisdiction 
                of the English courts.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                11. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be posted on 
                our website with an updated "Last updated" date. Continued use of our services 
                after changes constitutes acceptance of the modified Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Material changes will be communicated to members via email or club notices.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className={`${lusitana.className} text-3xl font-bold text-gray-900 mb-6`}>
                12. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>GQ United Cricket Club</strong></p>
                <p className="text-gray-600 mb-2">Email: info@gqunitedcc.com</p>
                <p className="text-gray-600 mb-2">Phone: +44 20 1234 5678</p>
                <p className="text-gray-600 mb-2">Address: Greenford Sports Ground, Greenford, London</p>
                <p className="text-gray-600">Club Secretary: secretary@gqunitedcc.com</p>
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
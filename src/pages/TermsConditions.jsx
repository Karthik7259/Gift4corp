import React from 'react'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
  return (
    <div className="bg-white text-gray-900 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-sm">
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-b from-orange-100/60 to-transparent blur-3xl" aria-hidden="true"></div>
          <p className="text-sm font-medium text-orange-700 mb-2">Terms & Conditions</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">Your agreement with Gifts4Corporate</h1>
          <p className="mt-3 text-gray-700 max-w-3xl">
            These Terms, together with our Privacy Policy, form a binding agreement between you and Gifts4Corporate when you use our website, products, or services.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm border border-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Last updated: 12-12-2025
          </div>
        </div>

        <div className="grid gap-8 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Binding Agreement</h2>
            <p className="text-gray-700">
              By using our website and Services, you confirm you have read and accepted these Terms. We may modify these Terms at any time without prior notice; please review them periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Use of Services</h2>
            <p className="text-gray-700">
              You agree to provide true, accurate, and complete information during and after registration. You are responsible for all activities conducted through your registered account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              Information and materials offered via our website or Services may contain inaccuracies or errors. We and third parties provide no warranties or guarantees regarding accuracy, timeliness, completeness, or suitability to the fullest extent permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Your Responsibility</h2>
            <p className="text-gray-700">
              Your use of the website and Services is at your own risk. You must independently ensure the Services meet your requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
            <p className="text-gray-700">
              All content on the website and within the Services is proprietary to us. You may not claim any intellectual property rights, title, or interest in any content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Unauthorized Use</h2>
            <p className="text-gray-700">
              Unauthorized use of the website or Services may result in legal action under these Terms or applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Payments</h2>
            <p className="text-gray-700">
              You agree to pay all charges associated with availing the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Prohibited Use</h2>
            <p className="text-gray-700">
              You agree not to use the website or Services for any illegal or prohibited activity under these Terms or applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Third-Party Links</h2>
            <p className="text-gray-700">
              The website or Services may contain links to third-party websites. Upon accessing those sites, you agree to be governed by the terms and privacy policies of the respective third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Legally Binding Agreement</h2>
            <p className="text-gray-700">
              By initiating a transaction, you enter into a legally binding contract with us for the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Refunds</h2>
            <p className="text-gray-700">
              You are entitled to a refund if we are unable to provide the Services. Refund timelines depend on the Service and our refund policy. Claims not raised within the stipulated timeframe will not be eligible for a refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Force Majeure</h2>
            <p className="text-gray-700">
              Neither party is liable for failure to perform obligations due to events beyond reasonable control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Governing Law</h2>
            <p className="text-gray-700">These Terms are governed by and construed under the laws of India.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Jurisdiction</h2>
            <p className="text-gray-700">All disputes are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            <p className="text-gray-700">All concerns or communications regarding these Terms must be addressed using the contact details provided on our website.</p>
          </section>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-between">
          <p className="text-sm text-gray-600">This page summarizes the Terms & Conditions for Gifts4Corporate. Please review regularly for updates.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 transition-colors">Return to home</Link>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions

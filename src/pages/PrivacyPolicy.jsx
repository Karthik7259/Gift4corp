import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm">
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-b from-indigo-100/60 to-transparent blur-3xl" aria-hidden="true"></div>
          <p className="text-sm font-medium text-indigo-700 mb-2">Privacy Policy</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">Your privacy, our promise</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Thank you for choosing Gifts4Corporate. This policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our shopping experience and services.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm border border-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Last updated: 12-30-2023
          </div>
        </div>

        <div className="grid gap-8 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">1.1 Personal Information</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Contact details (name, email address, phone number)</li>
                  <li>Billing and shipping details</li>
                  <li>Company information</li>
                  <li>Preferences and interests</li>
                  <li>Transaction history</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">1.2 Automatically Collected Information</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Processing and fulfilling orders</li>
              <li>Communicating with you about orders and promotions</li>
              <li>Improving our products and services</li>
              <li>Personalizing your shopping experience</li>
              <li>Analyzing website usage and performance</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">3. Sharing Your Information</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Trusted service providers assisting with order fulfillment, payment processing, and site functionality</li>
              <li>Legal and regulatory compliance when required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">4. Your Choices</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Update your account information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">5. Security</h2>
            <p className="text-gray-700">We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">6. Cookies</h2>
            <p className="text-gray-700">We use cookies and similar technologies to enhance your browsing experience. You can manage your preferences in your browser settings.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">7. Children’s Privacy</h2>
            <p className="text-gray-700">Our services are not directed to individuals under 13. If we learn we have collected personal information from a child under 13, we will take steps to delete it.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">We may update this Privacy Policy periodically. The latest version will be posted here with the effective date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">9. Contact Us</h2>
            <div className="space-y-2 text-gray-700">
              <p>Gifts4Corporate</p>
              <p>Email: <a href="mailto:sales@gifts4corp.com" className="text-indigo-700 hover:underline">sales@gifts4corp.com</a></p>
              <p>Phone: <a href="tel:+919620044002" className="text-indigo-700 hover:underline">+91-9620044002</a></p>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-between">
          <p className="text-sm text-gray-600">This policy is tailored for Gifts4Corporate. Please consult legal counsel for compliance with applicable laws.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">Return to home</Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

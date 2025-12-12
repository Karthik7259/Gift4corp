import React from 'react'
import { Link } from 'react-router-dom'

const ReturnsRefunds = () => {
  return (
    <div className="bg-white text-gray-900 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-sm">
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-b from-cyan-100/60 to-transparent blur-3xl" aria-hidden="true"></div>
          <p className="text-sm font-medium text-emerald-700 mb-2">Returns & Refunds Policy</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">We want you to love your purchase</h1>
          <p className="mt-3 text-gray-700 max-w-3xl">
            If something is not quite right, here is how we handle returns, refunds, and exchanges at Gifts4Corporate.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm border border-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Last updated: 12-12-2025
          </div>
        </div>

        <div className="grid gap-8 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">✅ Returns</h2>
            <p className="text-gray-700">Returns are accepted within 15 days of purchase. We cannot accept returns after that timeframe.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Eligibility</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Item is unused and in original packaging</li>
                  <li>Same condition as received</li>
                  <li>Receipt or proof of purchase provided</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Not Eligible</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Used or damaged items not caused by us</li>
                  <li>Returns after 15 days</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">💸 Refunds</h2>
            <p className="text-gray-700">After we receive and inspect your return, we will email you the refund status. If approved, refunds are processed to the original payment method within 25–30 business days.</p>
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">If you have not received your refund</h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                <li>Check your bank account</li>
                <li>Check with your credit card provider</li>
                <li>Check with your bank—processing can take time</li>
                <li>Still need help? Email <a href="mailto:sales@gifts4corp.com" className="text-emerald-700 hover:underline">sales@gifts4corp.com</a></li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">🔁 Exchanges</h2>
            <p className="text-gray-700">We replace items only if they are defective or damaged. For an exchange, email us and send the item to the address below:</p>
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm text-gray-700 space-y-1">
              <p>Gifts4Corporate</p>
              <p>194D, Shreeya Serenity,</p>
              <p>Nanda Kumar Layout,</p>
              <p>Bengaluru 560061</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">🚚 Shipping Your Return</h2>
            <p className="text-gray-700">Ship your return to the address above.</p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>You are responsible for return shipping costs</li>
              <li>Shipping fees are non-refundable</li>
              <li>If eligible, return shipping may be deducted from your refund</li>
              <li>Delivery times vary by location</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">🌍 Shipping Policy</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>We currently ship only within India</li>
              <li>Typical delivery is 7–10 days, depending on product customization</li>
              <li>No international shipping at this time</li>
            </ul>
          </section>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-between">
          <p className="text-sm text-gray-600">Questions about returns or refunds? Reach us anytime at sales@gifts4corp.com.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors">Return to home</Link>
        </div>
      </div>
    </div>
  )
}

export default ReturnsRefunds

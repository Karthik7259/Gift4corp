import React from 'react';

const ShippingPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
    <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
      <span role="img" aria-label="Shipping">📦</span> Shipping Policy
    </h1>
    <p className="mb-6">
      At <span className="font-semibold">Gifts4Corporate</span>, we strive to ensure timely and reliable delivery of your orders while maintaining transparency throughout the shipping process.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Locations">🚚</span> Shipping Locations
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>We currently ship <span className="font-semibold">only within India</span></li>
      <li>International shipping is <span className="font-semibold">not available at this time</span></li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Timeline">⏱️</span> Delivery Timeline
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Orders are typically delivered within <span className="font-semibold">7–10 business days</span></li>
      <li>Delivery timelines may vary depending on:
        <ul className="list-disc ml-6 mt-2">
          <li>Product type</li>
          <li>Level of customization</li>
          <li>Delivery location</li>
        </ul>
      </li>
    </ul>
    <p className="mb-4">Customized or bulk orders may require additional processing time, which will be communicated at the time of order confirmation.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Order Processing">📦</span> Order Processing
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>All orders are processed after confirmation of payment</li>
      <li>Once shipped, tracking details (if applicable) will be shared with you</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Charges">💰</span> Shipping Charges
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Shipping charges, if applicable, will be communicated during checkout or order confirmation</li>
      <li>Shipping fees are <span className="font-semibold">non-refundable</span></li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Delays">⚠️</span> Delays & Exceptions
    </h2>
    <p className="mb-4">While we make every effort to meet delivery timelines, delays may occur due to unforeseen circumstances such as:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Courier delays</li>
      <li>Weather conditions</li>
      <li>Regional restrictions</li>
    </ul>
    <p className="mb-4">Gifts4Corporate will not be held responsible for delays beyond our control, but we will assist wherever possible.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2 flex items-center gap-2">
      <span role="img" aria-label="Help">📞</span> Need Help?
    </h2>
    <p>
      For any questions regarding shipping or delivery, please reach out to us at:<br />
      <a href="mailto:sales@gifts4corp.com" className="text-blue-600 hover:underline font-semibold">sales@gifts4corp.com</a>
    </p>
  </div>
);

export default ShippingPolicy;

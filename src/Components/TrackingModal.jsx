import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TrackingModal = ({ isOpen, onClose, trackingData }) => {
  if (!isOpen) return null;

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'shipped':
      case 'out for delivery':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'packing':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return '✅';
      case 'shipped':
        return '🚚';
      case 'out for delivery':
        return '🚴';
      case 'packing':
        return '📦';
      default:
        return '📋';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black bg-opacity-50"
        />
        
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-1">Track Your Order</h2>
                <p className="text-blue-100 text-sm">Real-time shipping updates</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {trackingData ? (
              <>
                {/* Status Badge */}
                <div className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 mb-6 ${getStatusColor(trackingData.status)}`}>
                  <span className="text-4xl">{getStatusIcon(trackingData.status)}</span>
                  <div>
                    <p className="text-sm font-medium opacity-70">Current Status</p>
                    <p className="text-xl font-bold">{trackingData.status}</p>
                  </div>
                </div>

                {/* Order Details */}
                <div className="space-y-4">
                  {/* Order ID */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Order ID</p>
                    <p className="text-sm font-mono font-medium text-gray-800 break-all">{trackingData.orderId}</p>
                  </div>

                  {/* AWB Code */}
                  {trackingData.awb_code && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Tracking Number (AWB)</p>
                      <p className="text-lg font-mono font-bold text-blue-600">{trackingData.awb_code}</p>
                    </div>
                  )}

                  {/* Courier Name */}
                  {trackingData.courier_name && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Courier Partner</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📮</span>
                        <p className="text-sm font-semibold text-gray-800">{trackingData.courier_name}</p>
                      </div>
                    </div>
                  )}

                  {/* Order Date */}
                  {trackingData.date && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Order Date</p>
                      <p className="text-sm font-medium text-gray-800">
                        {new Date(trackingData.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Track Online Button */}
                {trackingData.tracking_url && (
                  <motion.a
                    href={trackingData.tracking_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Track on Courier Website
                  </motion.a>
                )}

                {/* No Tracking Info */}
                {!trackingData.awb_code && (
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⏳</span>
                      <div>
                        <p className="font-semibold text-yellow-800 mb-1">Preparing Your Order</p>
                        <p className="text-sm text-yellow-700">
                          Your order is being processed. Tracking information will be available once the shipment is picked up by the courier.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-gray-500">No tracking information available</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-6 py-4 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              For any queries, please contact our support team
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TrackingModal;

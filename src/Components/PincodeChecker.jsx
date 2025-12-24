import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const PincodeChecker = ({ productWeight = 0.5, onServiceabilityCheck = null }) => {
  const { backendURL } = useContext(ShopContext);
  const [pincode, setPincode] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  const checkPincode = async () => {
    if (!pincode || pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit pincode');
      return;
    }

    setChecking(true);
    try {
      const response = await axios.post(backendURL + '/api/shipping/check-serviceability', {
        pickup_postcode: '560070', // Bangalore warehouse pincode
        delivery_postcode: pincode,
        weight: productWeight,
        cod: 1
      });

      if (response.data.success && response.data.data.data.available_courier_companies) {
        const couriers = response.data.data.data.available_courier_companies;
        if (couriers.length > 0) {
          // Find the lowest price courier (for shipping fee)
          const lowestPriceCourier = couriers.reduce((min, courier) =>
            courier.rate < min.rate ? courier : min
          );
          const fastest = couriers.reduce((min, courier) =>
            courier.estimated_delivery_days < min.estimated_delivery_days ? courier : min
          );
          const shippingFee = lowestPriceCourier.rate > 100 ? lowestPriceCourier.rate : 100;
          setResult({
            available: true,
            days: fastest.estimated_delivery_days,
            shipping_fee: shippingFee
          });
          toast.success(`Delivery available in ${fastest.estimated_delivery_days} days`);
          if (onServiceabilityCheck) {
            onServiceabilityCheck({ available: true, shipping_fee: shippingFee });
          }
        } else {
          setResult({ available: false });
          toast.error('Delivery not available to this pincode');
          if (onServiceabilityCheck) {
            onServiceabilityCheck({ available: false });
          }
        }
      } else {
        setResult({ available: false });
        toast.error('Unable to check serviceability');
      }
    } catch (err) {
      console.log(err);
      toast.error('Error checking pincode');
      setResult({ available: false });
    } finally {
      setChecking(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkPincode();
    }
  };

  return (
    <div className='mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200'>
      <p className='font-medium text-sm mb-3'>Check Delivery Availability</p>
      <div className='flex gap-2'>
        <input
          type='number'
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
            setResult(null);
          }}
          onKeyPress={handleKeyPress}
          placeholder='Enter Pincode'
          className='border border-gray-300 rounded px-3 py-2 text-sm flex-1'
          maxLength={6}
        />
        <button
          onClick={checkPincode}
          disabled={checking || !pincode}
          className='bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all'
        >
          {checking ? 'Checking...' : 'Check'}
        </button>
      </div>

      {result && (
        <div className={`mt-3 p-3 rounded ${result.available ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {result.available ? (
            <div className='flex items-start gap-2'>
              <span className='text-green-600 text-lg'>✓</span>
              <div className='text-sm'>
                <p className='font-semibold text-green-700'>Delivery Available</p>
                <p className='text-green-600 mt-1'>
                  Expected delivery in <strong>{result.days} days</strong>
                </p>
                <p className='text-gray-600 text-xs mt-1'>Shipping Fee: ₹{result.shipping_fee || 100}</p>
              </div>
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <span className='text-red-600 text-lg'>✗</span>
              <p className='text-sm font-semibold text-red-700'>
                Delivery not available to this pincode
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PincodeChecker;

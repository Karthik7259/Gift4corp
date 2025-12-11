import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Target, Eye, Award, Heart, Sparkles, Users } from 'lucide-react'

const ThankYou = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Redirect after 10 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 10000)

    return () => {
      clearInterval(countdownInterval)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <div className='h-screen overflow-hidden bg-[#FAF7F2] flex items-center justify-center px-4 py-4'>
      <div className='max-w-5xl mx-auto w-full'>
        
        {/* Compact Header */}
        <div className='text-center mb-6'>
          <div className='inline-block relative mb-3'>
            <div className='absolute -inset-2'>
              <div className='w-full h-full rounded-full bg-orange-200 opacity-30 animate-ping'></div>
            </div>
            <div className='relative bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-4 shadow-lg'>
              <CheckCircle size={48} className='text-white' strokeWidth={2} />
            </div>
          </div>
          
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            <span className='bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent'>
              Thank You!
            </span>
          </h1>
          
          <p className='text-base text-gray-800 font-medium mb-1'>
            Your order has been successfully placed
          </p>
          
          <p className='text-gray-600 text-sm'>
            Redirecting to home in <span className='font-bold text-orange-600'>{countdown}</span> seconds...
          </p>
        </div>

        {/* Mission & Vision - Compact Side by Side */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          
          {/* Mission Card */}
          <div className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
            <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity'></div>
            <div className='relative p-4 text-white'>
              <div className='flex items-center mb-2'>
                <Target className='mr-2' size={24} />
                <h2 className='text-xl font-bold'>Our Mission</h2>
              </div>
              <p className='text-xs leading-relaxed opacity-95'>
                To be the trusted partner for businesses nationwide, delivering exceptional corporate gifts that strengthen relationships and elevate brand presence.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity'></div>
            <div className='relative p-4 text-white'>
              <div className='flex items-center mb-2'>
                <Eye className='mr-2' size={24} />
                <h2 className='text-xl font-bold'>Our Vision</h2>
              </div>
              <p className='text-xs leading-relaxed opacity-95'>
                To revolutionize corporate gifting by combining quality, creativity, and personalization, making every gift a memorable experience that drives business success.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values - Ultra Compact Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          
          {/* Value 1: Quality */}
          <div className='group bg-white rounded-lg shadow-sm hover:shadow-md p-3 border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 transform hover:scale-105'>
            <div className='text-center'>
              <div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1.5'>
                <Award className='text-orange-600' size={16} />
              </div>
              <h3 className='text-xs font-bold text-gray-800 mb-0.5'>Quality</h3>
              <p className='text-[10px] text-gray-600'>Premium products</p>
            </div>
          </div>

          {/* Value 2: Trust */}
          <div className='group bg-white rounded-lg shadow-sm hover:shadow-md p-3 border-2 border-yellow-100 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105'>
            <div className='text-center'>
              <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-1.5'>
                <Heart className='text-yellow-600' size={16} />
              </div>
              <h3 className='text-xs font-bold text-gray-800 mb-0.5'>Trust</h3>
              <p className='text-[10px] text-gray-600'>Lasting relationships</p>
            </div>
          </div>

          {/* Value 3: Innovation */}
          <div className='group bg-white rounded-lg shadow-sm hover:shadow-md p-3 border-2 border-green-100 hover:border-green-400 transition-all duration-300 transform hover:scale-105'>
            <div className='text-center'>
              <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1.5'>
                <Sparkles className='text-green-600' size={16} />
              </div>
              <h3 className='text-xs font-bold text-gray-800 mb-0.5'>Innovation</h3>
              <p className='text-[10px] text-gray-600'>Creative solutions</p>
            </div>
          </div>

          {/* Value 4: Service */}
          <div className='group bg-white rounded-lg shadow-sm hover:shadow-md p-3 border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-105'>
            <div className='text-center'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1.5'>
                <Users className='text-blue-600' size={16} />
              </div>
              <h3 className='text-xs font-bold text-gray-800 mb-0.5'>Service</h3>
              <p className='text-[10px] text-gray-600'>Dedicated support</p>
            </div>
          </div>

        </div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default ThankYou
import React from 'react'

const BrandMarquee = () => {
  // Brand logos - actual brands from your image
  const brands = [
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png' },
    { name: 'Allen Solly', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Allen-Solly-logo.png' },
    { name: 'American Tourister', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/American_Tourister_logo.svg/200px-American_Tourister_logo.svg.png' },
    { name: 'Arrow', logo: 'https://logos-world.net/wp-content/uploads/2023/02/Arrow-Logo.png' },
    { name: 'Artis', logo: 'https://www.artis.in/images/artis-logo.png' },
    { name: 'Bajaj', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bajaj_Auto_Logo.svg/200px-Bajaj_Auto_Logo.svg.png' },
    { name: 'Be Home', logo: 'https://behome.in/images/logo.png' },
    { name: 'boAt', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/BoAt_logo.svg/200px-BoAt_logo.svg.png' },
    { name: 'The Body Shop', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Body_Shop_logo.svg/200px-The_Body_Shop_logo.svg.png' },
    { name: 'Borosil', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Borosil_logo.svg/200px-Borosil_logo.svg.png' },
    { name: 'Caslay', logo: 'https://www.caslay.com/images/logo.png' },
    { name: 'Crompton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Crompton_logo.svg/200px-Crompton_logo.svg.png' },
    { name: 'Fujifilm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Fujifilm_logo.svg/200px-Fujifilm_logo.svg.png' },
    { name: 'Fuzo', logo: 'https://www.fuzo.in/images/logo.png' },
    { name: 'Cello', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cello_logo.svg/200px-Cello_logo.svg.png' },
    { name: 'Glasafe', logo: 'https://www.glasafe.com/images/logo.png' },
    { name: 'Goldnuts', logo: 'https://www.goldnuts.in/images/logo.png' },
    { name: 'Happilo', logo: 'https://happilo.com/cdn/shop/files/happilo-logo.png' },
    { name: 'CookieMart', logo: 'https://www.cookiemart.in/images/logo.png' },
    { name: 'Hummel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hummel_logo.svg/200px-Hummel_logo.svg.png' },
    { name: 'JBL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/JBL_logo.svg/200px-JBL_logo.svg.png' },
    { name: 'Kent', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kent_RO_logo.svg/200px-Kent_RO_logo.svg.png' },
    { name: 'Lyka', logo: 'https://www.lyka.in/images/logo.png' },
    { name: 'M&S', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Marks_%26_Spencer_logo.svg/200px-Marks_%26_Spencer_logo.svg.png' },
    { name: 'Caffeine', logo: 'https://www.mcaffeine.com/cdn/shop/files/logo.png' },
    { name: 'Milton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Milton_logo.svg/200px-Milton_logo.svg.png' },
    { name: 'Monte Carlo', logo: 'https://www.montecarlobrand.com/images/logo.png' },
    { name: 'Jack & Jones', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jack_%26_Jones_logo.svg/200px-Jack_%26_Jones_logo.svg.png' },
    { name: 'Artiart', logo: 'https://www.artiart.in/images/logo.png' },
    { name: 'Ofikart', logo: 'https://www.ofikart.com/images/logo.png' },
    { name: 'Portronics', logo: 'https://www.portronics.com/cdn/shop/files/logo.png' },
    { name: 'U.S. Polo Assn.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/U.S._Polo_Assn._logo.svg/200px-U.S._Polo_Assn._logo.svg.png' },
    { name: 'STOLT', logo: 'https://www.stolt.in/images/logo.png' },
    { name: 'Swiss Military', logo: 'https://www.swissmilitary.in/images/logo.png' },
    { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/200px-Sony_logo.svg.png' },
    { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Puma_logo.svg/200px-Puma_logo.svg.png' },
    { name: 'Rare Rabbit', logo: 'https://www.rarerabbit.in/cdn/shop/files/logo.png' },
    { name: 'Van Heusen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Van_Heusen_logo.svg/200px-Van_Heusen_logo.svg.png' },
    { name: 'Backbencher', logo: 'https://www.backbencher.in/images/logo.png' },
    { name: 'SCOTT', logo: 'https://www.scott.in/images/logo.png' },
    { name: 'Lotto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lotto_Sport_Italia_logo.svg/200px-Lotto_Sport_Italia_logo.svg.png' },
    { name: 'Raymond', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Raymond_logo.svg/200px-Raymond_logo.svg.png' },
    { name: 'Sanoor', logo: 'https://www.sanoor.in/images/logo.png' },
    { name: 'Wildcraft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wildcraft_logo.svg/200px-Wildcraft_logo.svg.png' },
    { name: 'Urban Gear', logo: 'https://www.urbangear.in/images/logo.png' },
    { name: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Decathlon_Logo.svg/200px-Decathlon_Logo.svg.png' },
    { name: 'Louis Philippe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Louis_Philippe_logo.svg/200px-Louis_Philippe_logo.svg.png' },
    { name: 'Safari', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Safari_Industries_logo.svg/200px-Safari_Industries_logo.svg.png' },
    { name: 'VIP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/VIP_Industries_logo.svg/200px-VIP_Industries_logo.svg.png' },
    { name: 'Cadbury', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cadbury_logo.svg/200px-Cadbury_logo.svg.png' },
  ]

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <div className='py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
            Brands We Serve
          </h2>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
            Trusted by leading brands worldwide for quality merchandise and corporate solutions
          </p>
          <div className='mt-4 flex items-center justify-center gap-2'>
            <div className='h-1 w-20 bg-gradient-to-r from-transparent via-gray-800 to-transparent'></div>
            <div className='h-2 w-2 bg-gray-800 rounded-full'></div>
            <div className='h-1 w-20 bg-gradient-to-r from-transparent via-gray-800 to-transparent'></div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className='relative'>
          {/* Gradient Overlays */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'></div>

          {/* Marquee Track */}
          <div className='marquee-container py-8'>
            <div className='marquee-content'>
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className='marquee-item flex-shrink-0 mx-8 group'
                >
                  <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 w-40 h-28 flex items-center justify-center'>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className='max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100'
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="text-gray-600 font-semibold text-lg">${brand.name}</div>`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <p className='text-3xl font-bold text-gray-900 mb-1'>500+</p>
            <p className='text-sm text-gray-600'>Brands Served</p>
          </div>
          <div className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <p className='text-3xl font-bold text-gray-900 mb-1'>10K+</p>
            <p className='text-sm text-gray-600'>Orders Delivered</p>
          </div>
          <div className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <p className='text-3xl font-bold text-gray-900 mb-1'>98%</p>
            <p className='text-sm text-gray-600'>Client Satisfaction</p>
          </div>
          <div className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <p className='text-3xl font-bold text-gray-900 mb-1'>50+</p>
            <p className='text-sm text-gray-600'>Cities Covered</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .marquee-item {
          min-width: fit-content;
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}

export default BrandMarquee

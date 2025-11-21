import React from 'react'
import Hero from '../Components/Hero'
import LastestCollection from '../Components/LastestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletteBox from '../Components/NewsletteBox'

const Home = () => {
  return (
    <div>
      <Hero/>
 
      <LastestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletteBox/>

    </div>
  )
}

export default Home
import Image from 'next/image'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import BestSelling from '@/app/components/BestSelling'
import OurProducts from './components/OurProducts'
import ExclusiveOffer from './components/ExclusiveOffer'
import DesignerClothes from './components/DesignerClothes'
import FeedbackCorner from './components/FeedbackCorner'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    
    <Header/>
    <Hero/>
    <BestSelling/>
    <OurProducts/>
    <ExclusiveOffer/>
    <DesignerClothes/>
    {/* <FeedbackCorner/> */}
    <Footer/>
    

    
    </>
  )
}

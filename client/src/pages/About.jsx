import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div> 


      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Our medical healthcare platform delivers trusted information, expert guidance, and compassionate care. We connect patients with professionals, promote wellness, and empower healthier lives through reliable resources and personalized health solutions.</p>
          <p>We focus on preventive care, timely treatment, and continuous support. Our mission is to make healthcare accessible, understandable, and effective for everyone, ensuring better health outcomes and improved quality of life.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>With advanced technology and dedicated experts, we bridge the gap between patients and quality healthcare. Our commitment is to provide accurate information, easy access to services, and a seamless healthcare experience.</p>
        </div>
      </div> 


      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div> 


      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendation and reminder to help you to stay on top of your health</p>
        </div>
      </div>
    </div>
  )
}

export default About
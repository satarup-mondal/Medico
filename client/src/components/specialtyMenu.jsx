import React from 'react'
import { specialtyData } from '../assets/assets'
import {Link} from 'react-router-dom'

const specialtyMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'            id ='specialty'>
         <h1 className='text-3xl font-medium '>Find by Specialty</h1>
         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment</p> 

         <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
             {specialtyData.map((item , index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctors/${item.specialty}`}>
                    <img  src={item.image} alt="" />
                    <p>{item.specialty}</p>
                </Link>
             ))}
         </div>
    </div>
  )
}

export default specialtyMenu ; 



import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctor = () => { 

   const navigate = useNavigate()
   const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p> 

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'> 
            {doctors.slice(0,10).map((item , index)=> (
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='flex flex-col items-center text-center border border-blue-200 bg-white p-4 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2' key={index}>
                    <img className='w-24 h-24 object-cover rounded-full mb-4' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-green-600 mb-1'>
                            <p className='flex items-center gap-2 text-sm text-green-600 mb-1'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.specialty}</p>
                    </div>
                </div>
            ))}
         </div>
         <button onClick ={()=> {navigate('/doctors') ; scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
    </div>
  )
}

export default TopDoctor
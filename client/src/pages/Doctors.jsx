import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => { 

  const {specialty} = useParams() 
  const [filterDoc , setaFilterDoc] = useState([])
  const navigate = useNavigate()


  const {doctors} = useContext(AppContext) 





  const applyFilter = () => {
    if(specialty){
      setaFilterDoc(doctors.filter(doc => doc.specialty === specialty))
    }else{
      setaFilterDoc(doctors)
    }
  } 

  useEffect(()=> {
      applyFilter()
  }, [doctors , specialty])
  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>

            <p onClick={()=> specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialty === "General physician" ? "bg-indigo-100 text-black": ""}`}>General physician</p>
            <p onClick={()=> specialty === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specialty === "Gynecologist" ? "bg-indigo-100 text-black": ""}`}>Gynecologist</p>
            <p  onClick={()=> specialty === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specialty === "Dermatologist" ? "bg-indigo-100 text-black": ""}`}>Dermatologist</p>
            <p  onClick={()=> specialty === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specialty === "Pediatricians" ? "bg-indigo-100 text-black": ""}`}>Pediatricians</p>
            <p  onClick={()=> specialty === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${specialty === "Neurologist" ? "bg-indigo-100 text-black": ""}`}>Neurologist</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
            {
              filterDoc.map((item , index)=> (
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
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors ; 
import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const colors=["#9333ea", "#d97706","#dc2626","#0284c7","#16a34a"]

  const [allResumes, setAllResumes]=useState([]);

  const [showCreateResume, setShowCreateResume]=useState(false);
  
  const [title, setTitle]=useState('');
  const [resume,setResume]=useState(null);
    const [editResumeId, setEditResumeId]=useState('');
    const navigate=useNavigate()



  // get the dummay resume data
  const loadAllResumes= async()=>{
    setAllResumes(dummyResumeData)
  }

  const createResume=async(event)=>{
   event.preventDefault();
    setShowCreateResume(false)
    navigate(`/app/builder/res123`)
  }

  // Add the dummay remume data
  useEffect(()=>{
    loadAllResumes();
  },[])

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className=' text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-800
                      bg-clip-text text-transparent sm:hidden'>
          Welcome, Akash Mondal
        </p>
        <div className='flex gap-4'>

          {/* Createa new resume  */}
          <button  onClick={()=>setShowCreateResume(true)}
             className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center
                            rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group
                            hover:border-indigo-500 hover:shadow-lg transition-all duration-300 
                             cursor-pointer">

            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br 
                           from-indigo-300 to-indigo-500 text-white rounded-full'/>

            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
          </button>

          {/* Upload existing resume */}
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center
                            rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group
                            hover:border-purple-500 hover:shadow-lg transition-all duration-300 
                             cursor-pointer">

            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br 
                           from-purple-300 to-purple-500 text-white rounded-full'/>

            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
          </button>
        </div>

        <hr className='border-slate-400 my-6 sm:w-[305px]' />

          {/* Display the dammy rresume data */}
          <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
            {allResumes.map((resume , index)=>{
               const basecolors=colors[index% colors.length];
               return(
                <button key={index} 
                     className='relative w-full sm:max-w-36 h-48 flex flex-col
                               items-center justify-center rounded-lg gap-2 border group
                                hover:shadow-lg transition-all duration-300 cursor-pointer'
                    style={{background:`linear-gradient(135deg, ${basecolors}10, ${basecolors}40)`, 
                            borderColor:basecolors + "40"}}            >

                             <FilePenLineIcon  className='size-7 group-hover:scale-105 transition-all'
                                              style={{color:basecolors}}/>   
                          <p className='text-sm , group-hove:scale-105 transition-all px-2 text-center'
                             style={{color:basecolors}}>
                            {resume.title}
                          </p>     

                          <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 
                                        transition-all duration-300 px-2 text-center'
                              style={{color:basecolors + '90'}}          >
                           Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                          </p>   

                          <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                              <TrashIcon  className='size-7 p-1.5 hover:bg-red-400 rounded text-slate-700 transition-colors'/>

                              <PencilIcon className='size-7 p-1.5 hover:bg-green-300 rounded text-slate-700 transition-colors'/>
                          </div>            
                </button>
               )

            })}
          </div>


          {/* Clicked the create or upload button and get the popup */}
            {
              showCreateResume && (
                <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center"> 
                     <div onClick={e=>e.stopPropagation()}
                          className='relative bg-slate-50 border shadow-md rounded-lg 
                                     w-full max-w-sm p-6'>
                     <h2 className='text-xl font-bold mb-4'> 
                      Create a Resume
                     </h2>
                     <input  type='text' placeholder='Enter Resume Title'
                             className="w-full px-4 py-2 mb-4 border border-slate-300 rounded-md outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300"
                             required/>

                        <button className='w-full py-2 bg-orange-400 text-white rounded
                                          hover:bg-orange-600 transition-colors'>
                        Create Resume
                        </button>   

                         <XIcon  className='absolute top-4 right-4 text-slate-400 hover:text-slate-600
                                          cursor-pointer transition-colors'
                                  onClick={()=>{setShowCreateResume(false); setTitle("")}} /> 
                     </div>            

                </form>
              )
            }

      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'

const Title = ({ title, description }) => {


    return (
        <div className='text-center mt-6 text-slate-500'>
            <h2 className='text-2xl sm:text-4xl font-medium'>
                {title}
            </h2 >
            {/* <p className='max-sm max-w-2xl mt-4 text-slate-500'>
            {description}
           </p> */}
            <p className="w-full max-w-2xl mx-auto mt-4 px-4 sm:px-6 text-sm sm:text-base leading-relaxed text-slate-500">
                {description}
            </p>

        </div>
    )
}

export default Title

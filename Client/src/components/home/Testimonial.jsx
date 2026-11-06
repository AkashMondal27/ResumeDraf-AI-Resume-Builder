import React from 'react'
import Title from './Title'
import { BookUser } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';


const Testimonial = () => {

  
 const cardsData = [
    {
        image: 'https://media.licdn.com/dms/image/v2/D4E35AQH2GjaKu2nd8A/profile-framedphoto-shrink_800_800/B4EZq2IhIdKUAg-/0/1763992277883?e=1794578400&v=beta&t=38_Sn1aaoZCaA9kbmDLym4tlzdc5ZlZtDtYW2Krb73g',
        name: 'Avik Ghosh',
        handle: '@avik-ghosh07',
        linkedin: 'https://www.linkedin.com/in/avik-ghosh07/',
        review: 'ResumeDraf makes creating professional resumes effortless. The AI suggestions helped me build an impressive resume in minutes.'
    },
    {
        image: 'https://media.licdn.com/dms/image/v2/D4D35AQHDxoLbxqXrPw/profile-framedphoto-shrink_800_800/B4DaBJO32RHsAY-/0/1787935031334?e=1794578400&v=beta&t=J4V3NP4b6dLpFD_ZWZ1CIMx0nUViWBtbPNYyFsimXpo',
        name: 'Chirantan Mallick',
        handle: '@c-mallick',
        linkedin: 'https://www.linkedin.com/in/c-mallick/',
        review: 'I love how easy it is to customize my resume. The templates are clean, modern, and perfectly designed for job seekers.'
    },
    {
        image: 'https://media.licdn.com/dms/image/v2/D5635AQELY8zsNerIPQ/profile-framedphoto-shrink_800_800/B56Z13wVJaHAAg-/0/1775830651755?e=1794578400&v=beta&t=SfIAwr6FJVUncIZc217bDEX5NOS71KW60Z1hnj7GFZI',
        name: 'Piyal Baray',
        handle: '@piyal-baray',
        linkedin: 'https://www.linkedin.com/in/piyal-baray-0a4486402/',
        review: 'The ATS-friendly features are amazing! ResumeDraf helped me create a professional resume that stands out to recruiters.'
    },
    {
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFtDLPAxpwF7g/profile-displayphoto-crop_800_800/B4DaCJ7G6kJYAI-/0/1789020372851?e=1795651200&v=beta&t=WJ8b15yuQPzP5UnbIKoMoeoUBTUDOKQwFYpnKnN02p0',
        name: 'Gourab Ganguly',
        handle: '@gourab-ganguly',
        linkedin: 'https://www.linkedin.com/in/gourab-ganguly/',
        review: 'A fantastic resume builder for students and freshers. Simple interface, helpful AI tools, and great results!'
    }
];
   

/*
const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">

        <div className="flex gap-2">

            <img
                className="size-11 rounded-full object-cover"
                src={card.image}
                alt={card.name}
            />

            <div className="flex flex-col">

                <div className="flex items-center gap-2">

                    <p className="font-medium text-gray-900">
                        {card.name}
                    </p>

                    <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="View LinkedIn Profile"
                    >
                       <FaLinkedin size={16} />
                    </a>

                </div>

                <span className="text-xs text-slate-500">
                    {card.handle}
                </span>

            </div>
        </div>

        <p className="text-sm py-4 text-gray-800">
            {card.review}
        </p>

    </div>
);

*/

const CreateCard = ({ card }) => (
    <div className="group w-[250px] sm:w-72 shrink-0 mx-2 
        rounded-2xl border border-slate-200 bg-white 
        p-4 sm:p-5 shadow-sm hover:shadow-lg 
        hover:border-orange-200 transition-all duration-300">

        {/* Profile */}
        <div className="flex items-center gap-3">

            <img
                className="size-12 rounded-full object-cover ring-2 ring-slate-100"
                src={card.image}
                alt={card.name}
            />

            <div className="flex-1 min-w-0">

                <div className="flex items-center gap-2">

                    <p className="text-sm font-semibold text-slate-800 truncate">
                        {card.name}
                    </p>

                    <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors shrink-0"
                        title="View LinkedIn Profile"
                    >
                        <FaLinkedin size={17} />
                    </a>

                </div>

                <span className="text-xs text-slate-500">
                    {card.handle}
                </span>

            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-4"></div>

        {/* Review */}
        <p className="text-[13px] sm:text-sm leading-relaxed text-slate-600 min-h-[90px]">
            "{card.review}"
        </p>

    </div>
);

  return (
   <> 
    <div id="testimonials"
      className=' flex flex-col justify-center items-center my-10 scroll-mt-12'>
      {/* // Badge  */}
      <div className="flex items-center gap-2 text-sm text-orange-800 bg-orange-400/10  rounded-full ">
        <BookUser className='sizw-4.5 stroke-green-600' />
        <span>Testiminials</span>
      </div>

      {/* title & description */}
      <Title title="Don't just take our words"
        description="Here what our users say about us.we're always looking for ways to improve.
                     If you have a positive experience with us, leave a review."/>

    </div>


            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-max pt-6 sm:pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-max pt-6 sm:pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

                        <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
        </>    

  )
}

export default Testimonial

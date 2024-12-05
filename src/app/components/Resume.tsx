


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Resume () {

  return (
    <div className='flex justify-center items-center min-h-screen bg-white-300'>
       <div className=' container mx-auto p-10 font-serif '>
        <div className='flex'>
        <div className='bg-sky-50 w-[300px] h-auto p-8 space-y-10'>
            <Image className='rounded-full' src="/profile.png" alt="profile" width={150} height={150}/> 
            <section>
                <h3 className='text-lg font-bold border-b-2 pb-1 px-8px'>OBJECTIVE</h3>
                <i>
                    <p className='text-sm leading-6 mt-2'>As a Third-year Biotechnology student with a strong foundition in molecular biology techniques
                        Working on biotechnology-related projects & also growing experties in programming particularly
                        in Typescript.</p>
                </i>
    
            <div className="mt-6">
                <h3 className='font-bold text-lg border-b-2'>CERTIFICATION</h3>
                
                    <p className='text-sm'>Basic Molecular Biology Techniques:
                        <br/>(From jinnah university for women karachi)
                    </p>
                    <p><b>The Role of AI in Microbiology Career:</b> <br/>
                        (Science & Technology Online)</p>
                    <p><b>Artificial Intelligence, Web 3.0 & Metaverse:</b>
                        <br/> (from Governor House karachi(Ongoing))
                    </p>
            </div>
            </section>
        </div>
      
        <div className='w-[600px] '>
            <h1 className='text-3xl font-bold p-2 bg-cyan-200 font-serif'>Static Interactive Resume</h1>
            <div className='bg-gradient-to-b from-cyan-50 to-cyan-500 p-4'>
            <section className='mb-2 pb-4 font-serif '>
                <h3 className='text-lg font-bold border-b-2 pb-1 '>PERSONAL INFORMATION</h3>
                <p><b>Name:</b>Muskan Batool</p>
                <p><b>Email:</b>muskanbatool355@gmail.com</p>
                <p><b>linkdIn:</b> <Link href="https://www.linkedin.com/in/muskan-batool-15584b277">https://www.linkedin.com/in/muskan-batool-15584b277</Link></p>
            </section>
            <section className='mb-4 pb-4 font-serif ' >
                <h3 className='text-lg font-bold border-b-2 pb-1'>EDUCATION</h3>
                <p><b>BS'Biotechnology</b>- at Jinnah university for women karachi. <br/>(In progress)</p>
                <p><b>Intermediate of Pre-Medical</b>-From Saint Jhon's group of grammar school & college jacobabad.</p>
                <p><b>Matriculation of Pre-Medical</b>-From Saint Jhon's group of grammar school & college jacobabad.
                </p>
            </section>
            <section className='mb-4 pb-4 font-serif'>
                <h3 className='text-lg font-bold border-b-2 pb-1'>SKILLS</h3>
                <ul>
                    <li>Analyzing Skill of articles related-biotechnology</li>
                    <li>Labortary skill</li>
                    <li>Typescript</li>
                    <li>HTML & CSS</li>
                    <li> Good Communication Skill</li>
                </ul>
            </section>
            <section className='mb-4 pb-4 font-serif'>
                <h3 className='text-lg font-bold border-b-2 pb-1'>EXPERIENCE</h3>
                <p><b>Work-shop Participant</b>-Basic Molecular Biology Techniques</p>
            </section>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}



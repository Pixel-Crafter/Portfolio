import ContactForm from '@/components/ContactForm'
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div
      style={{backgroundColor: "#1C1B22"}}
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
    >
      <div
        style={{backgroundImage: "url(bg-3.jpg)"}}
        className='h-[70%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex'
      >
        <div className='w-1/2 p-8'>
          <div className='absolute left-20 top-20 w-[70] md:w-[30%]'>
            <ContactForm />
          </div>
        </div>
        
        <div className='w-3/4 flex items-center justify-center pt-5 pb-7'>
          <Image
            src='/contactme.png'
            alt='Contact Me'
            className='w-[70%] h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default page;
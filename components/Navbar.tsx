import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative'>
                <Image 
                    src="/profile.png"
                    alt='logo'
                    width={40}
                    height={40}
                    className='w-full h-full object-contain'
                />
            </div>
            <h1 className='text-white text-[25px] font-semibold'>
                Pixel
                <span className='text-transparent font-b bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
                    {" "}
                    Crafter
                </span>
            </h1>
        </div>

        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social) => (
                <a key={social.name} href={social.url}>
                    <Image
                        src={social.src}
                        alt={social.name}
                        width={40}
                        height={40}
                    />
                </a>
            ))}
        </div>
    </div>
  );
};

export default Navbar;
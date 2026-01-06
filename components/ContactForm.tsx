// import React from 'react'

// const ContactForm = () => {
//   return (
//     <form>
//         <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
//         <div className='mb-3'>
//             <input
//                 type="text"
//                 placeholder='Your Name'
//                 name='name'
//                 style={{
//                 }}
//                 className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
//             />            
//         </div>
//         <div className='mb-3'>
//             <input 
//                 type="email"
//                 placeholder='Email'
//                 name='email'
//                 className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
//             />            
//         </div>

//         <div className='mb-3'>
//             <input 
//                 placeholder='Your Message'
//                 name='message'
//                 className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
//             />            
//         </div>
//         <button className='px-6 mb-5 py-3 text-sm font-bold text-white uppercase tranistion-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
//             Send Message
//         </button>
//     </form>
//   );
// };

// export default ContactForm;

"use client"

import React, { useState } from "react"

const ContactForm: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // handle form submission
        alert("Form submitted!")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {/* Name */}
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="
                    w-full
                    p-3
                    rounded-lg
                    border border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-800
                    text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                    transition-colors duration-300
                "
            />

            {/* Email */}
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                    w-full
                    p-3
                    rounded-lg
                    border border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-800
                    text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                    transition-colors duration-300
                "
            />

            {/* Message */}
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="
                    w-full
                    p-3
                    rounded-lg
                    border border-gray-300 dark:border-gray-600
                    bg-white dark:bg-gray-800
                    text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                    transition-colors duration-300
                "
            />

            {/* Submit */}
            <button
                type="submit"
                className="
                    w-full
                    py-3
                    rounded-lg
                    bg-black dark:bg-white
                    text-white dark:text-black
                    font-semibold
                    hover:bg-gray-800 dark:hover:bg-gray-200
                    transition-colors duration-300
                "
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm;
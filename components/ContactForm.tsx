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

"use client"; // Indicate that this is a client component

import React from 'react';

const ContactForm = () => {
  return (
    <div className="login-box">
      <form>
        <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
        <div className="user-box mb-3">
          <input
            type="text"
            // placeholder='Your Name'
            name='name'
            required
          />
          <label>Your Name</label>
        </div>
        <div className="user-box mb-3">
          <input
            type="email"
            // placeholder='Email'
            name='email'
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box mb-3">
          <input
            type="text"
            // placeholder='Your Message'
            name='message'
            required
          />
          <label>Your Message</label>
        </div>
        <button className='px-6 mb py-3 text-sm font-bold text-white uppercase tranistion-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
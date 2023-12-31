import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e0a7e1c8-b5a2-4ea8-8751-4ba5f13d9933" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-black'>Contact</p>
                <p className='text-black py-4'>// Submit the form below or shoot me an email - amalfullstackdev23@gmail.com</p>
            </div>
            <input className='bg-black p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-black p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact

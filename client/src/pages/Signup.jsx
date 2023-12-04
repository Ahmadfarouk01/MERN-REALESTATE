import React from 'react'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg'  id='username'/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg'  id='email'/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg'  id='password'/>
        <button className='bg-slate-900 p-3 rounded-lg text-white text-xl uppercase hover:opacity-95 disabled:bg-slate-500'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account??</p>
        <link to={"/sign-in"}>
          <span className='blue'>Sign In  </span>
        </link>
      </div>
    </div>
  )
}

import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>sign Up</h1>
      <form className='flex flex-col gap-4'> 
        <input type="text" placeholder='username' className='border rounded-lg p-2' id='username' />
        <input type="email" placeholder='email' className='border rounded-lg p-2' id='email' />
        <input type="password" placeholder='password' className='border rounded-lg p-2' id='password' />
      <button className='bg-slate-700 text-white border rounded-lg p-2 uppercase hover:opacity-95 disabled:m-80'>signup</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
        <Link to={"/Sign-In"}><span className='text-blue-700'>sign in</span></Link>
      </div>
    </div>
  )
}

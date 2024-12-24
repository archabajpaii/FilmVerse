import React from 'react'
import logoimage from '../assets/cinema.png'

function Header() {
  return (
    <>
    
    <header className='bg-slate-50 shadow-md flex justify-between items-center'>
        <a href="/" className='flex items-center font-bold'><img src={logoimage} alt="" className='w-auto object-contain h-16 p-2'/>FilmVerse</a>
        <nav>
        <ul className='flex space-x-7 p-5 gap-2'>
            <li className='text-xl font-bold hover:text-pink-500'>
                <a href="/">Home</a>
                </li>
            <li className='text-xl font-bold hover:text-pink-500'>
                <a href="#about">About Us</a>
                </li>
            <li className='text-xl font-bold hover:text-pink-500'>
                <a href="/movies">Movie Mania</a>
                </li>
        </ul>
        </nav>
    </header>
   
    </>
  )
}

export default Header
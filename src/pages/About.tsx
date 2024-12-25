import React from 'react'
import popcorn from '../assets/about.png'
import cameraroll from '../assets/cameraroll.png'

function About() {
  return (
    <>
    {/* within a page only if we route we can use id like this, but if we want to render an entirely diff page so we use route */}
    <section id='about'>
    <div className='h-[700px] w-full'>
        
        <div className=' flex justify-between items-center p-6 text-wrap'>
            <img src={popcorn} alt="" className='w-auto h-[500px] object-contain animate-bounce ' />
            <div className='flex flex-col gap-5'>
            <h1 className='text-center mt-2 text-3xl font-bold text-red-400 text-shadow-xl '>About Us</h1>
            <p className='text-wrap text-xl font-medium '>Welcome to Movie Mania! We’re passionate about movies and want to share that excitement with you. Whether you’re looking for the latest blockbuster, classic films, or hidden gems, we have something for every movie lover. Our goal is to make discovering and enjoying movies easy and fun. Join us to explore, rate, and discuss your favorite films with fellow movie enthusiasts!</p>

            <p className='text-wrap text-xl font-medium '>Welcome to Movie Mania! We’re passionate about movies and want to share that excitement with you. Whether you’re looking for the latest blockbuster, classic films, or hidden gems, we have something for every movie lover. Our goal is to make discovering and enjoying movies easy and fun. Join us to explore, rate, and discuss your favorite films with fellow movie enthusiasts!</p>
            </div>
        </div>
        <img src={cameraroll} className='w-full h-[150px]'/>
    </div>
    </section>
    </>
  )
}

export default About
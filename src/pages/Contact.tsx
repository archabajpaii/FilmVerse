import React from 'react'
import drinks from '../assets/drinks.png'

function Contact() {
  return (
    <>
    <div className='w-full h-screen p-20'>
        <h2 className='text-center font-bold text-3xl text-shadow-lg text-amber-500'>Unleash your love for Cinema!</h2>
        <div className='flex justify-between items-center gap-4'>
            <img src={drinks} alt="" className='object-contain w-auto h-96'/>
            <p className='text-xl font-medium text-wrap'>Share your thoughts, reviews, and ratings with other movie lovers. Connect with people who share your passion for cinema and broaden your movie horizons with their recommendations.

Let your cinematic adventure begin here at FilmVerse – where every movie is a journey worth taking.</p>
        </div>
    </div>
    
    </>
  )
}

export default Contact
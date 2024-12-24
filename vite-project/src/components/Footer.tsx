import React from 'react'

function Footer() {
  return (
   <>
   <div>
   <footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto flex justify-between px-6">
    <div className="w-1/4">
      <h3 className="font-bold text-lg mb-4">FilmVerse</h3>
      <ul>
        <li><a href="/about" className="hover:text-pink-500">About Us</a></li>
        <li><a href="/privacy" className="hover:text-pink-500">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:text-pink-500">Terms & Conditions</a></li>
        <li><a href="/contact" className="hover:text-pink-500">Contact Us</a></li>
        <li><a href="/faq" className="hover:text-pink-500">FAQs</a></li>
      </ul>
    </div>

    <div className="w-1/4">
      <h3 className="font-bold text-lg mb-4">Follow Us</h3>
      <div className="flex space-x-2">
        <a href="https://facebook.com" target='_blank' className="text-lg hover:text-pink-500">Facebook</a>
        <a href="https://x.com/" target='_blank' className="text-lg hover:text-pink-500">Twitter</a>
     
      </div>
    </div>

    <div className="w-1/4">
      <h3 className="font-bold text-lg mb-4">Quick Links</h3>
      <ul>
        <li><a href="/action" className="hover:text-pink-500">Action Movies</a></li>
        <li><a href="/comedy" className="hover:text-pink-500">Comedy Movies</a></li>
        <li><a href="/drama" className="hover:text-pink-500">Drama Movies</a></li>
        <li><a href="/horror" className="hover:text-pink-500">Horror Movies</a></li>
      </ul>
    </div>

    <div className="w-1/4">
      <h3 className="font-bold text-lg mb-4">Subscribe</h3>
      <input type="email" placeholder="Enter your email" className="p-2 mb-4 rounded text-black" />
      <button className="bg-pink-600 text-white px-4 py-2 rounded">Subscribe</button>
    </div>
  </div>

  <div className="text-center text-sm py-4 border-t border-gray-700">
    <p>© 2024 FilmVerse. All Rights Reserved.</p>
  </div>
</footer>

   </div>
   </>
  )
}

export default Footer
import React from 'react'

function Footer() {
  return (
   <footer className="bg-black text-white text-center p-4 my-10 border-t-2 border-red-500">
      &copy; {new Date().getFullYear()} <span className='text-red-500'>Cinema</span>. All rights reserved.
    </footer>
  )
}

export default Footer
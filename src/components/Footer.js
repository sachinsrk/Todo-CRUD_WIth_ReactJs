import React from 'react'

const Footer = () => {
  let footerstyle = {
    position:"relative",
    top:"70vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-3 ' style={footerstyle}>
       <p className='text-center'>
        Copyright &copy; TODO.com
       </p>
      
    </footer>
  )
}

export default Footer

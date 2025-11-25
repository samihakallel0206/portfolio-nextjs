import Link from 'next/link'
import React from 'react'

const BarreDeNav = () => {
  return (
    <div>
    
        <nav className='nav-container'>
          <Link href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrT3F63P8GltZSSWYWhPJrxuTHo_QagFSkf2JJSCb-ikgKS35j8kUB-N-TDdywXE-GGSk&usqp=CAU"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>A propos</Link>
          <Link href={"/skills"}>Skills</Link>
          <Link href={"/projet"}>Projet</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      
      
    </div>
  );
}

export default BarreDeNav
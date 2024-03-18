
'use client'
//import Logo from "../../public/logo.png"
//import Link from "next/link"
// Import the logo image directly as a React component
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Image src="/logo.png" alt="Logo" width={120} height={40} />
);

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Logo />
          <ul className="nav-links">
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/componets/SignUp">SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/*

 <div className="w-full h-20 bg-emerald-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
*/
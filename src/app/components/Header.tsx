'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Frame from "../../../public/images/Frame.png";
import Frame1 from "../../../public/images/Frame1.png"; 

export default function Header() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className='border-b bg-white font-[sans-serif] tracking-wide relative z-50'>
      <section className='py-3 bg-[#000000] text-white text-center px-10 relative mb-6'> 
        <p className='text-sm'>
          Sign up and get 20% off to your first order
          <Link href={"signup"}>
            <span className='ml-4 font-bold'> Sign Up Now</span>
          </Link>
        </p>
      </section>

      <div className='flex flex-wrap items-center justify-between w-full px-5 lg:px-14'>
        {/* Logo Section */}
        <div className='flex-shrink-0'>
          <Image src={logo} alt="logo" className='w-36' width={144} height={36} />
        </div>

        {/* Navigation Links */}
        <ul className={`lg:flex gap-x-5 ${isMenuOpen ? "flex" : "hidden"} lg:block`}>
          <li>
            <Link href='/'>
              <span className='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
                Shop
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/product-detail"}>
              <span className='lg:hover:text-[#007bff] text-gray-800 block font-semibold text-[15px]'>
                Sale
              </span>
            </Link>
          </li>
          <li>
            <Link href={"products"}>
              <span className='lg:hover:text-[#007bff] text-gray-800 block font-semibold text-[15px]'>
                New Arrivals
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/category"}>
              <span className='lg:hover:text-[#007bff] text-gray-800 block font-semibold text-[15px]'>
                Brands
              </span>
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className='lg:hidden'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        {/* Right-aligned section (Search Bar, Cart, Profile) */}
        <div className="flex items-center gap-x-6 gap-y-4">
          {/* Search bar */}
          <form onSubmit={handleSearch} className='flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-[250px] sm:max-w-[300px]'>
            <input 
              type='text' 
              placeholder='Search something...' 
              className='w-full text-sm bg-transparent outline-none pr-2' 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-600">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </form>

          {/* Cart icon */}
          <Link href="/cart" className="flex items-center">
            <Image src={Frame} alt="Cart" width={25} height={25} className="cursor-pointer" />
          </Link>

          {/* Profile icon */}
          <Link href="/profile" className="flex items-center">
            <Image src={Frame1} alt="Profile" width={25} height={25} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}

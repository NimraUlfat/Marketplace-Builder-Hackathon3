import Image from "next/image"
import logo from "../../../public/images/logo.png"
import Badge from "../../../public/images/Badge.png"
import Badge2 from "../../../public/images/Badge2.png"
import Badge3 from "../../../public/images/Badge3.png"
import Badge4 from "../../../public/images/Badge4.png"
import Badge5 from "../../../public/images/Badge5.png"
export default function Footer(){
    return(
    <div>
        <footer className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Image src={logo} alt="logo" className="w-78px h-34px" />
      <br />
      <p className="mt-2 text-sm text-gray-500">
        We have clothes that suits your style and which you are proud to wear. From women to men
      </p>

      {/* Icon Section */}
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 rounded-full p-2 border border-gray-300">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg> 
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 rounded-full p-2 border border-gray-300">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 rounded-full p-2 border border-gray-300">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 rounded-full p-2 border border-gray-300">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-6 h-6" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </div>
    </div>

    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Features</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Work</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Carer</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HELP</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">terms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FAQ</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Payments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RESOURCES</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Developmenet Tutorial</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">How to - Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        Shop.co © 2000-2023, All Rights Reserved
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
  <a className="text-gray-500">
    <Image src={Badge} alt="Badge" className="w-46.61px h-30.03px" />
  </a>
  <a className="ml-3 text-gray-500">
    <Image src={Badge2} alt="Badge" className="w-46.61px h-30.03px" />
  </a>
  <a className="ml-3 text-gray-500">
    <Image src={Badge3} alt="Badge" className="w-46.61px h-30.03px" />
  </a>
  <a className="ml-3 text-gray-500">
    <Image src={Badge4} alt="Badge" className="w-46.61px h-30.03px" />
  </a>
  <a className="ml-3 text-gray-500">
    <Image src={Badge5} alt="Badge" className="w-46.61px h-30.03px" />
  </a>
</span>
    </div>
  </div>
</footer>
</div>
)}
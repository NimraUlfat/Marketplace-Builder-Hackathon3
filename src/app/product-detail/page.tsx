import Image from "next/image"
import image1 from "../../../public/images/image1.png"
import image2 from "../../../public/images/image2.png"
import image5 from "../../../public/images/image5.png"
import image6 from "../../../public/images/image6.png"
import Frame2222 from "../../../public/images/Frame2222.png"
import Frame23 from "../../../public/images/Frame23.png"
import Frame24 from "../../../public/images/Frame24.png"
import Frame25 from "../../../public/images/Frame25.png"
import Frame26 from "../../../public/images/Frame26.png"
import Frame27 from "../../../public/images/Frame27.png"
import Frame45 from "../../../public/images/Frame45.png"
import Frame55 from "../../../public/images/Frame55.png"
import Frame56 from "../../../public/images/Frame56.png"
import Frame57 from "../../../public/images/Frame57.png"
import Frame58 from "../../../public/images/Frame58.png"

export default function Product_Detail(){
    return(
        <div className="flex bg-white min-h-screen flex-col">
            <ul className="flex items-center justify-left font-[sans-serif] space-x-4 mt-4">
      <li className="text-gray-500 text-base cursor-pointer">
        Home
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>

      <li className="text-gray-500 text-base cursor-pointer">
        Shop
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li className="text-gray-500 text-base cursor-pointer">
        Men
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li className="text-gray-800 text-base font-bold cursor-pointer">
        T-shirt
      </li>
      
    </ul>
<div className="font-sans">
          <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
              <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                  <div className="w-full lg:sticky top-0 sm:flex gap-2">
                      <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                          <Image src={image2} alt="Product2" className="w-full cursor-pointer rounded-md" />
                          <Image src={image5} alt="Product3" className="w-full cursor-pointer rounded-md" />
                          <Image src={image6} alt="Product4" className="w-full cursor-pointer rounded-md" />
                      </div>
                      <Image src={image1} alt="Product" className="w-4/5 rounded-md object-cover" />
                  </div>

                  <div>
                      <h2 className="text-2xl font-bold text-gray-800">ONE LIFE GRAPHIC T-SHIRT</h2>
                      

                      <div className="flex space-x-2 mt-4">
                          <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="yellow-300"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4">
                          <p className="text-gray-800 text-xl font-bold">$12</p>
                          <p className="text-gray-400 text-xl">$16 <span className="text-sm ml-1.5">Tax included</span></p>
                      </div>
                      <p className="text-black mt-4">
                      This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
    </p>
    
       
        <hr className="my-6 border-t-2 border-gray-300" />
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Select Color</h3>
          <div className="flex space-x-4 mt-4">
            <button className="w-10 h-10 rounded-full bg-[#6B4F31] relative flex items-center justify-center">
              <span className="absolute text-white text-xl">✔</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-green-600"></button>
            <button className="w-10 h-10 rounded-full bg-blue-800"></button>
          </div>
        </div>

        {/* Horizontal Line Below Color Section */}
        <hr className="my-6 border-t-2 border-gray-300" />


        {/* Choose Size Section Below Color Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Choose Size</h3>
          <div className="flex space-x-4 mt-4">
            {/* Small Size Button */}
            <button className="py-2 px-4 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-100">
              Small
            </button>

            {/* Medium Size Button */}
            <button className="py-2 px-4 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-100">
              Medium
            </button>

            {/* Large Size Button (Black Color) */}
            <button className="py-2 px-4 rounded-full border border-gray-300 text-sm font-medium text-white bg-black hover:bg-gray-700">
              Large
            </button>

            {/* X-Large Size Button */}
            <button className="py-2 px-4 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-100">
              X-Large
            </button>
  </div>
      </div>

      {/* Horizontal Line Below Color Section */}
    <hr className="my-6 border-t-2 border-gray-300" />
 
        {/* Combined Minus, Number, and Plus Button */}
        <div className="flex items-center space-x-12 mt-6">
          {/* Combined Button with "-", "1", and "+" */}
          <button className="py-3 px-9 rounded-full border border-gray-500 flex items-center justify-center text-2xl space-x-2">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </button>

          {/* Add to Cart Button */}
<button className="py-4 px-24 rounded-full bg-black text-white flex items-center justify-center text-xl space-x-2">
            <span>Add to Cart</span>
          </button>
        </div>



        </div>

        
      </div>
    </div>

    <div className="font-sans p-4 ">
    <ul className="flex gap-80 justify-center">
    <li id="homeTab" className="tab text-gray-600 text-base text-center py-3 px-6">
        Product Details
    </li>
    <li id="contentTab" className="tab text-gray-600 text-base text-center py-3 px-6">
        Rating & Reviews
    </li>
    <li id="profileTab" className="tab text-gray-600 text-base text-center py-3 px-6">
        FAQS
    </li>
</ul>

    
</div>

<div className="w-1/3 h-[2px] bg-black mt-4 mx-auto" />
        
        </div>

        <section className="text-gray-600 body-font">
  {/* Single heading for all sections */}
  <h2 className="text-3xl font-bold text-center mb-4" style={{maxWidth: '30%'}}>All Reviews (451)</h2>

  <div className="container px-5 py-6 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame2222} />
      </div>
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame23} />
      </div>
    </div>
  </div>

  <div className="container px-5 py-6 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame24} />
      </div>
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame25} />
      </div>
    </div>
  </div>

  <div className="container px-5 py-6 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame26} />
      </div>
      <div className="p-2 lg:w-1/2 md:w-full">
        <Image alt="content" className="object-cover object-center h-full w-full" src={Frame27} />
      </div>
    </div>
  </div>
</section>

<div className="flex justify-center mt-8">
<button className="py-4 px-24 rounded-full bg-white text-black border border-gray-300 flex items-center justify-center text-xl space-x-2">
            <span>Load More Reviews</span>
          </button>
        </div>
     <br></br>


     <div className="text-center mt-8">
    <h2 className="text-5xl font-extrabold text-black">NEW ARRIVALS</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-8xl:gap-5 gap-4">
  {/* Product 1 */}
  <div className="bg-white p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame55} alt="Product 1" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">VERTICAL STRIPED SHIRT</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 4 ? "currentColor" : "none"}
            className={i < 4 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">5.5/0</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$212</h4>
    </div>
  </div>

  {/* Product 2 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer ">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame56} alt="Product 2" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">Polo with Contrast Trims</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 3 ? "currentColor" : "none"}
            className={i < 3 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">4.0/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$212</h4>
    </div>
  </div>

  {/* Product 3 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame57} alt="Product 3" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">Polo with Tipping Details</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 4 ? "currentColor" : "none"}
            className={i < 4 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">3.0</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$180</h4>
    </div>
  </div>

  {/* Product 4 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame58} alt="Product 4" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">Black Striped T-shirt</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 5 ? "currentColor" : "none"}
            className={i < 5 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">4.5/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$120</h4>
    </div>
  </div>


  
</div>

<div className="relative flex items-center justify-center flex-1">
  <Image 
    src={Frame45}  
    alt="Fashion"
    className="w-[1,240px] h-[180px] object-cover "
    />
    </div>
       </div>

    
      
    )
}
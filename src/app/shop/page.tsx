"use client"
import Link from "next/link"
import Image from "next/image"
import Rectangle3 from "../../../public/images/Rectangle3.png"
import Vector2 from "../../../public/images/Vector2.png"
import zara from "../../../public/images/zara.png"
import Vector3 from "../../../public/images/Vector3.png"
import Group from "../../../public/images/Group.png"
import Vector4 from "../../../public/images/Vector4.png"
import main from "../../../public/images/main.png"

export default function Shop() {
  return (
    <div className="bg-[#F2F0F1] px-8 py-16 font-[sans-serif]">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-extrabold">
            Find Clothes That Matches Your Style
          </h1>
          <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
            Browse through our diverse ranges of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <Link
            href={"products"}
            className="mt-12 bg-black hover:bg-opacity-80 text-white py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block"
          >
            Shop Now
          </Link>
        </div>
        <div className="text-center">
          <Image
            src={main}
            alt="Fashion"
            width={1440}
            height={663}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section: Second Image with Logos */}
      <div className="relative flex-1 mt-16">
        <Image
          src={Rectangle3}
          alt="Fashion Background"
          className="w-full h-full object-cover"
        />

        {/* Logos placed over the second image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full px-6 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Logos */}
            <Image
              src={Vector2}
              alt="Logo 1"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain"
            />
            <Image
              src={zara}
              alt="Logo 2"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain"
            />
            <Image
              src={Vector3}
              alt="Logo 3"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain"
            />
            <Image
              src={Group}
              alt="Logo 4"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain"
            />
            <Image
              src={Vector4}
              alt="Logo 5"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

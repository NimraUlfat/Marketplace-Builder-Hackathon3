import Image from "next/image";

const products = [
  {
    id: 1,
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    rating: 4,
    image: "/images/Frame321.png",
    width: 295,
    height: 298,
  },
  {
    id: 2,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    rating: 3,
    image: "/images/Frame322.png",
    width: 295,
    height: 298,
  },
  {
    id: 3,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    rating: 3,
    image: "/images/Frame341.png",
    width: 295,
    height: 298,
  },
  {
    id: 4,
    title: "FADED SKINNY JEANS",
    price: "$210",
    rating: 5,
    image: "/images/Frame381.png",
    width: 295,
    height: 298,
  },
];

const customers = [
  { image: "/images/Frame22.png", width: 407, height: 289 },
  { image: "/images/Frame622.png", width: 407, height: 289 },
  { image: "/images/Frame644.png", width: 407, height: 289 },
];

const styles = [
  { id: 1, image: "/images/Frame61.png", width: 407, height: 289 },
  { id: 2, image: "/images/Frame62.png", width: 1306, height: 289 },
  { id: 3, image: "/images/Frame63.png", width: 900, height: 289 },
  { id: 4, image: "/images/Frame64.png", width: 407, height: 289 },
];

export default function Hero() {
  return (
    <div className="flex bg-white min-h-screen flex-col">
      <div className="text-center mt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">NEW ARRIVALS</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-[298px] overflow-hidden mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={product.width}
                height={product.height}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={i < product.rating ? "currentColor" : "none"}
                    className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
                  </svg>
                ))}
                <p className="text-sm text-gray-600 mt-1">{product.rating}/5</p>
              </div>
              <h4 className="text-lg text-gray-800 font-bold mt-4">{product.price}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Browse by Dress Style */}
      <div className="max-w-screen-xl mx-auto py-12 px-4">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
            <div className="w-full sm:w-[70%] md:w-[80%]">
              <div className="flex justify-center">
                <Image
                  src={styles[0].image}
                  alt="Style 1"
                  width={styles[0].width}
                  height={styles[0].height}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
       
            <div className="w-full sm:w-[100%] md:w-[100%]">
              <div className="flex justify-center">
                <Image
                  src={styles[1].image}
                  alt="Style 2"
                  width={styles[1].width}
                  height={styles[2].height}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
           
            <div className="w-full sm:w-[70%] md:w-[80%]">
              <div className="flex justify-center">
                <Image
                  src={styles[2].image}
                  alt="Style 3"
                  width={styles[2].width}
                  height={styles[2].height}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
         
            <div className="w-full sm:w-[100%] md:w-[100%]">
              <div className="flex justify-center">
                <Image
                  src={styles[3].image}
                  alt="Style 4"
                  width={styles[3].width}
                  height={styles[3].height}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Happy Customers */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {customers.map((customer, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt={`Customer ${index + 1}`}
                    src={customer.image}
                    width={customer.width}
                    height={customer.height}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image at the Bottom */}
      <div className="relative flex items-center justify-center flex-1">
        <Image
          src="/images/Frame45.png"
          alt="Fashion"
          width={1240}
          height={180}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}

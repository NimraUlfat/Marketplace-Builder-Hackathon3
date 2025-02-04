"use client"
import React, { useState } from "react";
import Image from "next/image";
import Frame56 from "../../../public/images/Frame56.png";
import Frame34 from "../../../public/images/Frame34.png";
import Frame381 from "../../../public/images/Frame381.png";


type Quantities = {
  item1: number;
  item2: number;
  item3: number;
};

export default function Cart() {
  // Initialize quantities state with proper keys and values
  const [quantities, setQuantities] = useState<Quantities>({
    item1: 2,
    item2: 1,
    item3: 1,
  });

  // Handle quantity increase for an item
  const handleIncrease = (item: keyof Quantities) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1,
    }));
  };

  // Handle quantity decrease for an item, ensuring the quantity doesn't go below 1
  const handleDecrease = (item: keyof Quantities) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] > 1 ? prevQuantities[item] - 1 : 1,
    }));
  };

  // Calculate the total price based on quantities
  const getTotalPrice = () => {
    const prices: Record<keyof Quantities, number> = {
      item1: 120, // price for item1
      item2: 70, // price for item2
      item3: 20, // price for item3
    };

    let subtotal = 0;
    for (const item in quantities) {
      subtotal += prices[item as keyof Quantities] * quantities[item as keyof Quantities];
    }

    return subtotal + 2 + 4; // Including shipping and tax
  };

  return (
    <div className="flex bg-white min-h-screen flex-col">
      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2 space-y-4">
            {/* Item 1 */}
            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    src={Frame56}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Gradient Graphic T-shirt
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Size: Large
                    </p>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color: White
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleDecrease("item1")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">
                      {quantities.item1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrease("item1")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  ${120.0 * quantities.item1}
                </h3>
              </div>
            </div>

            {/* Repeat similar structure for item 2 and 3 */}
            {/* Add handleDecrease/handleIncrease logic for other items as well */}

            {/* Item 2 */}
            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    src={Frame34}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      CHECKERED SHIRT
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Size: Medium
                    </p>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color: Red
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleDecrease("item2")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">
                      {quantities.item2}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrease("item2")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  ${70.0 * quantities.item2}
                </h3>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    src={Frame381}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      SKINNY FIT JEANS
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Size: Large
                    </p>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color: Blue
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleDecrease("item3")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">
                      {quantities.item3}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrease("item3")}
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  ${20.0 * quantities.item3}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-md p-4 h-max">
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>

            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">${getTotalPrice() - 6}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">$2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">${getTotalPrice()}</span>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                Checkout
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

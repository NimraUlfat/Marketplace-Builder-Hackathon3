'use client';

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = sanityClient({
  projectId: "dw1i3wxc", 
  dataset: "production", 
  useCdn: true,
  apiVersion: "2023-01-01", 
});

interface ImageAsset {
  asset: {
    url: string;
  };
}

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: ImageAsset;
  imageUrl: string;
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
}

interface CartItem extends Product {
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "products"]{
        _id,
        name,
        price,
        description,
        image {
          asset -> {
            url
          }
        },
        category,
        discountPercent,
        new,
        colors,
        sizes
      }`;
      const data = await sanity.fetch(query);

      // Ensure 'product' is of type Product
      const productsWithImageUrl = data.map((product: Product) => ({
        ...product,
        imageUrl: product.image?.asset?.url || "", // Handle undefined
      }));

      setProducts(productsWithImageUrl);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product: Product, selectedColor: string, selectedSize: string) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item._id === product._id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }

      return [
        ...prevCart,
        { ...product, selectedColor, selectedSize, quantity: 1 },
      ];
    });
    alert(`${product.name} has been added to your cart!`);
  };

  function truncateDescription(description: string): React.ReactNode {
    const maxLength = 100;
    if (description.length > maxLength) {
      return <>{description.slice(0, maxLength)}...</>;
    } else {
      return <>{description}</>;
    }
  }

  const updateQuantity = (item: CartItem, increment: boolean) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem._id === item._id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedSize === item.selectedSize
          ? {
              ...cartItem,
              quantity: increment ? cartItem.quantity + 1 : Math.max(1, cartItem.quantity - 1),
            }
          : cartItem
      );
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Explore Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                <Link href={`/product/${product._id}`} className="hover:text-blue-600">
                  {product.name}
                </Link>
              </h3>

              <p className="text-sm text-gray-500 font-medium">{product.category}</p>
              <p className="text-sm text-gray-600">{truncateDescription(product.description)}</p>

              {product.new && (
                <span className="inline-block bg-blue-500 text-white text-xs py-1 px-2 rounded-full mt-2">
                  New
                </span>
              )}

              <div className="flex space-x-2 mt-2">
                <select className="p-2 border rounded" defaultValue={product.colors[0]}>
                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>

                <select className="p-2 border rounded" defaultValue={product.sizes[0]}>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-semibold text-gray-800">${product.price}</p>
                {product.discountPercent > 0 && (
                  <p className="text-sm text-green-600">{product.discountPercent}% OFF</p>
                )}
              </div>

              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product, product.colors[0], product.sizes[0])}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-red-600 mb-4">Cart Summary</h3>
        {cart.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 shadow-sm p-4 rounded-md"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item, false)}
                        className="bg-gray-200 px-2 py-1 rounded-l-md"
                      >
                        -
                      </button>
                      <p className="px-4">{item.quantity}</p>
                      <button
                        onClick={() => updateQuantity(item, true)}
                        className="bg-gray-200 px-2 py-1 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold text-gray-800">Total:</p>
              <p className="text-xl font-semibold text-gray-800">${calculateTotal().toFixed(2)}</p>
            </div>

            <Link href="/checkout">
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                Proceed to Checkout
              </button>
            </Link>
          </>
        ) : (
          <p className="text-gray-600 text-center">Your Cart is Empty. Please Add Products.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;

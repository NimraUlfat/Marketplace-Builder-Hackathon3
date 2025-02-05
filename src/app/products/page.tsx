'use client';

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";  // Updated import
import Image from "next/image";
import Link from "next/link";

// Updated sanity client initialization
const sanity = createClient({
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

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

      const productsWithImageUrl = data.map((product: Product) => ({
        ...product,
        imageUrl: product.image?.asset?.url || "", 
      }));

      setProducts(productsWithImageUrl);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="shadow-xl rounded-lg overflow-hidden p-4">
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
              <p className="text-sm text-gray-600">{product.description}</p>
              {product.new && <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-full">New</span>}
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-semibold text-gray-800">${product.price}</p>
                {product.discountPercent > 0 && <p className="text-sm text-green-600">{product.discountPercent}% OFF</p>}
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;

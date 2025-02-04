"use client";
import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';
import { useParams } from 'next/navigation'; 


const sanity = sanityClient({
  projectId: 'dw1i3wxc', 
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2023-01-01',
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
}

const ProductDetailPage = () => {
  const { productId } = useParams();  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true); 

  
  const fetchProduct = async (id: string) => {
    try {
      const query = `*[_type == "products" && _id == "${id}"]{
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
      if (data.length > 0) {
        const productWithImageUrl = {
          ...data[0],
          imageUrl: data[0].image?.asset?.url || '',
        };
        setProduct(productWithImageUrl);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId as string); 
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{product.name}</h2>

        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Product Image */}
          <div className="relative w-full md:w-1/2 h-96 mb-6 md:mb-0">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:pl-8">
            <p className="text-sm text-gray-500 font-medium mb-4">{product.category}</p>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>

            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl font-semibold text-gray-800">${product.price}</p>
              {product.discountPercent > 0 && (
                <p className="text-sm text-green-600">{product.discountPercent}% OFF</p>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-4">
                <span className="font-semibold text-gray-700">Available Colors: </span>
                {product.colors.map((color, index) => (
                  <span key={index} className="inline-block bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full mr-2">
                    {color}
                  </span>
                ))}
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <span className="font-semibold text-gray-700">Available Sizes: </span>
                {product.sizes.map((size, index) => (
                  <span key={index} className="inline-block bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full mr-2">
                    {size}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

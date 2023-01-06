import React from "react";
import Image from "next/image";
import {Listing, ListingProps} from './components/Listing';
import { useRouter } from 'next/router'

const products = [
  {
    id: 1,
    name: 'Feteer',
    href: '#',
    imageSrc: 'https://assets.cairo360.com/app/uploads/2014/02/article_original_6637_20140204_52f0e3e19d420-700x323.jpg',
    imageAlt: "Feteer",
    price: '$35',
    description: 'Thin stuffed Pastry',
    translation: "فطير",
    origin: "Egypt"
  },
  {
    id: 1,
    name: 'Feteer',
    href: '#',
    imageSrc: 'https://assets.cairo360.com/app/uploads/2014/02/article_original_6637_20140204_52f0e3e19d420-700x323.jpg',
    imageAlt: "Feteer",
    price: '$35',
    description: 'Thin stuffed Pastry',
    translation: "فطير",
    origin: "Egypt"
  },  {
    id: 1,
    name: 'Feteer',
    href: '#',
    imageSrc: 'https://assets.cairo360.com/app/uploads/2014/02/article_original_6637_20140204_52f0e3e19d420-700x323.jpg',
    imageAlt: "Feteer",
    price: '$35',
    description: 'Thin stuffed Pastry',
    translation: "فطير",
    origin: "Egypt"
  },  {
    id: 1,
    name: 'Feteer',
    href: '#',
    imageSrc: 'https://assets.cairo360.com/app/uploads/2014/02/article_original_6637_20140204_52f0e3e19d420-700x323.jpg',
    imageAlt: "Feteer",
    price: '$35',
    description: 'Thin stuffed Pastry',
    translation: "فطير",
    origin: "Egypt"
  },  {
    id: 1,
    name: 'Feteer',
    href: '#',
    imageSrc: 'https://assets.cairo360.com/app/uploads/2014/02/article_original_6637_20140204_52f0e3e19d420-700x323.jpg',
    imageAlt: "Feteer",
    price: '$35',
    description: 'Thin stuffed Pastry',
    translation: "فطير",
    origin: "Egypt"
  },
  // More products...
]

export default function Results(props) {
  const router = useRouter()
  const { q } = router.query
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Results for: {q}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <Listing key ={i}  product={product}></Listing>
          ))}
        </div>
      </div>
    </div>
  )
}



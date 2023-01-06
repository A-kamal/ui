import React from "react";
import Image from "next/image";
import { Badge } from "flowbite-react";
class ListingProps {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  price?: string;
  description?: string;
  translation?: string;
  origin?: string;
}

const Listing = (props): JSX.Element => {
  return (
    <div key={props.product.id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <Badge color="success">Available in your area</Badge>
        <Image
          src={props.product.imageSrc}
          alt={props.product.imageAlt}
          width={640}
          height={640}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />

      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={props.product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {props.product.description}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {props.product.translation} - {props.product.origin}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {props.product.price}
        </p>
      </div>
    </div>
  );
};
export { Listing, ListingProps };

"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem } from "@/Store/CartSlice";
import { useRouter } from "next/navigation";


export function Productlisting({ productsData }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const router=useRouter();
  const handleaddtocart = (element) => {
    dispatch(addItem(element));
  };
  return (
    <section className="w-full">
      <div className="mx-auto max-w-12xl px-2 py-10 lg:px-10">
        <div className="text-left">
          <h1 className="text-xl ">Products</h1>
        </div>

        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-6 lg:gap-x-6">
          <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
            <div className="mx-auto grid w-full max-w-6xl items-center space-y-4 px-2 py-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
              {productsData.map((element) => (
                <div
                  key={element.id}
                  className="rounded-md border max-w-6xl text-left relative bg-white  "
                >
                  <img
                    src={element.image}
                    alt="music"
                    className="aspect-[16/9] max-w-6xl w-full rounded-md md:aspect-auto md:h-[200px] lg:h-[200px] sm:h-[300px] cursor-pointer"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      {element.title}
                    </h1>
                    <p>{element.price}</p>

                    {cartItems.includes(element) ? (
                      <button
                        type="button"
                        className="mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                        onClick={() => router.push("/cart")}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                        onClick={()=>handleaddtocart(element)}
                      >
                        Add to Cart
                      </button>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

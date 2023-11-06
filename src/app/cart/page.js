'use client'
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "@/Store/CartSlice"
import { useRouter } from "next/navigation";


export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const router=useRouter();
  

  return cartItems.length > 0 ? (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-light-black">My cart</h2>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems.map((product) => (
          <li
            key={product.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.name}
                
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {product.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0 "
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    
                    <span>Remove</span>
                  </button>

                  
                   
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 ? (
        <>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">
                {cartItems.reduce((p1, p2) => p1 + p2.price, 0)}
              </span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={()=>router.push('/')}
            >
              Back to shop
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={()=>router.push('/checkout')}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col gap-y-12 w-screen h-96">
      <h1>
        Do some Shopping and then Come here{" "}
    
      </h1>
      <button type="button"
        className="rounded-md bg-button-bg px-3 py-2 text-sm font-semibold text-white shadow-sm bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={()=>router.push('/')}
      >
        Shop now
      </button>
    </div>
  );
}

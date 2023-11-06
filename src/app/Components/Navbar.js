"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between  items-center px-4 py-6 bg-orange-100">
      <span>Nextjs shopping cart</span>

      <div className="flex justify-between items-center gap-4 px-8">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart {cartItems.length}</Link>
        <Link href="/wishlist">WishList</Link>
      </div>
    </div>
  );
};

export default Navbar;

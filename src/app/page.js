'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Productlisting} from './Components/Productlisting';

export default function Home() {
  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      setProductsData(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Productlisting productsData={productsData} />
    </>
  )
}

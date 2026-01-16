import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  // normal data fetch
  //     fetch('https://fakestoreapi.com/products')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //  setProduct(data) // commented this line because of unlimited execution or infinite loop cholbe.
  //   });

  //   useEffect( (callback function) => {

  //   }, [dependency array])
  // if we do not write dependency array this will re-execute again and again, dependency array means when UI first render after reload code will execute once

  useEffect( ()=> {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setProduct(data)
        setIsLoading(false)
    }).catch((error) => {
        setIsError(error.message)
        setIsLoading(false)
    })
  }, [])

  console.log(product);

  return (
    <div>
      <h2>Hello</h2>
      {isLoading && <p className="">Loading...</p>}
      {isError && <p>Error: {isError}</p>}
    </div>
  );
};

export default Products;

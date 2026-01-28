import React, { useState } from 'react';
import Categories from './category/Categories';
import ShowCategoryFood from './category/ShowCategoryFood';
import WishList from './category/WishList';



const HomePage = () => {
const [selectedCategory, setSelectedCategory] = useState("")
const [wishList, setWishList] = useState([]);
const handleWishList = (food) =>{
    // console.log("The goood foood", food)
    console.log(food)
    const wishlistData = [...wishList, food];
    setWishList(wishlistData)
    // console.log(wishlistData)

    }
// console.log(selectedCategory)
// console.log("All wishlist data",wishList)
    return (
        <div>
          <h2>All Meal</h2>
          <Categories setSelectedCategory={setSelectedCategory}></Categories>
          <WishList wishList={wishList}></WishList>
          <ShowCategoryFood 
          selectedCategory={selectedCategory}
          handleWishList={handleWishList}
          ></ShowCategoryFood>

        </div>
    );
};

export default HomePage;
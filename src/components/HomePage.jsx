import React, { useState } from 'react';
import Categories from './category/Categories';
import ShowCategoryFood from './category/ShowCategoryFood';
import WishList from './category/WishList';



const HomePage = () => {
const [selectedCategory, setSelectedCategory] = useState("")
const [wishList, setWishList] = useState([])
console.log(selectedCategory)
console.log(wishList)
    return (
        <div>
          <h2>All Meal</h2>
          <Categories setSelectedCategory={setSelectedCategory}></Categories>
          <WishList wishList={wishList}></WishList>
          <ShowCategoryFood 
          selectedCategory={selectedCategory}
          setWishList={setWishList}
          ></ShowCategoryFood>

        </div>
    );
};

export default HomePage;
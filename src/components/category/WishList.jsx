import React  from 'react';
import './Category.css'

const WishList = ({ wishList}) => {

    

    return (
        <div className='divBorder'>
            <h2 style={{fontSize:"20px", fontWeight:"bold", }}>WishList</h2>
           <img className='wishListImg ' src={wishList.strMealThumb} alt="" />
        </div>
    );
};

export default WishList;
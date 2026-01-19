import React, { useEffect, useState } from 'react';

const ShowCategoryFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
   
    return (
        <div>
            adfasdfads
        </div>
    );
};

export default ShowCategoryFood;
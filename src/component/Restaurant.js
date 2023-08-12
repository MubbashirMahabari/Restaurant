import React, { useState } from 'react'
// import image1 from "../images/image1.jpg"
import "../component/style.css";
import MenuCard from "./menuCard";
import MenuApi from "./MenuApi";
import Navbar from './Navbar';
import Footer from './footer';

const uniqueList = [...new Set(MenuApi.map((currElem) => {
    return currElem.category;
})
),
'All',
];

const Restaurant = () => {

    const [menuData, setMenuData] = useState(MenuApi);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category==="All")
        {
            setMenuData(MenuApi);
            return;
        }

        const updatedList = MenuApi.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
            <div className='footer-div'>
            <Footer/>
            </div>
            
        </>

    );
}

export default Restaurant;

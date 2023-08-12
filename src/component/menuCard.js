import React from 'react'
// import image1 from "../images/image1.jpg"
import "../component/style.css";

const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className='main-card--container'>
                {menuData.map((currElem) => {
                    const {id,category,name,description,image} = currElem;
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-num card-circle subtle'>{id}</span>
                                        <span className='card-author subtle' >{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-desc subtle'>
                                        {description}
                                        </span>
                                        <div className='card-read'>
                                            Read
                                        </div>
                                    </div>

                                    <img src={image} alt="" />

                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>


        </>

    )
}

export default MenuCard;


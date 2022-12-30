import React from 'react';
import './news.css';
const Newsletter = () => {
    return (
        <div className='newsdiv'>
            <img className='imageone' src="https://i.ibb.co/Px9Dyrg/29052021-01-generated-removebg-preview.png" alt="" />
            <div className='middleit'>
            <h2> Subcribe to get 5% off in every order</h2>
            <input type="email" placeholder="enter your email here " className='newsinput'/>
             <button className="btn-grad">Subscribe</button>
            </div>
             <img src="https://i.ibb.co/dmBFp1W/auto-car-16-removebg-preview.png" className="imgtwo" alt="" />
        </div>
    );
};

export default Newsletter;
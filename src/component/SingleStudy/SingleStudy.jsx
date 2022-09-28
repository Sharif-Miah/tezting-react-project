import React from 'react';
import './SingleStudy.css'

const SingleStudy = (props) => {
    // console.log(props.study);
    const { image, subject, describe, time } = props.study

    return (
        <div className='single-cart '>
            <img className='study-img' src={image} alt="" />
            <div className='text'>
                <h2>{subject}</h2>
                <h4> Time: {time} Minute</h4>
                <p>{describe}</p>
            </div>
            <button className='list-btn'>Add to list</button>

        </div>
    );
};

export default SingleStudy;
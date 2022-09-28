import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import SingleStudy from '../SingleStudy/SingleStudy';
import './Main.css'

const Main = () => {

    const [studies, setstudies] = useState([])

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setstudies(data))
    }, [])

    // console.log(studys);

    return (
        <div className='main-container'>
            <div className="study-site">
                <h1>Select today's Study</h1>
                <div className='study-cart-container'>
                    {
                        studies.map(study => <SingleStudy study={study} key={study.id} />)
                    }
                </div>
            </div>

            <div className="cart-site">
                <Cart />
            </div>
        </div>
    );
};

export default Main;
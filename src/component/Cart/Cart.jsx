import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({ studyTime, setStudyTime }) => {

    // console.log(studyTime);
    const [free, setFree] = useState(0)

    const handleClick = (time) => {
        setFree(time)
    }

    // console.log(free);
    return (
        <div>
            <div className='d-flex'>
                <img className='my-img' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczkzLXBhLTU3OThfMS5wbmc.png?s=sbMLk1eiRzQUOrMIRvmZPgG2eK7zXEBeeLefvv7JzDY" alt="" />
                <div className='info'>
                    <h4>Farhan Sharif</h4>
                    <span>Narsingdi, Dhaka</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='other-info'>
                    <h3>52<span>Kg</span></h3>
                    <p>Weight</p>
                </div>
                <div className='other-info'>
                    <h3>5.4</h3>
                    <p>Height</p>
                </div>
                <div className='other-info'>
                    <h3>23yrs</h3>
                    <p>Age</p>
                </div>
            </div>

            <h2 className='break-heading'>Add To Break</h2>

            <div className='d-flex'>
                <button onClick={() => handleClick(5)} className='break-cal'>5m</button>
                <button onClick={() => handleClick(10)} className='break-cal'>10m</button>
                <button onClick={() => handleClick(15)} className='break-cal'>15m</button>
                <button onClick={() => handleClick(20)} className='break-cal'>20m</button>
            </div>
            <h1 className='exercise-heading' >Exercise Details</h1>

            <div>
                {/* <h3>Study Time:</h3> */}

                <h3>Break: {free}</h3>
            </div>

        </div>
    );
};

export default Cart;
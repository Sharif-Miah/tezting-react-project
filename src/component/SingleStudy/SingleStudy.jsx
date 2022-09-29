import React from 'react';
import './SingleStudy.css'

const SingleStudy = ({ study, studyTime, setStudyTime }) => {
    // console.log(study);
    const { image, subject, describe, time } = study

    const showData = () => {
        const info = {
            time
        }
        if (studyTime) {
            setStudyTime([...studyTime, info])
        } else {
            setStudyTime(info)
        }
    }

    // console.log(studyTime);

    return (
        <div className='single-cart '>
            <img className='study-img' src={image} alt="" />
            <div className='text'>
                <h2>{subject}</h2>
                <h4> Time: {time} Minute</h4>
                <p>{describe}</p>
            </div>
            <button onClick={showData} className='list-btn'>Add to list</button>

        </div>
    );
};

export default SingleStudy;
import React from 'react';



const GifItem = ({ title, image }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifItem;
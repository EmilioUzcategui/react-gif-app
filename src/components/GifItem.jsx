import React from 'react';



const GifItem = ({ title = 'No hay titulo', image = 'No hay imagen' }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifItem;
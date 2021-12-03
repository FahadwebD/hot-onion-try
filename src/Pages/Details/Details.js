import React, { useEffect } from 'react';

const Details = () => {
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/hot-data/main/hot.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>This is Detail</h1>
        </div>
    );
};

export default Details;
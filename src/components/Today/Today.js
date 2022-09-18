import React from 'react';
import './today.css'

const Today = ()=>{
    const date = new Date();
        const options = { weekday: 'short', month: 'long', day: 'numeric'};
        // const dt = date.toLocaleTimeString('ru', options);
        const dt = date.toLocaleDateString('ru', options);
       
    return (
        <div className='today'>
        Сегодня {dt}
        </div>
    )
}
export default Today
import React from 'react';
import './Qustion.css'

const Qustion = () => {
    return (
        <div className='qustion-container'>
            <div className='qustion'>
                <h2>How react works?</h2>
                <p>React is one of the most popular JavaScript web frameworks. It’s a library, For building user interfaces. By creating different components we can easily create a single page application with react. With it we can create different components and use those components where we want.</p>
            </div>
            <div className='qustion'>
                <h2>How useState works?</h2>
                <p>The useState() is a Hook that allows you to have state variables in functional components. It is used for loading and retrieving data from outside. We can also pass a function as an argument if the initial state has to be computed. value returned by the function will be used as the initial state.</p>
            </div>
        </div>
    );
};

export default Qustion;
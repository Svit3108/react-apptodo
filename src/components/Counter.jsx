import React, { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(1);
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += count === 0 ? "warning" : "primary";
        return classes;
    };
    const checkCount = () => {
       return count === 0 ? 'Null' : count;
    };

    const handleIncrement = () => {
        console.log('Increment Clicked');
    };

    const renderTags = () => {
        if(tags.length === 0) return <p>There are no tags!</p>;
        return <ul> {tags.map(tag => <li key={ tag } > {tag} </li>)} </ul>;
    };

   
    return (
        <React.Fragment>
            <span className={getBadgeClasses()}> {checkCount()} </span> 
            <button onClick={handleIncrement} className='btn btn-success btn-sm'>Increment</button>
            {renderTags()}
        </React.Fragment>
    );
}
            
export default Counter;


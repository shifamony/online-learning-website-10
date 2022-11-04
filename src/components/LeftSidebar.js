import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://online-learning-server.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='border-primary'>
            <h4>All categories: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default LeftSidebar;
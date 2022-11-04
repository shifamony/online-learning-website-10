import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from './CourseSummery';

const Category = () => {
    const catsCourse = useLoaderData();
    
    return (
        <div>
           
            <div className='my-5 pb-5'>
           
            {
                catsCourse.map(course => <CourseSummery
                     key={course.id}
                     course ={course}
                     ></CourseSummery>)
            }
        </div>
        </div>
    );
};

export default Category;
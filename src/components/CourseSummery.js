import React from 'react';


const CourseSummery = ({course}) => {
    const {title, author,details,image_url} = course;
    return (

<div className="container">
  <div className="card mb-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image_url} className="img-fluid rounded-start h-100" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <div className='d-flex justify-content-between'>
           <small className="text-muted card-text">Last updated: {author.published_date}</small>
           <small className="text-muted card-text">Price: {author.price}</small>
        </div>
       
      </div>
    </div>
  </div>
  </div>
</div>



    
    );
};

export default CourseSummery;
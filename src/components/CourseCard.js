import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';



const CourseCard = ({courses}) => {
  const {id, image_url,author, details,title} = courses;
    return (
    <div>
    <CardGroup>
      <Card className='mb-5'>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <>
          <Card.Text>
            <>
            {details.length > 200
             ?
            <p>{details.slice(0,150) + '...' } <Link to={`/courses/${id}`}>Read More</Link></p> 
            :
            <p>{details}</p>
        }
        </>
          </Card.Text>
          
          </>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
          <small className="text-muted">Last updated: {author.published_date}</small>
          <small>Price: {author.price}</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
        </div>
    );
};

export default CourseCard;
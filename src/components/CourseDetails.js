import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import edu from '../img/edu.jpg';

const CourseDetails = () => {
    const course =useLoaderData();
    const {image_url, title, details} = course
    return (
        <div>
            <img src={edu} alt="" className='my-img' />
            <Container className="my-5">
            <Card  style={{marginBottom:'150px'}}>
               <Card.Img variant="top" src={image_url} />
               <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                <Link to='/checkout'>Checkout Premium Course</Link>
            </Card.Body>
          </Card>
        </Container>
        </div>
        
    
    );
};

export default CourseDetails;
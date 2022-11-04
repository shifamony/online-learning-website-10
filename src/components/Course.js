import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import LeftSidebar from './LeftSidebar';

const Course = () => {
    const allCourses = useLoaderData()

    return (
        <div className='mt-5'>
             <Container>
           <Row className='mt-5'   style={{marginBottom:'100px'}}>
              <Col lg='3'  className="d-none d-lg-block">
               <LeftSidebar></LeftSidebar>
              </Col>
              <Col lg='9'>
                <h1>course section {allCourses.length}</h1>
                {
                allCourses.map(courses => <CourseCard 
                    key={courses.id}
                    courses= {courses}
                ></CourseCard>)
                }
              </Col>
            </Row>
           
        </Container>
        </div>
    );
};

export default Course;
       
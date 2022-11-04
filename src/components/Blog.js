import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='my-5 pb-5'>
        <Container>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>4.1 what is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTPheaders to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.
        <br /><br />
        An example of a cross-origin request: The frontend JavaScript code for a web application served from http://domain-a.com uses XMLHttpRequest to make a request for http://api.domain-b.com/data.json.
         <br /><br />
        For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4.2 Why are you using firebase? What other options do you have to implement authentication?
</Accordion.Header>
        <Accordion.Body>
        Firebase helps us develop high-quality apps, grow our user base, and earn more money. Each feature works independently, and they work even better together.
        <br /><br />
        <strong>5 Common Authentication Types</strong> 
        <br /><br />
        ** Password-based authentication. Passwords are the most common methods of authentication.
        <br /><br />
        ** Multi-factor authentication.
        <br /><br />
        ** Certificate-based authentication.
        <br /><br />
        ** Biometric authentication.
        <br /><br />
        ** Token-based authentication.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>4.3 How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>4.4 What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        <strong>What is Node</strong> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

        <br /><br />

        <strong>Working of Node.js:</strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

        Node.js basically works on two concept
        <br /><br />
        Asynchronous
        Non-blocking I/O
        <br /><br />
        Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
        <br /><br />
        <strong>Asynchronous:</strong> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesnt work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
   
    </div>
    );
};

export default Blog;
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const Faq = () => {
    return (
       <div style={{margin:'100px 0'}}>
        <Container>
          <h1 className='display-4 fw-bold mb-5'>Frequently Asked Question</h1>
     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4>What is HTML and why is it important? </h4></Accordion.Header>
        <Accordion.Body>
        HTML stands for hyper-text markup language. Whether on a mobile device or a computer, every website that you browse is designed with HTML. HTML isnt a “programming language,” but rather a “formatting language.” It tells a browser how to display text, images, and other media elements. When HTML was first developed, it was fairly simple. For example, the text on a page could be bolded, italicized, or underlined, and images could be resized and aligned. Today, HTML is much more complex and dynamic, allowing front-end developers to create any layout or setup they desire.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4>What is cascading stylesheets (CSS)?</h4></Accordion.Header>
        <Accordion.Body>
        CSS or Cascading Style Sheets is a style sheet language used to style markup language. Markup languages include HTML, XHML, XML, and other XML-based languages. The most common use of CSS is to style HTML web pages. Although HTML doesn't need CSS to function, every web page would look the same without it. With CSS, you can target specific elements in a web page and change the look and arrangement on the page. CSS can make an embedded image small or cover the entire webpage as a background. You can enlarge a heading and apply a specific font to stand out from the rest of the page. Other things you can do with CSS include changing the color of elements, making elements float to one side of the page, and the list goes on. Every web page uses HTML, and every web page that has its unique look uses CSS.
        </Accordion.Body>
      </Accordion.Item>

<Accordion.Item eventKey="2">
        <Accordion.Header><h4>What is Javascript? </h4></Accordion.Header>
        <Accordion.Body>
        JavaScript is a curly-braced, dynamically typed, prototype-based, object-oriented programming language. It started as the programming language for the web and is one of the three layers of standard web technologies — the other two being HTML and CSS. JavaScript allows you to create and control content dynamically on a web page without requiring a page reload. Web browsers are able to interpret it, and when triggered by events, modify the HTML and CSS of a web page with dynamic updates. JavaScript also uses asynchronous calls to fetch data from web services in the background. Although it was initially only used in web browsers, JavaScript engines have since been put to use as servers with Node.js, included in desktop application frameworks like Electron, and embedded in phone frameworks like Apache Cordova.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h4>What is Bootstrap?</h4></Accordion.Header>
        <Accordion.Body>
        Bootstrap is a free frontend web development framework for creating responsive websites. Bootstrap promotes a mobile-first approach to web design, offering a suite of templates and components that automatically render for use on any device.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><h4>What is React JS? </h4></Accordion.Header>
        <Accordion.Body>
        React is a front-end library in Javascript that was developed by Facebook. The simplest definition of React is that it is a user interface library used for building UI components for the web. But if that was all React did, it would be little more than a template library. Developers define components in React by using an HTML-like syntax called JSX. These encapsulated components manage their own state, making it simple to pass rich data to a component and keep the state of the application and its components out of the Document Object Model (DOM). These features give React components the ability to react dynamically and efficiently to changes in their state. A set of simple components in React can be composed into either simple single-page applications or large, complex web applications.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h4>What is Node JS and what is it used for?</h4></Accordion.Header>
        <Accordion.Body>
        Node.Js is a server environment built for fast and easily scalable network applications. It was built on Chromes JavaScript runtime and uses an event-driven, non-blocking model that makes it the best fit for applications that run on distributed devices and need to run in real-time. By using JavaScript, node.Js can be put to work by many software developers familiar with JavaScript. Because the code is open-source, you can also use it on any platform (Mac OS, Windows, or Linux). Node.js is the architecture for creating websites and real-time applications because its easy for teams to learn, and its fast. Examples of applications that use node.Js include video conferencing apps, chat servers, eCommerce software, and collaborative online gaming.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><h4>What is MongoDB? </h4></Accordion.Header>
        <Accordion.Body>
        MongoDB is an document-oriented database designed to allow developers to scale their applications to meet scalability demands. MongoDB features a flexible document model that allows for accelerated development productivity so that you can release better applications, faster.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </Container>
 </div>
    );
};

export default Faq;
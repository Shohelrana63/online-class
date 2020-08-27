import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import courses from './fakeData/fakeCourse.js';
import Card from './Components/Card/Card';

function App() {
  console.log(courses);

  //  add useState
  const [course, setCourse] = useState([]);
   //  add item to cart
  const addToCourse = item => {
    const newCourse = [...course, item];
    setCourse(newCourse);
  }

  //  get total price
  const totalPrice = course.reduce((price, current) => price + current.price, 0);

  return (
    <div >
      <Header></Header>

      <div className="row  course-item">
        <div className="col-md-9 row display">

          {
            courses.map(courses => <Course courses={courses} addToCourse={addToCourse}></Course>)
          }
        </div>


        <div className="col-md-3">
          <h2 className="text-center"> Order Courses: {course.length}</h2>
          <ul className="list-group">
            {course.map(item => <Card item={item}></Card>)}
         </ul>
          <button type="button" className="btn btn-primary btn-block">
            Checkout <span className="badge badge-light">$ {totalPrice}</span>

          </button>
        </div>

      </div>

    </div>

  );
}

export default App;

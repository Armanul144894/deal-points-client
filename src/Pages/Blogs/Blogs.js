import React from "react";
import blog1 from "../../assets/blogs/blog1.png";
import blog2 from "../../assets/blogs/blog2.png";
import blog3 from "../../assets/blogs/blog3.png";
import blog4 from "../../assets/blogs/blog4.png";
import useTitle from "../../hooks/useTitle/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 w-3/4 mx-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-justify">
            Beau Carnes. React state management is a process for managing the
            data that React components need in order to render themselves. This
            data is typically stored in the component's state object. When the
            state object changes, the component will re-render itself. React
            state management is basically half of a React app.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            How does prototypical inheritance work?
          </h2>
          <p className="text-justify">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p className="text-justify">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56" src={blog4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">React vs. Angular vs. Vue?</h2>
          <p className="text-justify">
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

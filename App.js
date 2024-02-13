import React from "react";
import ReactDOM from "react-dom/client";

//React.createElememt =>  is an ReactElement(JS Object) no an HTML Element => when we do 'render' it becomes HTML Element
//****************************Creating ReactElement via Core React********************************************
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Chaitananya ;P"
);
console.log(heading);

//JSX is not HTML in Javascript it is HTML-like or XML-like syntax.
//JSX (transpiled before it reaches to JS engine) - Parcel- Babel
//JSX =>Babel transpiles to React.createElement => ReactElement- JS Object => HTMLElement(on Render)
//**************************Creating ReactElement via JSX*******************************

const elem = <span>React Element</span>;
//const jsxHeading = <h1 className="head">Hello Chaitanya using JSX</h1>; //React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello Chaitanya using JSX
  </h1>
); //React Element

//React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

// can also write as shown below as we are using arrow function, we can remove 'return' as using arrow function
//for calling one component into another component just write component name within <> like <Title />
//below is **Component Composition** means one component into another
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent2 />); //for renderng a Component we use variable in angular <> bracket as shown

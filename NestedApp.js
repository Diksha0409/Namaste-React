/** CREATING NESTED HTML AS SHOWN BELOW USING REACT JS
 * 
 * Nested HTML with single child
 * <div id="parent">
 *      <div id= "child">
 *          <h1>I am an H1 tag </h1>
 *      </div> 
 * </div>
 * 
 * Nested HTML with siblings or 2 childrens
 * <div id="parent">
 *      <div id= "child">
 *          <h1>I am an H1 tag </h1>
 *          <h2>I ma an H2 tag </h2>
 *      </div> 
 * </div> OR
 * 
 * <div id="parent">
 *      <div id= "child">
 *          <h1>I am an H1 tag </h1>
 *          <h2>I ma an H2 tag </h2>
 *      </div> 
 *      <div id= "child2">
 *          <h1>I am an H1 tag </h1>
 *          <h2>I ma an H2 tag </h2>
 *      </div> 
 * </div>
 * 
 */

/*
********************React JS conversion for single child**********************
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, 
    React.createElement("h1", {}, "I am an H1 tag"))
);*/

/*
********************React JS conversion for siblings or multiple children
when we create multiple children we we need to create array for 
third element of React.createElement**********************/
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, 
        [React.createElement("h1", {}, "I am an H1 tag"),
            React.createElement("h2", {}, "I am an H2 tag"),
])
);

/*OR*/

const parent1 = React.createElement(
    "div",
    { id: "parent1" },
    [React.createElement("div", { id: "child" }, 
    [React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag"),
]),React.createElement("div", { id: "child2" }, 
[React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
root.render(parent1);
console.log(parent);
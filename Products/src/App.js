/*The App component is the container for all other React components. By default the App component is rendered by calling ReactDOM.render() in the index.js file */
import React from 'react';
import './App.css';


/*Below we import all the Components we created in the 'Components' directory.
Remember that you can only import components, if you have added an export statement to the module
which defines the component. */
import Header from './Components/Header';
import Tasks from './Components/Task';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import './myStyle.css';

  
/* The variables that we create below will be passed as props to some of the components we have created.
In practice, these variables will often be populated from data read from a database or API. You will learn
more about this later. */
const loggedIn = true;

const tasks = [{id: "1",   task_name: "Nike Airforce W", 
               description1: "A more neat and nice white airforce designed by me. We are there for the people and to make customers happy", 
               
               task_name2: "Nike Airforce S", 
               description2: "We make sure these spice designed red design satify the owners of these kind of shoes.",  
               
               task_name3: "Nike Airforce SK",  
               description:"You wait patiently we make sure you get your best design that we can offer you."}];

/*Notice how we add the <Header>, <Task> and <Timer>
components below. Notice that we also have a link to a stylesheet in this App.js component.
The reason for this is that we are using some components from React-Bootstrap.
https://react-bootstrap.github.io/getting-started/introduction/ */
class App extends React.Component {
  render() {
    return (
      <div className="App">
     
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"/>

   
      <Header name="Its Designer Motion" button="Sign-In" loggedIn={loggedIn} />
      <Tasks tasks={tasks}/>  
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Shop/>
      </div>
    );
  }
}
//Notice that the App class of this module is exported. This is so that it can be imported and used in Index.js where the ReactDom.Render() method is called
//to render this App component.
export default App;




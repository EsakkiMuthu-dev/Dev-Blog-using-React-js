import './index.css'
import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  // dyanmic values in react
  //muultiple components

  return (
    <div className="App">

   <Router>
    <Navbar/>
     <div className="content">
 
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path ='/create'>
          <Create />
        </Route>
        <Route exact path ='/blogs/:id'>
          <BlogDetails />
        </Route>
        <Route exact path ='*'>
        <NotFound/>
        </Route>
      </Switch>
      </div>
    </Router>
    
    </div>
  );
}

export default App;

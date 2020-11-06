import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  return (
    <Router>            
            <Header/>            
            <Route path='/'  exact ><Home/></Route>
            <Route path='/login'><Login/></Route>
      </Router> 
   
  );
}

export default App;

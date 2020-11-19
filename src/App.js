import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Heade from './components/Header'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Pdf from './components/Pdf'

function App() {

  return (    
      <Router>
        <Heade />
        <Route path='/' exact ><Home /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/newUser'><NewUser /></Route>
        <Route path='/pdf'><Pdf /></Route>
      </Router>
    
  );
}

export default App;

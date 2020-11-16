import Home from './components/Home'
import Heade from './components/Header'
import Login from './redux/counter'
import NewUser from './components/NewUser'
import Pdf from './components/Pdf'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Heade/>
      <div>
        <Route path='/' exact ><Home /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/newUser'><NewUser /></Route>
        <Route path='/pdf'><Pdf/></Route>
      </div>

    </Router>

  );
}

export default App;

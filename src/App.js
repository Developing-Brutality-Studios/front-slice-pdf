import Home from './components/Home'
import Count from './redux/counter'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Pdf from './components/Pdf'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Count />
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

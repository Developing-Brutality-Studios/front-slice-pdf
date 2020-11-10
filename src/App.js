import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import NewUser from './components/NewUser'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <div>
        <Route path='/' exact ><Home /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/newUser'><NewUser /></Route>
      </div>

    </Router>

  );
}

export default App;

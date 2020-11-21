import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Heade from './components/Header'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Pdf from './components/Pdf'
import { useSelector } from 'react-redux'
function App() {

  const posts = useSelector(state => state.posts)

  return (    
      <Router>
        <Heade posts={posts}/>
        <Route path='/home'  ><Home /></Route>
        <Route path='/' exact><Login /></Route>
        <Route path='/newUser'><NewUser /></Route>
        <Route path='/pdf'><Pdf /></Route>
      </Router>
    
  );
}

export default App;

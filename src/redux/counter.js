import {connect} from 'react-redux';
import Login from '../components/Login'
const mapStateToProps = state => {
    return{ counter: state.counter}
}
const mapDispatchToProps = dispatch => {
    
    return {
        setToken: () => dispatch({ type: 'SET'})
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Login)

export default ComponentWithConnectionToRedux
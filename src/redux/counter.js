import {connect} from 'react-redux';
import Header from '../components/Header'
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

const ComponentWithConnectionToRedux = createConnection(Header)

export default ComponentWithConnectionToRedux
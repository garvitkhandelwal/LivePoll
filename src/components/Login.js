import store from "../redux/store";
import { loginUser } from '../redux/actions';

const Login = () => {
    const handleLogin = () => {
        const currentState = store.getState()
        if(!currentState.login.isLoggedIn) {
            store.dispatch(loginUser());
        }
        store.subscribe(() => console.log('User successfully Logged In!!'));
    }

    return (
        <div>
            <button onClick={handleLogin}>Login as guest</button>
        </div>
    )
}

export default Login;
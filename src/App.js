// import logo from './logo.svg';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn"
import SignUpGoogle from "./components/SignUpGoogle";
import AuthDetails from "./components/AuthDetails";

function App() {
	return (
		<div className="App">
			<SignUp />
			<LogIn />
			<SignUpGoogle />
			<AuthDetails />
		</div>
	);
}

export default App;

// import logo from './logo.svg';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Verify from "./components/Verify";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Landing />,
	  errorElement: <Error />,
	},
	{
		path: "/signup",
		element: <SignUp />
	},
	{
		path: "/login",
		element: <LogIn />
	},
	{
		path: "/home",
		element: <Home />
	},
	{
		path: "/verify",
		element: <Verify />
	}
  ]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

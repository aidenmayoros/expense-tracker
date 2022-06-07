import "./reset.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	withRouter,
} from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import SignIn from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Box from "@mui/material/Box";

function App() {
	const [user, setUser] = useState();

	return (
		<Router>
			<Box style={{ display: "flex" }}>
				<Navigation />
				<Routes>
					<Route path='/login' element={<SignIn />} />
					<Route
						path='/forgot-password'
						element={<div>In construction...</div>}
					/>
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/home' element={<div>In construction...</div>} />
				</Routes>
			</Box>
		</Router>
	);
}

export default App;

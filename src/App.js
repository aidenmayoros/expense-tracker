import "./reset.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	withRouter,
} from "react-router-dom";
import Students from "./pages/Students";
import Parents from "./pages/Parents";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Box from "@mui/material/Box";

function App() {
	const [user, setUser] = useState();

	return (
		<Router>
			<Box style={{ display: "flex" }}>
				<Navigation />
				<Routes>
					<Route path='/login' element={<LoginPage user={setUser} />} />
					<Route
						path='/forgot-password'
						element={<div>In construction...</div>}
					/>
					<Route path='/register' element={<RegisterPage user={setUser} />} />
					<Route path='/students' element={<Students />} />
					<Route path='/parents' element={<Parents />} />
				</Routes>
			</Box>
		</Router>
	);
}

export default App;

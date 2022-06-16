import "./reset.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import SignIn from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Box from "@mui/material/Box";
import HomePage from "./pages/HomePage";
import NewIncome from "./pages/NewIncome";

function App() {
	const [user, setUser] = useState("");

	return (
		<Router>
			<Box style={{ display: "flex", justifyContent: "center", padding: "0" }}>
				<Navigation user={user} updateUser={setUser} />
				{user === "" ? (
					<Routes>
						<Route path='/login' element={<SignIn updateUser={setUser} />} />
						<Route path='*' element={<Navigate to='/login' replace />} />
					</Routes>
				) : (
					<Routes>
						<Route
							path='/home'
							element={<HomePage user={user} updateUser={setUser} />}
						/>
						<Route
							path='/forgot-password'
							element={<div>In construction...</div>}
						/>
						<Route
							path='/register'
							element={<RegisterPage user={user} updateUser={setUser} />}
						/>
						<Route path='/income/new' element={<NewIncome />} />
					</Routes>
				)}
			</Box>
		</Router>
	);
}

export default App;

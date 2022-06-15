import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../images/money-logo.png";
import { useNavigate, useLocation } from "react-router";
import Alert from "@mui/material/Alert";

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}>
			{"Copyright © "}
			<Link color='inherit' href='http://www.aidenmayoros.com/'>
				aidenmayoros.com
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function ErrorMessage() {
	return (
		<Alert severity='error' variant='outlined' sx={{ mt: 2, width: "80%" }}>
			Please fill in all required* fields
		</Alert>
	);
}

const theme = createTheme();

export default function SignIn({ updateUser }) {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const handleSubmit = () => {
		if (email === "" || password === "") {
			setShowErrorMessage(true);
			return;
		}
		updateUser({ email: email, password: password });
		navigate("/home");
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar src={Logo} sx={{ width: 64, height: 64 }} />
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					{showErrorMessage ? <ErrorMessage /> : <span></span>}
					<Box noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email or Username'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Button
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							onClick={handleSubmit}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link variant='body2' href='/register'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}

import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../images/money-logo.png';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

function ErrorMessage() {
	return (
		<Alert severity='error' variant='outlined' sx={{ mt: 2, width: '80%' }}>
			Please fill in all required* fields
		</Alert>
	);
}

const theme = createTheme();

export default function RegisterPage() {
	const [email, setEmail] = useState('');
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	let navigate = useNavigate();
	function returnToHomePage() {
		navigate('/home');
	}

	const handleSubmit = (event) => {
		if (email === '') {
			event.preventDefault();
			setShowErrorMessage(true);
			return;
		}
		navigate('/home');
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							mb: 3,
						}}>
						<Avatar src={Logo} sx={{ width: 64, height: 64 }} />
						<Typography
							onClick={returnToHomePage}
							variant='h6'
							noWrap
							component='a'
							sx={{
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							EXPENSE TRACKER
						</Typography>
					</Box>
					<Typography>
						Enter the email address associated with your account and we'll send
						you a link to reset your password.
					</Typography>
					{showErrorMessage ? <ErrorMessage /> : <span></span>}
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1, width: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3 }}>
							Continue
						</Button>
					</Box>
					<Link
						variant='body2'
						underline='hover'
						href='/register'
						sx={{ mt: 5 }}>
						{"Don't have an account? Sign Up"}
					</Link>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/money-logo.png';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar({ user, updateUser }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	let navigate = useNavigate();
	function returnToHomePage() {
		handleCloseUserMenu();
		navigate('/home');
	}

	const handleLogout = () => {
		updateUser('');
		navigate('/login');
	};

	const pages = ['Home', 'Income', 'Expenses'];
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Avatar
						onClick={returnToHomePage}
						src={Logo}
						sx={{ width: 64, height: 64, cursor: 'pointer' }}
					/>
					<Typography
						onClick={returnToHomePage}
						variant='h6'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							cursor: 'pointer',
						}}>
						EXPENSE TRACKER
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							<MenuItem
								key={'home'}
								onClick={returnToHomePage}
								sx={{ my: 2, ml: 1, color: 'black', display: 'block' }}>
								Home
							</MenuItem>
							<MenuItem
								key={'income'}
								onClick={returnToHomePage}
								sx={{ my: 2, ml: 1, color: 'black', display: 'block' }}>
								Income
							</MenuItem>
							<MenuItem
								key={'expenses'}
								onClick={returnToHomePage}
								sx={{ my: 2, ml: 1, color: 'black', display: 'block' }}>
								Expenses
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						onClick={returnToHomePage}
						variant='h5'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							cursor: 'pointer',
						}}></Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							key={'home'}
							onClick={returnToHomePage}
							sx={{ my: 2, color: 'white', display: 'block' }}>
							Home
						</Button>
						<Button
							key={'Income'}
							onClick={returnToHomePage}
							sx={{ my: 2, color: 'white', display: 'block' }}>
							Income
						</Button>
						<Button
							key={'Expenses'}
							onClick={returnToHomePage}
							sx={{ my: 2, color: 'white', display: 'block' }}>
							Expenses
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt={user.email} />
							</IconButton>
						</Tooltip>

						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							<MenuItem onClick={() => handleLogout()}>
								<Typography textAlign='center'>Profile</Typography>
							</MenuItem>
							<MenuItem onClick={() => handleLogout()}>
								<Typography textAlign='center'>Account</Typography>
							</MenuItem>
							<MenuItem onClick={() => returnToHomePage()}>
								<Typography textAlign='center'>Dashboard</Typography>
							</MenuItem>
							<MenuItem onClick={() => handleLogout()}>
								<Typography textAlign='center'>Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;

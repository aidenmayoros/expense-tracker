import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function PermanentDrawerLeft({ user, updateUser }) {
	const { pathname } = useLocation();

	const shouldHideNavigation = [
		'/login',
		'/forgot-password',
		'/register',
	].includes(pathname);

	if (shouldHideNavigation) {
		return null;
	}

	return (
		<Box>
			<AppBar user={user} updateUser={updateUser} />
			{/* <Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='permanent'
				anchor='left'>
				<Divider />
				<AccountMenu user={user} updateUser={updateUser} />
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={returnToHomePage}>
							<HomeIcon sx={{ mr: 2 }} />
							<ListItemText primary={'Home'} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer> */}
		</Box>
	);
}

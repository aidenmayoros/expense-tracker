import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import { useLocation } from 'react-router-dom';

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
		</Box>
	);
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 280;

export default function PermanentDrawerLeft({ user, updateUser }) {
	let navigate = useNavigate();
	function returnToHomePage() {
		navigate("/home");
	}
	const { pathname } = useLocation();

	const shouldHideNavigation = [
		"/login",
		"/forgot-password",
		"/register",
	].includes(pathname);

	if (shouldHideNavigation) {
		return null;
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
					ml: `${drawerWidth}px`,
				}}></AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
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
							<ListItemText primary={"Home"} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: "background.default" }}></Box>
		</Box>
	);
}

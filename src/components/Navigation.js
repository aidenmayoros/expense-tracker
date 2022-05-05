import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router";
import AccountMenu from "./AccountMenu";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import SchoolIcon from "@mui/icons-material/School";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const drawerWidth = 240;

export default function Page1() {
	let navigate = useNavigate();
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
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
					display: "flex",
					justifyContent: "space-between",
				}}
				variant='permanent'
				anchor='left'>
				<Box>
					<Box
						sx={{
							display: "flex",
							margin: "16px",
							flexDirection: "column",
						}}>
						<img
							style={{ width: "100%" }}
							// src={Logo}
							alt='Student Hires Logo'></img>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							columnGap: "12px",
							alignItems: "center",
							margin: "8px 16px 8px 16px",
						}}>
						<AccountMenu img='/broken-image.jpg' />
						<h1>Matthew Troke</h1>
					</Box>
					<Divider />
					<List>
						<ListItem button onClick={() => navigate("/students")}>
							<ListItemIcon>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText primary={"Students"} />
						</ListItem>
						<ListItem button onClick={() => navigate("/parents")}>
							<ListItemIcon>
								<SupervisedUserCircleIcon />
							</ListItemIcon>
							<ListItemText primary={"Parents & Guardians"} />
						</ListItem>
						<ListItem button onClick={() => navigate("/pickup")}>
							<ListItemIcon>
								<EscalatorWarningIcon />
							</ListItemIcon>
							<ListItemText primary={"Pickup Authorization"} />
						</ListItem>
					</List>
					<Divider />
				</Box>
			</Drawer>
		</Box>
	);
}

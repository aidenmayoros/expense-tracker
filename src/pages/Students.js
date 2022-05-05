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
import StudentTable from "../components/StudentTable";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function Students() {
	let navigate = useNavigate();

	return (
		<Box
			component='main'
			sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant='h4' gutterBottom component='div'>
					Students
				</Typography>
				<Button sx={{ height: "100%" }} variant='contained'>
					Add Student
				</Button>
			</Box>
			<StudentTable />
		</Box>
	);
}

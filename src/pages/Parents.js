import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ParentTable from "../components/ParentTable";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function Parents() {
	let navigate = useNavigate();

	return (
		<Box
			component='main'
			sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant='h4' gutterBottom component='div'>
					Parents
				</Typography>
				<Button sx={{ height: "100%" }} variant='contained'>
					Add Parent
				</Button>
			</Box>
			<ParentTable />
		</Box>
	);
}

import { Box } from "@mui/material";
import IncomeTable from "../components/IncomeTable";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function HomePage() {
	return (
		<Container maxWidth='xl' sx={{ p: 3 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
				<Typography variant='h5'>
					<b>Income</b>
				</Typography>
				<Box>
					<Button variant='contained'>Add Income</Button>
				</Box>
			</Box>
			<IncomeTable />
		</Container>
	);
}

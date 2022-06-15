import { Box } from "@mui/material";
import ExpenseTable from "../components/ExpensesTable";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import BasicModal from "../components/BasicModal";

export default function HomePage() {
	return (
		<Container maxWidth='xl' sx={{ p: 3 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant='h5'>
					<b>Income</b>
				</Typography>
				<Box>
					<Button variant='contained'>Add Income</Button>
				</Box>
			</Box>
			<ExpenseTable />
		</Container>
	);
}

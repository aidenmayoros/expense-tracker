import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faker } from "@faker-js/faker";
import BasicModal from "../components/BasicModal";

function createData(incomeAmount, incomeType, incomeDate) {
	return {
		incomeAmount,
		incomeType,
		incomeDate,
	};
}

const rows = new Array(5).fill(null).map(() => {
	return createData(
		faker.finance.amount(1500, 2000, 2, "$"),
		faker.finance.transactionType(),
		faker.date.recent(30).toISOString().slice(0, 10)
	);
});

const totalIncome = () => {
	return rows.reduce((previousValue, currentValue) => {
		return (
			previousValue + parseFloat(currentValue.incomeAmount.replace("$", ""))
		);
	}, 0);
};

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Income Amount</TableCell>
						<TableCell>Income Type</TableCell>
						<TableCell>Date of Payment</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.incomeAmount}</TableCell>
								<TableCell>{row.incomeType}</TableCell>
								<TableCell>{row.incomeDate}</TableCell>
							</TableRow>
						);
					})}
					<TableRow>
						<TableCell sx={{ border: 0 }}>
							Total: ${totalIncome().toFixed(2)}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

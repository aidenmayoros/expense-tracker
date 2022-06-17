import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, totalExpenses }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Amount</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.amount}</TableCell>
								<TableCell>{row.type}</TableCell>
								<TableCell>{row.date}</TableCell>
							</TableRow>
						);
					})}
					<TableRow>
						<TableCell sx={{ border: 0 }}>
							Total: ${totalExpenses.toFixed(2)}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

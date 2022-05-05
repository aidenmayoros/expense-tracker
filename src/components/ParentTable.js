import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faker } from "@faker-js/faker";

function createData(
	parentName,
	relationship,
	email,
	cellPhone,
	homePhone,
	workPhone,
	address
) {
	return {
		parentName,
		relationship,
		email,
		cellPhone,
		homePhone,
		workPhone,
		address,
	};
}

const rows = new Array(5).fill(null).map(() => {
	return createData(
		faker.name.firstName() + " " + faker.name.lastName(),
		"Parent",
		faker.internet.email(),
		faker.phone.phoneNumber(),
		faker.phone.phoneNumber(),
		faker.phone.phoneNumber(),
		faker.address.buildingNumber() +
			" " +
			faker.address.streetName() +
			", " +
			faker.address.city() +
			", " +
			faker.address.zipCode()
	);
});

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Parent Name</TableCell>
						<TableCell>Relationship</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Cell Phone</TableCell>
						<TableCell>Home Phone</TableCell>
						<TableCell>Work Phone</TableCell>
						<TableCell>Address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.parentName}</TableCell>
								<TableCell>{row.relationship}</TableCell>
								<TableCell>{row.email}</TableCell>
								<TableCell>{row.cellPhone}</TableCell>
								<TableCell>{row.homePhone}</TableCell>
								<TableCell>{row.workPhone}</TableCell>
								<TableCell>{row.address}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

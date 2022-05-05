import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faker } from "@faker-js/faker";

function createData(studentName, grade, gender, dob, school) {
	return { studentName, grade, gender, dob, school };
}

const rows = new Array(10).fill(null).map(() => {
	return createData(
		faker.name.firstName() + " " + faker.name.lastName(),
		faker.datatype.number({ min: 1, max: 12 }),
		faker.name.gender({ binary: false }),
		faker.date.past(),
		"School"
	);
});

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Student Name</TableCell>
						<TableCell>Grade</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Date of Birth</TableCell>
						<TableCell>School</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.studentName}</TableCell>
								<TableCell>{row.grade}</TableCell>
								<TableCell>{row.gender}</TableCell>
								<TableCell>01/01/2000</TableCell>
								<TableCell>{row.school}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const theme = createTheme();

function ErrorMessage() {
	return (
		<Alert severity='error' variant='outlined' sx={{ mt: 2, ml: 1 }}>
			Please fill in all required* fields
		</Alert>
	);
}

export default function NewExpense() {
	const [expenseType, setExpenseType] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	let navigate = useNavigate();
	function returnToHomePage() {
		navigate("/home");
	}

	function handleSubmit() {
		if (expenseAmount === "" || expenseType === "") {
			setShowErrorMessage(true);
			return;
		}
		console.log("submitted");
		returnToHomePage();
	}

	return (
		<ThemeProvider theme={theme}>
			<Container
				component='main'
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 4,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Typography component='h1' variant='h5' sx={{ ml: 1 }}>
						<b>Add Expense</b>
					</Typography>
					{showErrorMessage ? <ErrorMessage /> : ""}
					<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", mt: 1 }}>
						<Box>
							<TextField
								type='number'
								margin='normal'
								required
								id='expenseAmount'
								label='Expense Amount'
								name='expenseAmnount'
								autoFocus
								onChange={(e) => setExpenseAmount(e.target.value)}
								sx={{ margin: 1 }}
							/>
						</Box>
						<Box>
							<FormControl sx={{ minWidth: 195, m: 1 }}>
								<InputLabel id='demo-simple-select-label'>
									Expense Type*
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={expenseType}
									label='Expense Type'
									onChange={(e) => setExpenseType(e.target.value)}>
									<MenuItem value={"mortgage/rent"}>Mortgage or Rent</MenuItem>
									<MenuItem value={"car-payment"}>Car Payemnt</MenuItem>
									<MenuItem value={"other-car"}>Other Car Expenses</MenuItem>
									<MenuItem value={"utilities"}>Utilities</MenuItem>
									<MenuItem value={"insurance"}>Insurance</MenuItem>
									<MenuItem value={"healthcare"}>Healthcare</MenuItem>
									<MenuItem value={"shopping"}>Shopping</MenuItem>
									<MenuItem value={"clothes"}>Clothes</MenuItem>
									<MenuItem value={"gifts"}>Gifts</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Button
							type='submit'
							variant='contained'
							onClick={handleSubmit}
							sx={{ margin: 1, gridColumn: "span 2" }}>
							Add Expense
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

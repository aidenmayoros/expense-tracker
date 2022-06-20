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

export default function NewIncome() {
	const [incomeType, setIncomeType] = useState("");
	const [incomeAmount, setIncomeAmount] = useState("");
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	let navigate = useNavigate();
	function returnToHomePage() {
		navigate("/home");
	}

	function handleSubmit() {
		if (incomeAmount === "" || incomeType === "") {
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
						<b>Add Income</b>
					</Typography>
					{showErrorMessage ? <ErrorMessage /> : ""}
					<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", mt: 1 }}>
						<Box>
							<TextField
								type='number'
								margin='normal'
								required
								id='incomeAmount'
								label='Income Amount'
								name='incomeAmnount'
								autoFocus
								onChange={(e) => setIncomeAmount(e.target.value)}
								sx={{ margin: 1 }}
							/>
						</Box>
						<Box>
							<FormControl sx={{ minWidth: 195, m: 1 }}>
								<InputLabel id='demo-simple-select-label'>
									Income Type*
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={incomeType}
									label='Income Type'
									onChange={(e) => setIncomeType(e.target.value)}>
									<MenuItem value={"paycheck"}>Paycheck</MenuItem>
									<MenuItem value={"invoice"}>Invoice</MenuItem>
									<MenuItem value={"gift"}>Gift</MenuItem>
									<MenuItem value={"tips"}>Tips</MenuItem>
									<MenuItem value={"other"}>other</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Button
							type='submit'
							variant='contained'
							onClick={handleSubmit}
							sx={{ margin: 1, gridColumn: "span 2" }}>
							Add Income
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

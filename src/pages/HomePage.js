import { Box } from "@mui/material";
import IncomeTable from "../components/IncomeTable";
import ExpenseTable from "../components/ExpenseTable";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

export default function HomePage() {
	let navigate = useNavigate();
	function navigateToNewIncome() {
		navigate("/income/new");
	}

	function navigateToNewExpense() {
		navigate("/expense/new");
	}

	function createData(amount, type, date) {
		return {
			amount,
			type,
			date,
		};
	}

	const incomeRows = new Array(5).fill(null).map(() => {
		return createData(
			faker.finance.amount(1500, 2000, 2, "$"),
			faker.finance.transactionType(),
			faker.date.recent(30).toISOString().slice(0, 10)
		);
	});

	const expenseRows = new Array(5).fill(null).map(() => {
		return createData(
			faker.finance.amount(50, 1500, 2, "$"),
			faker.finance.transactionType(),
			faker.date.recent(30).toISOString().slice(0, 10)
		);
	});

	const totalValue = (transactions) => {
		return transactions.reduce((previousValue, currentValue) => {
			return previousValue + parseFloat(currentValue.amount.replace("$", ""));
		}, 0);
	};

	let monthlySavings =
		"$" +
		parseFloat(totalValue(incomeRows) - totalValue(expenseRows)).toFixed(2);

	return (
		<Box sx={{ width: "100%" }}>
			<Typography variant='h5' sx={{ textAlign: "center", pt: 2 }}>
				<b>Monthly Savings {monthlySavings} </b>
			</Typography>
			<Container maxWidth='xl' sx={{ p: 3 }}>
				<Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
					<Typography variant='h5'>
						<b>Income</b>
					</Typography>
					<Box>
						<Button variant='contained' onClick={navigateToNewIncome}>
							Add Income
						</Button>
					</Box>
				</Box>
				<IncomeTable rows={incomeRows} totalIncome={totalValue(incomeRows)} />
			</Container>
			<Container maxWidth='xl' sx={{ p: 3 }}>
				<Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
					<Typography variant='h5'>
						<b>Expenses</b>
					</Typography>
					<Box>
						<Button variant='contained' onClick={navigateToNewExpense}>
							Add Expense
						</Button>
					</Box>
				</Box>
				<ExpenseTable
					rows={expenseRows}
					totalExpenses={totalValue(expenseRows)}
				/>
			</Container>
		</Box>
	);
}

import { StockHistory } from "./StockHistory";

export function run()
{
	const n: number = parseInt(readline());
	var inputs: string[] = readline().split(" ");
	let stockHistory: StockHistory = new StockHistory();
	for (let i = 0; i < n; i++)
	{
		stockHistory.addNumber(parseInt(inputs[i]));
	}

	console.log(stockHistory.getLoss());
}

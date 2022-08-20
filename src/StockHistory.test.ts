import { StockHistory } from "./StockHistory";

describe("StockHistory", () =>
{
	it("should be empty upon creation", () =>
	{
		let history: StockHistory = new StockHistory();
		expect(history.getLength()).toBe(0);
	});

	it("should have length of 1 with one addition", () =>
	{
		let history: StockHistory = new StockHistory();
		history.addNumber(10);
		expect(history.getLength()).toBe(1);
	});

	it("should have length of 2 with two addition", () =>
	{
		let history: StockHistory = new StockHistory();
		history.addNumber(10);
		history.addNumber(4);
		expect(history.getLength()).toBe(2);
	});

	it("have a 0 loss if only adding growth", () =>
	{
		let history: StockHistory = new StockHistory();
		history.addNumber(1);
		history.addNumber(2);
		history.addNumber(3);
		expect(history.getLoss()).toBe(0);
	});

	it("should record the maximum encountered ", () =>
	{
		let history: StockHistory = new StockHistory();
		expect(history.lastMaximum).toBe(Number.NEGATIVE_INFINITY);
		history.addNumber(1);
		expect(history.lastMaximum).toBe(1);
		history.addNumber(2);
		expect(history.lastMaximum).toBe(2);
		history.addNumber(0);
		expect(history.lastMaximum).toBe(2);
	});

	it("have a -x loss if only adding decreasing stock for a total of -x", () =>
	{
		let history: StockHistory = new StockHistory();
		history.addNumber(100);
		history.addNumber(50);
		expect(history.getLoss()).toBe(-50);
	});
});

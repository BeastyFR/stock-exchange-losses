export class StockHistory
{
	historyValues: number[];
	lastMaximum: number;
	biggestLoss: number;

	getCurrentLossWith(addedNumber: number)
	{
		return addedNumber - this.lastMaximum;
	}

	recordMaximumIfReached(addedNumber: number): void
	{
		if (addedNumber > this.lastMaximum)
			this.lastMaximum = addedNumber;
	}

	addNumber(addedNumber: number): void
	{
		this.historyValues.push(addedNumber);
		this.recordMaximumIfReached(addedNumber);

		let newLoss = this.getCurrentLossWith(addedNumber);
		if (newLoss < this.biggestLoss)
			this.biggestLoss = newLoss;
	}

	getLength(): number
	{
		return this.historyValues.length;
	}

	constructor()
	{
		this.historyValues = [];
		this.biggestLoss = 0;
		this.lastMaximum = Number.NEGATIVE_INFINITY;
	}

	getLoss(): number
	{
		return this.biggestLoss;
	}

}

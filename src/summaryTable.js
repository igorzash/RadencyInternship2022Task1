import CATEGORY from "./category";

function summaryTableCalc(notes) {
	const categories = Object.values(CATEGORY);

	return categories
		.map((cat) => Array.from(notes).filter((n) => n.category === cat))
		.map((n, i) => [
			categories[i],
			n.filter((n) => !n.archived).length,
			n.filter((n) => n.archived).length,
		]);
}

export default summaryTableCalc;

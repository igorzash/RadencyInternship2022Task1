import storage from "../storage";
import summaryTableCalc from "../summaryTable";

const summaryTable = document.getElementById("summary__root");

function renderSummaryTable() {
	while (summaryTable.children.length > 1) {
		summaryTable.lastElementChild.remove();
	}

	const rows = summaryTableCalc(storage.data.notes);

	rows.forEach((row) => {
		const row_elem = document.createElement("div");

		row.forEach((column) => {
			const column_elem = document.createElement("div");
			column_elem.textContent = column;
			row_elem.appendChild(column_elem);
		});

		summaryTable.appendChild(row_elem);
	});
}

export default renderSummaryTable;

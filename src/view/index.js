import storage from "../storage";
import renderNote from "./renderNote";
import renderSummaryTable from "./renderSummaryTable";

export function init() {
	storage.data.notes.forEach((note) =>
		renderNote(note, { editState: false })
	);

	renderSummaryTable();
}

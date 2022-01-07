import storage from "../storage";
import renderNote from "./renderNote";

export function init() {
	storage.data.notes.forEach((note) =>
		renderNote(note, { editState: false })
	);
}

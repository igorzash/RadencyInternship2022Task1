import renderNoteActions from "./renderNoteActions";
import renderNoteDetails from "./renderNoteDetails";

const notesRoot = document.getElementById("notes__root");
const archivedNotesRoot = document.getElementById("archieved-notes__root");

function renderNote(note, options) {
	const note_container = document.createElement("div");

	renderNoteDetails(note, note_container, options);
	renderNoteActions(note, note_container, options);

	if (options.target !== undefined) {
		options.target.replaceWith(note_container);
		return;
	}

	(note.archived === true ? archivedNotesRoot : notesRoot).appendChild(
		note_container
	);
}

export default renderNote;

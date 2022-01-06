import storage from "./storage";

const notesRoot = document.getElementById("notes__root");
const archievedNotesRoot = document.getElementById("archieved-notes__root");

function renderNote(note, archieved = False) {
	const note_container = document.createElement("div");
	note_container.classList.add("note-container");

	const contents = [note.contents, note.date.toLocaleDateString("en-US"), note.category];

	for (let i = 0; i < contents.length; i++) {
		const column = document.createElement("div");
		column.textContent = contents[i];
		note_container.appendChild(column);
	}

	(archieved === true ? archievedNotesRoot : notesRoot).appendChild(note_container);
}

export function init() {
	storage.data.notes.forEach(renderNote);
	storage.data.archievedNotes.forEach((note) => renderNote(note, true));
}

import { init as initView, renderNote } from "./view";
import Note from "./note";
import storage from "./storage";
import CATEGORY from "./category";

const notesRoot = document.getElementById("notes__root");
const archivedNotesRoot = document.getElementById("archieved-notes__root");
const notesTypeSelect = document.getElementById("notes-type__select");
const newNoteButton = document.getElementById("new-note__btn");

newNoteButton.addEventListener("click", () => {
	const note = new Note("", CATEGORY.TASK, new Date());
	storage.addNote(note);
	renderNote(note, { editState: true });
});

notesTypeSelect.addEventListener("change", (event) => {
	const index = event.target.selectedIndex;

	if (index === 0) {
		notesRoot.classList.remove("hidden");
		archivedNotesRoot.classList.add("hidden");
		newNoteButton.classList.remove("hidden");
	} else if (index === 1) {
		notesRoot.classList.add("hidden");
		archivedNotesRoot.classList.remove("hidden");
		newNoteButton.classList.add("hidden");
	}
});

initView();

import { init as initView } from "./view";
import renderNote from "./view/renderNote";
import Note from "./note";
import storage from "./storage";
import CATEGORY from "./category";
import prepopulateStorage from "./randomData";

const notesRoot = document.getElementById("notes__root");
const archivedNotesRoot = document.getElementById("archieved-notes__root");
const notesTypeSelect = document.getElementById("notes-type__select");
const newNoteButton = document.getElementById("new-note__btn");

prepopulateStorage();

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

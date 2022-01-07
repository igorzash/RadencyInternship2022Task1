import { init as initView, renderNote } from "./view";
import Note from "./note";
import storage from "./storage";
import CATEGORY from "./category";

const newNoteButton = document.getElementById("new-note__btn");

initView();

newNoteButton.addEventListener("click", () => {
	const note = new Note("Type note contents here", CATEGORY.TASK, new Date());
	storage.addNote(note);
	renderNote(note, { editState: true });
});

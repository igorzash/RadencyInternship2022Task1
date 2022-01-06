import storage from "./storage";

const notesRoot = document.getElementById("notes__root");
const archievedNotesRoot = document.getElementById("archieved-notes__root");

const notesTypeSelect = document.getElementById("notes-type__select");

function toggleArchive() {}

function renderNote(note, archieved) {
	const note_container = document.createElement("div");
	note_container.classList.add("note-container");

	const contents = [
		note.contents,
		note.date.toLocaleDateString("en-US"),
		note.category,
	];

	for (const column_contents of contents) {
		const column = document.createElement("div");
		column.textContent = column_contents;
		note_container.appendChild(column);
	}

	const actions = [
		{
			name: "toggleArchive",
			handler: ({ target }) => {
				target.parentElement.parentElement.remove();
				renderNote(note, !archieved);
			},
		},
	];

	const actions_root = document.createElement("div");

	for (const action of actions) {
		const btn = document.createElement("button");
		btn.textContent = action.name;
		btn.addEventListener("click", action.handler);

		actions_root.appendChild(btn);
	}

	note_container.appendChild(actions_root);

	(archieved === true ? archievedNotesRoot : notesRoot).appendChild(
		note_container
	);
}

export function init() {
	storage.data.notes.forEach((note) => renderNote(note, false));
	storage.data.archievedNotes.forEach((note) => renderNote(note, true));

	notesTypeSelect.addEventListener('change', (event) => {
		const index = event.target.selectedIndex;

		if (index === 0) {
			notesRoot.classList.remove('hidden');
			archievedNotesRoot.classList.add('hidden');
		} else if (index === 1) {
			notesRoot.classList.add('hidden');
			archievedNotesRoot.classList.remove('hidden');
		}
	});
}

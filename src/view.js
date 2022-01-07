import storage from "./storage";
import CATEGORY from "./category";

const notesRoot = document.getElementById("notes__root");
const archivedNotesRoot = document.getElementById("archieved-notes__root");

const notesTypeSelect = document.getElementById("notes-type__select");

export function renderNote(note, options) {
	const note_container = document.createElement("div");
	note_container.classList.add("note-container");

	[
		note.contents,
		note.date.toLocaleDateString("en-US"),
		note.category,
	].forEach((x, i) => {
		let column;

		if (i === 1 || options.editState === false) {
			column = document.createElement("div");
			column.textContent = x;
		} else if (i === 0) {
			column = document.createElement("input");
			column.classList.add("note-contents__input");
			column.value = x;
		} else if (i === 2) {
			column = document.createElement("select");
			column.classList.add("note-category__select");

			Object.values(CATEGORY).forEach((x) => {
				const option = document.createElement("option");
				option.innerText = x;
				column.appendChild(option);
			});

			column.value = x;
		}

		note_container.appendChild(column);
	});

	const actions = [
		{
			name: "editToggle",
			handler: ({ target }) => {
				if (options.editState) {
					const contents =
						target.parentElement.parentElement.querySelector(
							".note-contents__input"
						).value;
					const category =
						target.parentElement.parentElement.querySelector(
							".note-category__select"
						).value;

					note.update(contents, category);
				}

				renderNote(note, {
					...options,
					editState: !options.editState,
					target: target.parentElement.parentElement,
				});
			},
		},
		options.editState === false
			? {
					name: "toggleArchive",
					handler: ({ target }) => {
						note.toggleArchive();
						target.parentElement.parentElement.remove();
						delete options.target;
						renderNote(note, options);
					},
			  }
			: {
					name: "dismiss",
					handler: ({ target }) => {
						renderNote(note, {
							options,
							editState: false,
							target: target.parentElement.parentElement,
						});
					},
			  },
	].filter((x) => x !== undefined);

	const actions_root = document.createElement("div");

	for (const action of actions) {
		const btn = document.createElement("button");
		btn.textContent = action.name;
		btn.addEventListener("click", action.handler);

		actions_root.appendChild(btn);
	}

	note_container.appendChild(actions_root);

	if (options.target !== undefined) {
		options.target.replaceWith(note_container);
		return;
	}

	(note.archived === true ? archivedNotesRoot : notesRoot).appendChild(
		note_container
	);
}

export function init() {
	storage.data.notes.forEach((note) =>
		renderNote(note, { editState: false })
	);

	notesTypeSelect.addEventListener("change", (event) => {
		const index = event.target.selectedIndex;

		if (index === 0) {
			notesRoot.classList.remove("hidden");
			archivedNotesRoot.classList.add("hidden");
		} else if (index === 1) {
			notesRoot.classList.add("hidden");
			archivedNotesRoot.classList.remove("hidden");
		}
	});
}

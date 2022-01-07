import storage from "./storage";
import CATEGORY from "./category";

const notesRoot = document.getElementById("notes__root");
const archivedNotesRoot = document.getElementById("archieved-notes__root");

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
			column.placeholder = "Type your note contents here."
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
			name: options.editState === true ? "save" : "edit",
			handler: ({ target }) => {
				if (options.editState) {
					const contents = target.querySelector(
						".note-contents__input"
					).value;
					const category = target.querySelector(
						".note-category__select"
					).value;

					note.update(contents, category);
				}

				renderNote(note, {
					...options,
					editState: !options.editState,
					target,
				});
			},
		},
		...(options.editState === false
			? [
					{
						name: "archive",
						handler: ({ target }) => {
							note.toggleArchive();
							target.remove();
							delete options.target;
							renderNote(note, options);
						},
					},
					{
						name: "delete",
						handler: ({ target }) => {
							storage.remove(note);
							target.remove();
						},
					},
			  ]
			: [
					{
						name: "cancel",
						handler: ({ target }) => {
							renderNote(note, {
								options,
								editState: false,
								target,
							});
						},
					},
			  ]),
	]
		.filter((x) => x !== undefined)
		.map((x) => ({
			...x,
			handler: (evt) => {
				return x.handler({
					...evt,
					target: evt.target.parentElement.parentElement,
				});
			},
		}));

	const actions_root = document.createElement("div");

	for (const action of actions) {
		const btn = document.createElement("button");

		const icon = document.createElement("i");
		icon.classList.add("material-icons");
		icon.textContent = action.name;
		btn.appendChild(icon);

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
}

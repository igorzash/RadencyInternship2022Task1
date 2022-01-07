import renderNote from "./renderNote";
import storage from "../storage";

function renderNoteActions(note, note_container, options) {
	const actions = [
		...(note.archived === false
			? [
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
			  ]
			: []),
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
	].map((x) => ({
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
}

export default renderNoteActions;

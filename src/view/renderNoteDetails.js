import CATEGORY from "../category";

function renderNoteDetails(note, note_container, options) {
	[
		note.contents,
		note.date.toLocaleDateString("en-US"),
		note.category,
		note.dates,
	].forEach((x, i) => {
		let column;

		if (i === 1 || i > 2 || options.editState === false) {
			column = document.createElement("div");
			column.textContent = x;
		} else if (i === 0) {
			column = document.createElement("input");
			column.classList.add("note-contents__input");
			column.placeholder = "Type your note contents here.";
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
}

export default renderNoteDetails;

document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		document.querySelector(".cadastro-button")?.click();
	}
});

const backgroundStyle = document.createElement("style");
backgroundStyle.textContent = `
	body {
		animation: oscilarBackground 8s ease-in-out infinite alternate;
	}

	@keyframes oscilarBackground {
		0% { background-color: #e1ffe8; }
		50% { background-color: #c2fccf; }
		100% { background-color: #c3ffdb; }
	}
`;
document.head.appendChild(backgroundStyle);


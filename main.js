"use strict";
var sourceContainer;
var alotOverlay;
function loadHandler() {
	sourceContainer = document.getElementById("source-container");
	alotOverlay = document.getElementById("alot-overlay");
	handleQuery();
}

function handleQuery() {
	var searchPath = window.location.search.substring(1).split("&");
	if (searchPath.length < 1) {
		redirectToHome();
		return;
	}
	for (var i = 0; i < searchPath.length; i++) {
//		console.log(searchPath[i]);
		var queryParam = searchPath[i].split("=");
		if (queryParam[0] === "sourceimg") {
			loadSourceImage(decodeURIComponent(queryParam[1]));
			return;
		} else if (queryParam[1] === "keyword") {
			//searchKeyword(decodeURIComponent(queryParam[2]));
		} else if (queryParam[0] === "repeatphrase") {
			loadRepeatPhrase(decodeURIComponent(queryParam[1]));
			return;
		}
	}
}

function loadSourceImage(path) {
	sourceContainer.style.backgroundImage = "url(" + path + ")";
	sourceContainer.style.width = alotOverlay.width + "px";
	sourceContainer.style.height = alotOverlay.height + "px";
}

function loadRepeatPhrase(phrase) {
	var joinedPhrase = phrase + " ";
	sourceContainer.style.width = alotOverlay.width + "px";
	sourceContainer.style.height = alotOverlay.height + "px";
	sourceContainer.textContent = new Array(1000).join(joinedPhrase);
	sourceContainer.style.overflow = "hidden";
}

function redirectToHome() {
	alert("Append ?sourceimg=http://url/to/your/image.png to the end of the url");
}

window.onload = loadHandler;

function ClozeCard(text, cloze) {
	this.cloze = cloze;
	this.fullText = text;
	// console.log("first cloze " + this.cloze)
	// console.log("first text " + this.fullText)
	this.partial = this.partition();
}

ClozeCard.prototype.partition = function() {
	var text = this.fullText;
	var cloze = this.cloze;
	// console.log("I am text " + text);
	// console.log("i am cloze " + cloze);
	var part = text.replace(cloze,'...');
	// console.log("I am part " + part);
	// console.log("check part " + (part == text));
	if (part == text) {
		// var err = "Error, Cloze doesn't apear in the sentence";
		console.log("Error, Cloze doesn't apear in the sentence");
	} else {
		return part;
	}
}


module.exports = ClozeCard;
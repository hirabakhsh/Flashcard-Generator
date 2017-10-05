
function ClozeCard(text, cloze) {
	this.partial = text;
	this.cloze = cloze;
	this.fullText = cloze + text;
}

module.exports = ClozeCard;
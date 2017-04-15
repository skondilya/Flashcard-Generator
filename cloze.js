function ClozeCard(cloze,text) {
  this.cloze = cloze;
  this.text = text;
  this.partialText = this.text.replace(this.cloze, "....");

  this.showCloze = function() {
      console.log(this.cloze);
  };

  this.showFulltext = function() {
      console.log(this.fullText);
  };
  
  this.showPartial = function() {
      console.log(this.partial);
  };
}

module.exports = ClozeCard;
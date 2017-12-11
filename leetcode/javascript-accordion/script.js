var accordionItems = document.getElementsByClassName('accordItem');

var accordionHeader = document.getElementsByClassName('accord-header');


for (var i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].className = 'accordItem close';
  }
  if (itemClass == 'accordItem close') {
    this.parentNode.className = 'accordItem open';
  }
}
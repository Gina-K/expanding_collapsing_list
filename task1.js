'use strict'

const arrows = document.querySelectorAll(".collapse-expand");

arrows.forEach(arrow => arrow.addEventListener("click", collapseOrExpand));

function collapseOrExpand() {
  let expandedList = document.getElementById(`${this.id}-expanded`);
  let expandedListStatus = expandedList.className;
  if (expandedListStatus === "collapsed") {
    expandedList.className = "expanded";
    this.style.transform = "rotate(180deg)";
      } else {
    expandedList.className = "collapsed";
    this.style.transform = "none";
  }
  return true;
}
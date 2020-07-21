'use strict'

const headers = document.querySelectorAll(".list-header");

headers.forEach(arrow => arrow.addEventListener("click", collapseOrExpand));

function collapseOrExpand() {
  let arrow = this.getElementsByClassName("collapse-expand")[0];
  let expandedList = document.getElementById(`${this.id}-expanded`);
  let expandedListStatus = expandedList.className;
  if (expandedListStatus === "collapsed") {
    expandedList.className = "expanded";
    arrow.style.transform = "rotate(180deg)";
      } else {
    expandedList.className = "collapsed";
    arrow.style.transform = "none";
  }
  return true;
}
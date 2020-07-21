'use strict'

const headers = document.querySelectorAll(".list-header");

headers.forEach(arrow => arrow.addEventListener("click", collapseOrExpand));

function collapseOrExpand() {
  let arrow = this.getElementsByClassName("collapse-expand")[0];
  let expandedList = document.getElementById(`${this.id}-expanded`);
  let expandedListStatus = expandedList.className;
  let lessonHeading = this.getElementsByClassName("lesson-heading")[0];
  if (expandedListStatus === "collapsed") {
    expandedList.className = "expanded";
    lessonHeading.style.marginBottom = "12px";
    arrow.style.transform = "rotate(180deg)";
      } else {
    expandedList.className = "collapsed";
    lessonHeading.style.marginBottom = "24px";
    arrow.style.transform = "none";
  }
  return true;
}
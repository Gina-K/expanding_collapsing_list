let arrows = document.getElementsByClassName("collapse-expand");
let arrow = document.getElementById("lesson1");

arrow.onclick = function  collapse() {
  console.log(arrow.id);
  let expandedList = document.getElementById(`${arrow.id}-expanded`);
  console.log(expandedList.id);
  let expandedListStatus = expandedList.className;
  console.log(expandedListStatus);
  if (expandedListStatus === "collapsed") {
    expandedList.className = "expanded";
  } else {
    expandedList.className = "collapsed";
  }
  return true;
}
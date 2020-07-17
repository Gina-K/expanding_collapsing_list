// let arrows = document.getElementsByClassName("collapse-expand");
let arrow = document.getElementById("lesson1");

arrow.addEventListener("click", function collapse()
{
  console.log(this.id);
  let expandedList = document.getElementById(`${this.id}-expanded`);
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
);
// /* Set the width of the side navigation to 250px */
// /* Set the display of the side navigation to block */
function openNav() {
    document.getElementById("mNav").style.display = "block";
}
  
// /* Set the width of the side navigation to 0 */
// /* Set the display of the side navigation to none */
function closeNav() {
    document.getElementById("mNav").style.display = "none";
}
// mobile functions start here
function mob_nMode() {
    document.body.style.backgroundColor = "black";
    // document.getElementById("relText").style.color = "white";
    document.getElementById("night").style.display = "none";
    document.getElementById("day").style.display = "flex";
    // 0px 15px 10px -15px #111
}

function mob_lMode() {
    document.getElementById("night").style.display = "flex";
    document.body.style.backgroundColor = "white";
    // document.getElementById("relText").style.color = "black";
    document.getElementById("day").style.display = "none";
}
// mobile functions ends here
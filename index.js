// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left);
console.log(dodger.style.bottom);
dodger.style.bottom = "0px";
// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);
//         console.log(e.key);
//         dodger.style.left = `${left - 1}px`;
//     }
// });
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    let lefttNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(lefttNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    console.log(e.key);
});

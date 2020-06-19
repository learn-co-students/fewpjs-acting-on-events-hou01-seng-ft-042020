// Your code here

let dodger = document.getElementById('dodger')



document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
   
})



function moveDodgerLeft() {
    
    let leftNumbers = dodger.style.left.replace("px", "")
        let left = parseInt(leftNumbers, 10)
        if (left > 0){
            dodger.style.left = `${left - 4}px`
        }

        
}


function moveDodgerRight() {
    // if (dodger.style.left < '300px') {
        let rightNumbers = dodger.style.left.replace("px", "")
        let right = parseInt(rightNumbers, 10)

        if (right < 200) {
             dodger.style.left = `${right + 4}px`
        }
    // }

}



document.addEventListener('keypress', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})





// let dodger = document.getElementById("dodger");


// function moveDodgerLeft() {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
   
//     if (left > 0) {
//       dodger.style.left = `${left - 4}px`;
//     }
//   }




// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });



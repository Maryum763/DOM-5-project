const statusEle = document.querySelector("h5");
//  console.log(statusEle)
// const removeFriend= remove.classList.add("#remove")
const removeEle = document.querySelector("remove");
const btnEle = document.querySelector("#add");

// console.log(addFriend)
let a = 0;
btnEle.addEventListener("click", function () {
  if (a == 0) {
    statusEle.innerHTML = "Friends";
    statusEle.style.color = "green";
    btnEle.innerHTML = "Remove Friend";
    btnEle.style.backgroundColor = "#dadada";
    btnEle.style.color = "black";
    a = 1;
  } else {
    statusEle.innerHTML = "Stranger";
    statusEle.style.color = "red";
    btnEle.innerHTML = "Add Friend";
    btnEle.style.backgroundColor = "cadetblue";
    btnEle.style.color = "white";
    a = 0;
  }
});

var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("count").innerText = data;
  
//creation of increment function
function like() {
    data = data + 1;
    document.getElementById("count").innerText = data;
}
//creation of decrement function
function dislike() {
    data = data - 1;
    document.getElementById("count").innerText = data;
}

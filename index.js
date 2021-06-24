var submit_button = document.getElementById("submit");
var px = document.getElementById("px");
var r = document.getElementById("r");
var px_i = 0;
submit_button.addEventListener("click", function () {
    px_i = +px.value;
    var i = px_i / 16;
    var ii = i * 0.25;
    r.innerHTML = ii.toString();
});

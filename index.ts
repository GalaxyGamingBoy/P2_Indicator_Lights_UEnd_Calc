const submit_button = document.getElementById("submit") as HTMLButtonElement;
const px = document.getElementById("px") as HTMLInputElement;
const r = document.getElementById("r")

var px_i: number = 0;

submit_button.addEventListener("click", () => {
    px_i = +px.value
    var i: number = px_i / 16
    var ii: number = i * 0.25
    r.innerHTML = ii.toString()
})
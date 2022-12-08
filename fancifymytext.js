function bigger() {
document.getElementById("txtArea").style.fontSize = "24pt";
}

function fancy() {
    document.getElementById("txtArea").style.fontWeight = "bold";
    document.getElementById("txtArea").style.color = "blue";
    document.getElementById("txtArea").style.textDecoration = "underline";
}

function boring() {
    document.getElementById("txtArea").style.fontWeight = "normal";
    document.getElementById("txtArea").style.color = "black";
    document.getElementById("txtArea").style.textDecoration = "none";
}

function moo() {
    var str = document.getElementById("txtArea");
    str.value = str.value.toUpperCase();
    var parts = str.value.split(".");
    str.value = parts.join("-Moo");
}
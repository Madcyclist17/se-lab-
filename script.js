// Show/hide password onClick of button using Javascript only

// Show password function
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

// Hide password function
function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

// Add event listener to show/hide password
document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

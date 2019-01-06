// collapse and expand menu links
// inspired by: https://www.w3schools.com/howto/howto_js_collapsible.asp
function expandOrCollapsePanel1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function expandOrCollapsePanel2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function expandOrCollapsePanel3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};



// enter triggers a click on the magnifying glass
// credits to: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter&fbclid=IwAR3aZT8GlXbvdywJEXbWGRVY-g1sl7GcKEs8kAAaWwiK3pNNxgM5Wdqgfm0
var userinput = document.getElementById("searchbar");
userinput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mag").click();
    }
});

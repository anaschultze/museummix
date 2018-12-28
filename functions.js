function search(userinput) {
    document.getElementById("images").innerHTML = "";
    var request = new XMLHttpRequest();
    var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userinput + "&key=fMLJ55Eu&format=json"
    console.log(userinput);
    console.log(url);
    request.open('GET', url, true); // open a new connection, using the GET request on the URL endpoint
    request.onload = function () { // begin accessing JSON data here
        var imgdiv = document.getElementById("images");
        var data = JSON.parse(this.response);
        //console.log(data);
        //console.log(data["artObjects"]);
        //    debugger;
        for (index in data["artObjects"]){
            console.log(index);
            console.log(data["artObjects"][index]["webImage"]["url"]);
            var imgurl = data["artObjects"][index]["webImage"]["url"];
                var img = document.createElement("img");
                img.src = imgurl;
                imgdiv.appendChild(img);
            }
        }
    request.send();
};










// inspired by: https://www.w3schools.com/howto/howto_js_collapsible.asp

// other solutions for the collapse/expand functionality:
//      - bootstrap collapse -> https://getbootstrap.com/docs/4.0/components/collapse/ (note problem that other css will be disrupted, check https://stackoverflow.com/questions/11831346/applying-css-styles-only-to-certain-elements & https://stackoverflow.com/questions/13966259/how-to-namespace-twitter-bootstrap-so-styles-dont-conflict & https://getbootstrap.com/docs/3.3/customize/)
//      - jquery accordion: https://jqueryui.com/accordion/?fbclid=IwAR3OaBUI7Bsk-HJYkRByfusJIKqpGGTw7tJP-oB3fsX8z6BHjhHzW28J0fQ#collapsible
//      - simple jquery accordion with weird animation effect: http://uniondesign.ca/simple-accordion-without-jquery-ui/

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
// credits to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter&fbclid=IwAR3aZT8GlXbvdywJEXbWGRVY-g1sl7GcKEs8kAAaWwiK3pNNxgM5Wdqgfm0
var userinput = document.getElementById("searchbar");
userinput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mag").click();
    }
});

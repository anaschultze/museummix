function myFirstFunction(input) {
    // location.href = "results.html";
    // this also works: window.open("https://www.youraddress.com","_self")
    // Create a request variable and assign a new XMLHttpRequest object to it.
    document.getElementById("pictures").innerHTML = "";
    var request = new XMLHttpRequest();

    var query = "https://www.rijksmuseum.nl/api/nl/collection?q=" + input + "&key=fMLJ55Eu&format=json"
    console.log(query);
    // Open a new connection, using the GET request on the URL endpoint
    // request.open('GET', 'https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=fMLJ55Eu&format=json', true);

    // request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=fMLJ55Eu&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614', true);
    request.open('GET', query, true);


    request.onload = function () {
      // Begin accessing JSON data here
      // Begin accessing JSON data here
        var imgdiv = document.getElementById("pictures");
        var data = JSON.parse(this.response);
        //console.log(data);
        //console.log(data["artObjects"]);
        for (index in data["artObjects"]){
            //console.log(index);
            console.log(data["artObjects"][index]["webImage"]["url"]);
            var imgurl = data["artObjects"][index]["webImage"]["url"];
                var img = document.createElement("img");
                img.src = imgurl;
                imgdiv.appendChild(img);
            }

        }


    // Send request
    request.send();

};

//
// var wage = document.getElementById("searchbar");
// wage.addEventListener("keydown", function (e) {
//     if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
//         validate(e);
//     }
// });
//
// function validate(e) {
//     var text = e.target.value;
//     location.href = "results.html"
// }

function anotherFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function anotherFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function anotherFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//
// // key: fMLJ55Eu
//
// //$.ajax({
//
//         //    url: "https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=fMLJ55Eu&format=json",
//
//         //    success: function (result) {
//
//                 // here it should say what happens when the function is correctly executed
//
//         //        }
//         //    },
//
//         //    error: function (result) {
//         //        console.log("Error: " + result);
//
//         //    }

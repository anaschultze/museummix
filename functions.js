function myFirstFunction() {
    location.href = "results.html";
    // this also works: window.open("https://www.youraddress.com","_self")
};

var wage = document.getElementById("searchbar");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    var text = e.target.value;
    location.href = "results.html"
}

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

// $(document).ready(function() {

//    $("#mag").on("click", function(){
//        alert('click!');

//    });

//});

//$.ajax({

        //    url: "https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=fMLJ55Eu&format=json",

        //    success: function (result) {

                // here it should say what happens when the function is correctly executed

        //        }
        //    },

        //    error: function (result) {
        //        console.log("Error: " + result);

        //    }

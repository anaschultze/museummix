 $(document).ready(function(){

    $("#searchbar").on("click", function(){

        $.ajax({

            url: "https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=fMLJ55Eu&format=json",

            success: function (result) {

                // here it should say what happens when the function is correctly executed

                }
            },

            error: function (result) {
                console.log("Error: " + result);

            }

    });

});

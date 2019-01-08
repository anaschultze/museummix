function search(userinput) {
    // Step 0: Remove current results
    document.getElementById("images").innerHTML = "";

    // Step 1: Make an array for the results
    var pictures = new Array();

    // Step 2: Call the various APIs and add results to array
    // 1: Rijksmuseum
    var request = new XMLHttpRequest();
    var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userinput + "&key=fMLJ55Eu&format=json";
    request.open('GET', url, false); // open a new connection, using the GET request on the URL endpoint
    request.onload = function () { // begin accessing JSON data here

        var data = JSON.parse(this.response);
        // console.log(data);
        // console.log(data["artObjects"]);
        //    debugger;
        var objects = data["artObjects"];
        var olength = objects.length;
        for (i = 0; i < olength; i++){
            var result = objects[i];
            // Add to Array
            if (result.webImage != null) {
                var image = {
                    artist: result["principalOrFirstMaker"],
                    title: result["title"],
                    imgurl: result["webImage"]["url"],
                    weburl: result["links"]["web"],
                    api: "Rijksmuseum"
                };
                pictures.push(image);
            }
        }
    }
    request.send();

    // 2: Met
    // var request = new XMLHttpRequest();
    // var url = "https://collectionapir.metmuseum.org/public/collection/collectionlisting?q=" + userinput;
    // request.open('GET', url, true); // open a new connection, using the GET request on the URL endpoint
    // request.onload = function () { // begin accessing JSON data here
    //
    //     var data = JSON.parse(this.response);
    //     console.log(data);
    //     // console.log(data["artObjects"]);
    //     //    debugger;
    //     for (index in data["artObjects"]){
    //         // Add to Array
    //         if (data.artObjects[index].webImage === null) {
    //             console.log("(no image was found for this collection object)");
    //         } else {
    //             var image = {
    //                 artist: data["artObjects"][index]["principalOrFirstMaker"],
    //                 title: data["artObjects"][index]["title"],
    //                 imgurl: data["artObjects"][index]["webImage"]["url"],
    //                 weburl: data["artObjects"][index]["links"]["web"],
    //                 api: "Met"
    //             };
    //             pictures.push(image);
    //         }
    //     }
    // }
    // request.send();


    // 3: Cooper Hewitt
    var request = new XMLHttpRequest();
    var url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=8f0db3bddb24f6ac556ebc4f09995f79&query=" + userinput;
    request.open('GET', url, false); // open a new connection, using the GET request on the URL endpoint
    request.onload = function () { // begin accessing JSON data here

        var data = JSON.parse(this.response);
        var alength = data["objects"].length;
        if (alength != 0){
            for (i = 0; i < alength; i++){
                var result = data["objects"][i];
                // Add to Array
                if (result["images"].length != 0) {
                    var image = {
                        artist: null,
                        title: result["title"],
                        imgurl: result["images"][0]["z"]["url"],
                        weburl: result["url"],
                        api: "Cooper Hewitt"
                    };
                    pictures.push(image);
                }
            }

        }
        // console.log(data["artObjects"]);
        //    debugger;

    }
    request.send();

    console.log(pictures);
    var plength = pictures.length;
    console.log(pictures[0]);
    // Step 3: abort and alert if array empty

    // Step 4: Sort results?

    // Step 5: Show results
    var imgdiv = document.getElementById("images");
    for (i = 0; i < plength; i++){
        console.log(i);
        var img = document.createElement("img");
        img.src = pictures[i]["imgurl"];
        imgdiv.appendChild(img);
    }
}

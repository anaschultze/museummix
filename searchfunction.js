function search(userinput) {
    // Step 1: Remove current results
    document.getElementById("images").innerHTML = "";

    // Step 2: Make an array for the results
    var pictures = new Array();

    // Step 3: Call the Rijksmuseum API and add results to array
    var request = new XMLHttpRequest();
    var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userinput + "&key=fMLJ55Eu&format=json";
    request.open('GET', url, false); // open a new connection, using the GET request on the URL endpoint
    request.onload = function () { // begin accessing JSON data here

        var data = JSON.parse(this.response);
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


    // Step 4: call the Cooper Hewitt API
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

    }
    request.send();

    console.log(pictures);
    var plength = pictures.length;
    console.log(pictures[0]);

    // Step 5: Show results
    var imgdiv = document.getElementById("images");

    if (plength != 0) {
        for (i = 0; i < plength; i++){
            console.log(i);

            var web = document.createElement("a");
            web.href = pictures[i]["weburl"];
            web.target = "_blank";
            web.class = "loadingpictures";
            
            pic = web.appendChild(document.createElement("img"));
            pic.src = pictures[i]["imgurl"];
            pic.target = "_blank"

            imgdiv.appendChild(web);




            // var element = document.createElement("div");
            // element.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
            // document.getElementById('lc').appendChild(element);
            //
            // var pic = document.createElement("img");
            // pic.src = pictures[i]["imgurl"];
            // imgdiv.appendChild(pic);
            //
            // var info = document.createElement("span");
            //
            // if (pictures[i]["artist"] == null) {
            //      web.text = pictures[i]["title"]
            //  } else {
            //      web.text = pictures[i]["title"] + " (" + pictures[i]["artist"] + ") "
            //  };
            // imgdiv.appendChild(info);
        }

    } else {
        imgdiv.innerHTML = "No museum objects were found for this query...<br>Try again!";
    }

}

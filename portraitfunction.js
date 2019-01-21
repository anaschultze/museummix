function portrait() {
    // Step 1: Remove current results
    document.getElementById("images").innerHTML = "";

    // Step 2: Make an array for the results
    var pictures = new Array();

    // Step 3: Call the Rijksmuseum API and add results to array
    var request = new XMLHttpRequest();
    var url = "https://www.rijksmuseum.nl/api/en/collection?q=" + "portrait" + "&key=fMLJ55Eu&format=json";
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
            web.className = "resultlink";
            web.target = "_blank";

            var container = document.createElement("div");
            container.className = "imgcontainer";

            var pic = document.createElement("img");
            pic.src = pictures[i]["imgurl"];
            pic.className = "image";
            pic.target = "_blank";
            container.appendChild(pic);

            var overlay = document.createElement("div");
            overlay.className = "overlay";

            var info = document.createElement("div");
            info.textContent = pictures[i]["title"];
            info.className = "text";
            overlay.appendChild(info);

            container.appendChild(overlay);

            web.appendChild(container);

            imgdiv.appendChild(web);
        }
    } else {
        imgdiv.innerHTML = "No museum objects were found for this query...<br>Try again!";
    }

}

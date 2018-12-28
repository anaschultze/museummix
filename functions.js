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
            if (data.artObjects[index].webImage === null) {
                console.log("(no image found for this object)")
            } else {
                console.log(index);
                console.log(data["artObjects"][index]["webImage"]["url"]);
                var imgurl = data["artObjects"][index]["webImage"]["url"];
                    var img = document.createElement("img");
                    img.src = imgurl;
                    imgdiv.appendChild(img);
                }
            }
        }
    request.send();
};

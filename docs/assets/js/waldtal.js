var mapd = document.getElementById("map")
var background = document.getElementById("background")

var background = document.getElementById("background")
background.addEventListener('load', function(e){
    var mapd = document.getElementById("map")
    mapd.style.width = background.clientWidth
    mapd.style.height = background.clientHeight

    var ratio = background.clientHeight / background.clientWidth
});


var zoom = 100
var zoomItem = 0
var zoomList = [
    100,
    110,
    125,
    150,
    175,
    200
]
var map = document.getElementById("map")

function zoomIn() {
    if (zoomItem + 1 > zoomList.length - 1) return
    zoomItem++
    zoom = zoomList[zoomItem]
    var layers = $(map).find('img.layer');
    for (i = 0; i < layers.length; i++) {
        $(layers[i]).css('width', `${zoom}%`); 
       // $(layers[i]).css('height', `auto`);
    }
    document.getElementById("zoom").textContent = zoom + "%"
    ZoomFunc(zoom)
}

function zoomOut() {
    if (zoomItem - 1 < 0) return
    zoomItem--
    zoom = zoomList[zoomItem]
    var layers = $(map).find('img.layer');
    for (i = 0; i < layers.length; i++) {
        $(layers[i]).css('width', `${zoom}%`);
       // $(layers[i]).css('height', `auto`);
    }
    document.getElementById("zoom").textContent = zoom + "%"
    ZoomFunc(zoom)
}

/**
 * 
 * @param {string} id 
 */
function toggleVis(id) {
    var x = document.getElementById(id)
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}





//data

/*types

distance
drop
getetime
gatetrick
timetrick
toptobottom_trial
trial

*/

const mapData = [{
    "name": "Peak To Valley Run",
    "x": 26,
    "y": 37,
    "type": "gatetime",
    "bronze": 63.00,
    "silver": 56.00,
    "gold": 54.50,
    "dd": 53.50,
    "td": 0
}, {
    "name": "Selme Narrows",
    "x": 73,
    "y": 60,
    "type": "gatetime",
    "bronze": 45.00,
    "silver": 42.00,
    "gold": 40.50,
    "dd": 39.50,
    "td": 0
}, {
    "name": "Selme Valley Race",
    "x": 80,
    "y": 90,
    "type": "gatetime",
    "bronze": 63.00,
    "silver": 58.00,
    "gold": 55.00,
    "dd": 53.00,
    "td": 0
}, {
    "name": "Gemsgully Whites",
    "x": 48,
    "y": 475,
    "type": "gatetime",
    "bronze": 41.00,
    "silver": 36.00,
    "gold": 34.00,
    "dd": 32.20,
    "td": 0
}, {
    "name": "The Woodland Slalom",
    "x": 14,
    "y": 600,
    "type": "gatetime",
    "bronze": 29.00,
    "silver": 27.00,
    "gold": 26.00,
    "dd": 25.50,
    "td": 0
}, {
    "name": "The Woodland Track",
    "x": 19,
    "y": 620,
    "type": "gatetime",
    "bronze": 27.00,
    "silver": 25.00,
    "gold": 24.00,
    "dd": 22.20,
    "td": 0
}, {
    "name": "The Siriside Slalom",
    "x": 57,
    "y": 660,
    "type": "gatetime",
    "bronze": 17.00,
    "silver": 16.00,
    "gold": 15.00,
    "dd": 14.60,
    "td": 0
}, {
    "name": "Waldhorn Voyage",
    "x": 1,
    "y": 180,
    "type": "toptobottom_trial",
    "bronze": 80.00,
    "silver": 75.00,
    "gold": 70.00,
    "dd": 68.60,
    "td": 0
}, {
    "name": "The Fatal Drops",
    "x": 10,
    "y": 180,
    "type": "trial",
    "bronze": 60.00,
    "silver": 0,
    "gold": 0,
    "dd": 0,
    "td": 0
}, {
    "name": "The Waldhorn Falls",
    "x": 10,
    "y": 100,
    "type": "drop",
    "bronze": 65,
    "silver": 73,
    "gold": 78,
    "dd": 83,
    "td": 0
}, ]

//icon gen


var i = 0
mapData.forEach(element => {
    var icon = document.createElement("img")

    icon.src = `../assets/icons/challenge_${element.type}.png`

    icon.style.position = "absoulute"
    icon.style.left = `${element.x}%`
    icon.style.top = `${element.y}%`
    icon.style.width = "16px"
    icon.style.height = "16px"
    icon.className = "icon"
    icon.id = i

    icon.setAttribute("onclick", `getStats(${i})`)

    i++

    document.getElementById('map').appendChild(icon);

});

//icon dynamic zoom

/**
 * 
 * @param {number} zoomValue 
 */
function ZoomFunc(zoomValue) {
    var i = 0
    var icons = $(map).find('img.icon');
    mapData.forEach(element => {

        const left = element.x * (zoomValue / 100)
        const top = element.y * (zoomValue / 100)

        $(icons[i]).css('left', `${left}%`);
        $(icons[i]).css('top', `${top}%`);
        $(icons[i]).css('width', `${zoomValue / 5}px`);
        $(icons[i]).css('height', `${zoomValue / 5}px`);
        i++
    });

    mapd = document.getElementById("map")
    background = document.getElementById("background")

mapd.style.width = background.clientWidth
mapd.style.height = background.clientHeight
}

/**
 * 
 * @param {number} id 
 */
function getStats(id) {

    const element = mapData[id]

    //use the correct unit
    var unit

    if (element.type == "gatetime" || element.type == "trial" || element.type == "toptobottom_trial") { //timed trial

        unit = ""

    } else if (element.type == "timetrick" || element.type == "gatetrick") { //scored trial

        unit = "p"

    } else { //distance trial

        unit = "M"
    }



    document.getElementById("name").textContent = element.name
    document.getElementById("td").textContent = element.td.toPrecision(4) + unit
    document.getElementById("dd").textContent = element.dd.toPrecision(4) + unit
    document.getElementById("gold").textContent = element.gold.toPrecision(4) + unit
    document.getElementById("silver").textContent = element.silver.toPrecision(4) + unit
    document.getElementById("bronze").textContent = element.bronze.toPrecision(4) + unit

    //remove old lb data

    const lb = document.getElementById("lb")
    while (lb.firstChild) {
        lb.removeChild(lb.lastChild);
    }



    //add new lb data

    const publishedUrl = "https://docs.google.com/spreadsheets/d/e/1tWVgZUx-dvO_qPsreSqxM9FydgV4eoak9Q6G0QO8TMQ/pubhtml"

    var gss = new GoogleSpreadsheetsParser(publishedUrl, {
        sheetTitle: element.name
    });
    const data = gss.contents

    if (data == undefined) {
        toastr.error("Failed to load the leaderboards", "Error", {
            progressBar: false,
            timeOut: 10
        })
        return
    }


    var top10 = []
    for (var i = 1; i < 11; i++) { //skip the first row, as it is the header
        const obj = {
            name: data[i][1],
            score: data[i][2],
            date: data[i][3],
            os: data[i][4],
            link: data[i][5]
        }
        top10.push(obj)
    }


    //create new lb


    const parent = document.getElementById("lb")


    top10.forEach(element => {
        var en = document.createElement("tr")
        var x = en.insertCell()
        x.innerHTML = `${element.score}${unit}`
        x = en.insertCell()
        x.innerHTML = `${element.name}`
        parent.appendChild(en)
    });

    return top10
}


//preload data test

var load = 0;

function forceLoad() {
    for (i = 0; i < mapData.length - 1; i++) {
        getStats(i)
        console.log(i)

    }

}

function refresh() {
    localStorage.clear()
    forceLoad()
    document.getElementById("refresh").textContent = `Scores updated just now`
}
const ms = Date.now() - localStorage.getItem("lastUpdate")
console.log(ms)
var h = Math.floor(ms / 3600000)
var m = Math.floor((ms % 3600000) / 60000)
var s = Math.floor(((ms % 3600000) % 60000) / 1000)

if (m.toString().length == 1) {
    m = "0" + m.toString()
}

if (s.toString().length == 1) {
    s = "0" + s.toString()
}
document.getElementById("refresh").textContent = `Scores Updated ${h}:${m}:${s} ago`
 





//zoomIn()
//zoomOut()
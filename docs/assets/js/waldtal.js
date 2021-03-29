var zoom = 50
var zoomItem = 0
var zoomList = [
    100,
    110,
    125,
    150,
    175,
    200,
    300,
    500
]
var map = document.getElementById("map")

function zoomIn() {
    if (zoomItem + 1 > zoomList.length - 1) return
    zoomItem ++
    zoom = zoomList[zoomItem]
    var layers = $(map).find('img.layer');
    for(i = 0; i < layers.length; i++) {
      $(layers[i]).css('width', `${zoom}%`);
        //$(layers[i]).css('height', 'auto');
    }
    document.getElementById("zoom").textContent = zoom + "%"
    ZoomFunc(zoom)
}

function zoomOut() {
    if (zoomItem - 1 < 0) return
    zoomItem --
    zoom = zoomList[zoomItem]
    var layers = $(map).find('img.layer');
    for(i = 0; i < layers.length; i++){
        $(layers[i]).css('width', `${zoom}%`);
        //$(layers[i]).css('height', 'auto');
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
challenge_trial

*/

const mapData = [
    {
        "name": "Peak To Valley Run",
        "x": 26,
        "y": 37,
        "type": "gatetime",
        "sid": "0",
        "bronze": 63.00,
        "silver": 56.00,
        "gold": 54.50,
        "dd": 53.50,
        "td": 0
    },
    {
        "name": "Selme Narrows",
        "x": 73,
        "y": 60,
        "type": "gatetime",
        "sid": "0",
        "bronze": 45.00,
        "silver": 42.00,
        "gold": 40.50,
        "dd": 39.50,
        "td": 0
    },
    {
        "name": "Selme Valley Race",
        "x": 80,
        "y": 90,
        "type": "gatetime",
        "sid": "0",
        "bronze": 63.00,
        "silver": 58.00,
        "gold": 55.00,
        "dd": 53.00,
        "td": 0
    },
    {
        "name": "Gemsgully Whites",
        "x": 48,
        "y": 475,
        "type": "gatetime",
        "sid": "2",
        "bronze": 41.00,
        "silver": 36.00,
        "gold": 34.00,
        "dd": 32.20,
        "td": 0
    },
    {
        "name": "The Woodland Slalom",
        "x": 14,
        "y": 600,
        "type": "gatetime",
        "sid": "0",
        "bronze": 29.00,
        "silver": 27.00,
        "gold": 26.00,
        "dd": 25.50,
        "td": 0
    },
    {
        "name": "The Woodland Track",
        "x": 19,
        "y": 620,
        "type": "gatetime",
        "sid": "1",
        "bronze": 27.00,
        "silver": 25.00,
        "gold": 24.00,
        "dd": 22.20,
        "td": 0
    },
    {
        "name": "The Siriside Slalom",
        "x": 57,
        "y": 660,
        "type": "gatetime",
        "sid": "0",
        "bronze": 17.00,
        "silver": 16.00,
        "gold": 15.00,
        "dd": 14.60,
        "td": 0
    },
]


//icon gen


var i = 0
mapData.forEach(element => {
    var icon = document.createElement("img")
    
    icon.src = `../assets/icons/challenge_${element.type}.png`

    icon.style.position = "relative"
    icon.style.left = `${element.x}%`
    icon.style.top = `${element.y}px`
    icon.style.width = "16px"
    icon.style.height = "16px"
    icon.className = "icon"
    icon.id = i 

    icon.setAttribute("onclick", `getStats(${i})`)

    i ++

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
        const left = `${element.x * (zoomValue / 100)}`
        const top = `${element.y * (zoomValue / 100)}`

        $(icons[i]).css('left', `${left}%`);
        $(icons[i]).css('top', `${top}px`);
        $(icons[i]).css('width', `${zoomValue / 35}%`);
        $(icons[i]).css('height', `${zoomValue / 35}%`);
        i++
    });
}

/**
 * 
 * @param {number} id 
 */
function getStats(id) {

    const element = mapData[id]
    document.getElementById("name").textContent = element.name
    document.getElementById("td").textContent = element.td.toPrecision(4)
    document.getElementById("dd").textContent = element.dd.toPrecision(4)
    document.getElementById("gold").textContent = element.gold.toPrecision(4)
    document.getElementById("silver").textContent = element.silver.toPrecision(4)
    document.getElementById("bronze").textContent = element.bronze.toPrecision(4)

    //remove old lb data

    const lb = document.getElementById("lb")
    while (lb.firstChild) {
        lb.removeChild(lb.lastChild);
      }

    //add new lb data

    readData($('#lb'),element.sid)
}

//getting data from spreadsheet

var spData = null;
function doData(json) {
    spData = json.feed.entry;
}

function drawCell(tr, val) {
    var td = $("<td/>");
    tr.append(td);
    td.append(val);
    return td;
}
function drawRow(table, rowData) {
    if (rowData == null) return null;
    if (rowData.length == 0) return null;
    var tr = $("<tr/>");
    table.append(tr);
    for(var c=0; c<rowData.length; c++) {
        drawCell(tr, rowData[c]);
    }
    return tr;
}

function drawTable(parent) {
    var table = $("<table/>");
    parent.append(table);
    return table;
}

function readData(parent,start) {
    var data = spData;
    var table = drawTable(parent);
    var rowData = [];
    
    for(var r=start*20; r<start*20 + 20; r++) { //seperates each chunk to access easier
        var cell = data[r]["gs$cell"]; //gets the Rth cell
        var val = cell["$t"]; //Gets the value of the cell
        if (cell.col == 1) { //draws the last row if its the first cell in the row
            drawRow(table, rowData); 
            rowData = [];
        }
        rowData.push(val); //push the cell to the array 
    }
    drawRow(table, rowData);
}
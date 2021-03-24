var zoom = 50
var zoomItem = 2
var zoomList = [
    10,
    25,
    50,
    75,
    90,
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
    map.style.width = `${zoom}%`
    map.style.height = 'auto'
    document.getElementById("zoom").textContent = zoom + "%"
}

function zoomOut() {
    if (zoomItem - 1 < 0) return
    zoomItem --
    zoom = zoomList[zoomItem]
    map.style.width = `${zoom}%`
    map.style.height = 'auto'
    document.getElementById("zoom").textContent = zoom + "%"
}


function toggleVis(id) {
    var x = document.getElementById(id) 
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}



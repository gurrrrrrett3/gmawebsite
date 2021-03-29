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
    
    for(var r=start*20; r<start*20 + 20; r++) {
        var cell = data[r]["gs$cell"];
        var val = cell["$t"];
        if (cell.col == 1) {
            drawRow(table, rowData);
            rowData = [];
        }
        rowData.push(val);
    }
    drawRow(table, rowData);
}
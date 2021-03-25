var zoom = 50
var zoomItem = 5
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
    var layers = $(map).find('img');
    for(i = 0; i < layers.length; i++){
        $(layers[i]).css('width', `${zoom}%`);
        //$(layers[i]).css('height', 'auto');
    }
    document.getElementById("zoom").textContent = zoom + "%"
}

function zoomOut() {
    if (zoomItem - 1 < 0) return
    zoomItem --
    zoom = zoomList[zoomItem]
    var layers = $(map).find('img');
    console.log(layers);
    for(i = 0; i < layers.length; i++){
        $(layers[i]).css('width', `${zoom}%`);
        //$(layers[i]).css('height', 'auto');
    }
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


//Draggable
(function($) {
    $.dragScroll = function(options) {
      var settings = $.extend({
        scrollVertical: true,
        scrollHorizontal: true,
        cursor: null
      }, options);
  
      var clicked = false,
        clickY, clickX;
  
      var getCursor = function() {
        if (settings.cursor) return settings.cursor;
        if (settings.scrollVertical && settings.scrollHorizontal) return 'move';
        if (settings.scrollVertical) return 'row-resize';
        if (settings.scrollHorizontal) return 'col-resize';
      }
  
      var updateScrollPos = function(e, el) {
        $('html').css('cursor', getCursor());
        var $el = $(el);
        settings.scrollVertical && $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
        settings.scrollHorizontal && $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
      }
  
      $(document).on({
        'mousemove': function(e) {
          clicked && updateScrollPos(e, this);
        },
        'mousedown': function(e) {
          clicked = true;
          clickY = e.pageY;
          clickX = e.pageX;
        },
        'mouseup': function() {
          clicked = false;
          $('html').css('cursor', 'auto');
        }
      });
    }
  }(jQuery))
  
  $.dragScroll();
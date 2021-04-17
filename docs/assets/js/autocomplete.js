const trials = [
  "The First Turns ",
  "The Little Adventure ",
  "The Offpist Trail",
  "The Winding Road",
  "Over The Fence",
  "The Shortcut",
  "Jumping the Cracks",
  "Sightseeing Tour",
  "Hirschpeak Voyage ",
  "Hirschalm show off ",
  "The Woodland Slalom ",
  "The Woodland Track",
  "Gemsgully Whites",
  "Peak To Valley Run",
  "Selme Narrows",
  "The Siriside Slalom",
  "Selme Valley Race",
  "Over The Pist",
  "Woodland Deep Trail",
  "The Crowd Pleaser",
  "The Three Trees",
  "The Big Kicker",
  "Little Drops",
  "A Balancing Act ",
  "The Fatal Drops",
  "Waldhorn Voyage",
  "The Elements",
  "The Perfect Turns ",
  "The Path Finder",
  "Super G",
  "Ellnau Shoulder Track",
  "Clover Road Trail",
  "Ellnau River Rush",
  "Across The Clover Ridge",
  "The Pillow Pass",
  "Forest Excursion",
  "The Boulder Valley Pass",
  "Elnakka West",
  "The Dala Horse Trail",
  "Skogsloppet",
  "Malung Scooter Club",
  "Follow The Trails Of Wasa",
  "Zick Zack The Lift",
  "Follow The Tracks",
  "The Clearcut ",
  "Mora Barnyards",
  "Leksand Rail",
  "Thru Alvdalen",
  "Drifting The Frozen Lake ",
  "Dalarna Voyage",
  "The Village Run",
  "The Broken Trail",
  "The Green Glades",
  "The River Jumps",
  "The Ice Bowl ",
  "The Rollercoaster",
  "Skipping Icebergs",
  "Gross Air",
  "Sketchy Bears",
  "Slippery Slope",
  "Precision Drops",
  "Dropping In",
  "Staying Between The Stones",
  "The Ice Slope ",
  "Progressive Speed",
  "Tour De Moyen",
  "Pic Moyen",
  "Plus Choix",
  "Le Probleme",
  "Rapide",
  "Pointe de Serpentine",
  "Les Ruins",
  "Saut de pic",
  "The Traverse",
  "Pisten Bully Dangeroux",
  "Le Coq",
  "Route Extreme",
  "Full Luvette",
  "Loggers Groove",
  "Twisty Rosso",
  "The Wanderer",
  "La Bomba",
  "Shards",
  "Glacier skipping",
  "Peak avalanche escape",
  "Maniaco",
  "Tombola",
  "The Icy Slide",
  "Presto",
  "La Transitions ",
  "Il Creativo",
  "Skipping Ice Bergs",
  "Rockerfeller",
  "Drop della morte",
  "Elasto Mania Uno",
  "Elasto Mania Due",
  "Carosello Uno",
  "Carosello Due",
  "Carosello Tre",
  "Luppolo",
  "The Forever Run",
  "The Swindler",
  "Ailigs Turn",
  "Rocket Rails",
  "Rangers Ground",
  "Rangers Clais",
  "Flower Race",
  "The Feather Turns",
  "Straight Lining",
  "The Water Slide",
  "Clais Each",
  "The Doon Whiteout",
  "The Grasshopper",
  "The Switch",
  "Raiders Run",
  "Donn Meall Trials",
  "The Stripes",
  "The Fearless",
  "The Chase",
  "The Freedom Run",
  "Aileigs Adventure",
  "Grand Mountain Cup I",
  "Grand Mountain Cup II",
  "Grand Mountain Cup III",
  "Beaver Creek Dance",
  "Peregrine Falcon",
  "Fairview Cloud Line",
  "The Silver Dragon",
  "The Buried Path",
  "The Woodpecker Trail",
  "Shadows Trail",
  "Spinel Crest Race",
  "Serenade Summit Race",
  "City Woods",
  "Pinecone Passage",
  "Velocity",
  "Treasure The Shortcuts",
  "Weary Mood",
  "Rough Patches",
  "The Labyrinth",
  "Hazy Maze",
  "Googly Eyes",
  "The Execution",
  "Offpist Mayhem",
  "Coffee Kick",
  "Side Piste",
  "Ridge Run",
  "Level 1",
  "Level 2",
  "Level 3",
  "Popsicle Slide",
  "Popsicle Challenge",
  "The Little Skipper",
  "Tic Tac Toe",
  "Make Haste",
  "Pinecone Force",
  "The Glacier Kicker",
  "Glacier Park",
  "Waldhorn Slopestyle",
  "Rigid Jumps",
  "The Waldhorn Falls",
  "The Fork",
  "Bear Cub Run",
  "Overshooting",
  "The Yards",
  "The Pist Bully",
  "The Boulder Hill Descent",
  "XL Park World",
  "The Road Gaps",
  "Boulder Hill Escape",
  "Fulu Air",
  "Ski Jumping",
  "Orsa Animal Park",
  "Corner Flight",
  "Rotkamm Jumper",
  "Rotkamm Style I",
  "The Descender",
  "Pilgrim Run",
  "Sending It",
  "Freeride Heaven",
  "Baton Rouge",
  "Aire Maximus",
  "Le Cygne",
  "Roi de la Ville",
  "Quel vol",
  "Le Crazy Jump",
  "Trix De Ville",
  "Saut Bizarre",
  "Les Troix Drops",
  "Un Chapeau Courageux",
  "Le Pipe",
  "Caso Della Stella",
  "Ruby Con Aria",
  "Red Lumber Flow",
  "Scoiattolo",
  "Down",
  "Dropping",
  "Il Stupido",
  "Red forest jumps",
  "Offpiste Paradise",
  "Gems Ride",
  "The Overshooter",
  "Hogback Attack",
  "Sweeping Drops",
  "The Meall Exit",
  "The Delucia Transfers",
  "Boyne trickster",
  "Meall Lines",
  "Flutters",
  "The Timber Road Gap",
  "Shoot Out",
  "The Three Diamonds",
  "Ollies Invite Only",
  "The Sidehit Road",
  "Best Eagle Cookie Park",
  "The Woodland Jam",
  "Booster Berries",
  "Desolate Drops",
  "Pinecone Dropper",
  "Send It Dropping",
  "Flight Of The Labyrinth",
  "Cone Drops",
  "Gap Of Ages",
  "One Trick Pony",
  "Rail Jam",
  "Pinecone Jibber",
  "Send It Tricky",
  "Multiple Park",
  "Desolate Hills Natural",
  "Pine Trickster",
  "Find Your Way"

]

autocomplete(document.getElementById("myInput"), trials)

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
var GoogleSpreadsheetsParser, GoogleSpreadsheetsUtil;

GoogleSpreadsheetsUtil = (function() {
    function GoogleSpreadsheetsUtil() {}

    GoogleSpreadsheetsUtil.prototype.extractKey = function(publishedUrl) {
        var matched;
        matched = publishedUrl.match(/https:\/\/docs.google.com\/spreadsheets\/d\/e\/(.+)\/pubhtml/);
        if (matched === null || matched.length !== 2) {
            return null;
        }
        return matched[1];
    };

    GoogleSpreadsheetsUtil.prototype.getWorksheetId = function(key, sheetTitle) {
        var basicInfo, e, i, matched, ref, url, xhr;
        url = "https://spreadsheets.google.com/feeds/worksheets/" + key + "/public/basic?alt=json";
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        matched = [];
        if (xhr.status === 200) {
            basicInfo = JSON.parse(xhr.responseText);
            if (sheetTitle) {
                ref = basicInfo.feed.entry;
                for (i in ref) {
                    e = ref[i];
                    if (e.title.$t === sheetTitle) {
                        matched = e.id.$t.match(/https:\/\/spreadsheets.google.com\/feeds\/worksheets\/.+\/public\/basic\/(.+)/);
                        break;
                    }
                }
            } else {
                matched = basicInfo.feed.entry[0].id.$t.match(/https:\/\/spreadsheets.google.com\/feeds\/worksheets\/.+\/public\/basic\/(.+)/);
            }
        }
        if (matched === null || matched.length !== 2) {
            return null;
        }
        return matched[1];
    };

    GoogleSpreadsheetsUtil.prototype.getFeeds = function(key, workSheetId) {
        var feeds, url, xhr;
        url = "https://spreadsheets.google.com/feeds/cells/" + key + "/" + workSheetId + "/public/values?alt=json";
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        feeds = null;
        if (xhr.status === 200) {
            feeds = JSON.parse(xhr.responseText);
        }
        return feeds;
    };

    GoogleSpreadsheetsUtil.prototype.makeTitle = function(feedEntry) {
        var cell, j, len, obj, titles;
        titles = [];
        for (j = 0, len = feedEntry.length; j < len; j++) {
            obj = feedEntry[j];
            cell = obj.gs$cell;
            if (cell === null) {
                return titles;
            }
            if (Number(cell.row) === 2) {
                titles.push(cell.$t);
            } else {
                return titles;
            }
        }
        return titles;
    };

    GoogleSpreadsheetsUtil.prototype.makeContents = function(feedEntry) {
        var cell, columnCount, contents, j, len, obj, row, rowNumber;
        contents = [];
        if (!(feedEntry.length >= 1 && feedEntry[0].gs$cell)) {
            return contents;
        }
        columnCount = 6 //hardcoded instead of this: Number(feedEntry[feedEntry.length - 1].gs$cell.col);
        rowNumber = 0;
        for (j = 0, len = feedEntry.length; j < len; j++) {
            obj = feedEntry[j];
            cell = obj.gs$cell;
            if (Number(cell.row) !== 1) {
                if (cell.row !== rowNumber) {
                    rowNumber = cell.row;
                    row = [];
                }
                row.push(cell.$t);
                if (Number(cell.col) === columnCount) {
                    contents.push(row);
                    row = [];
                }
            }
        }
        return contents;
    };

    return GoogleSpreadsheetsUtil;

})();

GoogleSpreadsheetsParser = (function() { //Rewriting this to use Cache
    function GoogleSpreadsheetsParser(publishedUrl, option) {
        var _util, feedEntry, feeds, hasTitle, key, mtd, sheetTitle;
        sheetTitle = option.sheetTitle || null;
        hasTitle = option.hasTitle || true;
        _util = new GoogleSpreadsheetsUtil();

        //Check if the key is in storage

        if (localStorage.getItem('key') == undefined) {
            key = _util.extractKey(publishedUrl);
            localStorage.setItem('key', key)
        } else {
            key = localStorage.getItem('key')
        }

        //Check if the trial data is in storage

        if (localStorage.getItem(sheetTitle) == undefined) {
            mtd = _util.getWorksheetId(key, sheetTitle);
            localStorage.setItem(sheetTitle, mtd)
        } else {
            mtd = localStorage.getItem(sheetTitle)
        }

        if (localStorage.getItem(mtd) == undefined) {
            feeds = _util.getFeeds(key, mtd);
            localStorage.setItem(mtd, JSON.stringify(feeds))

            //store the time value to be checked later, to provide time since update

            localStorage.setItem("lastUpdate", Date.now())

        } else {
            feeds = JSON.parse(localStorage.getItem(mtd))
        }
        feedEntry = feeds.feed.entry;
        if (hasTitle) {
            this.titles = _util.makeTitle(feedEntry);
        }
        this.contents = _util.makeContents(feedEntry);
    }

    return GoogleSpreadsheetsParser;

})();
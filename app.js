/*
    Date: 2015-12-22
*/
var app = {
    self   : {},
    sqlite : {},

    // Is API available?
    test : function () {
        console.log("app.test");
        $('#storeavailable').html(app.storageAvailable('SQLite'));
    },
    // create/open database
    test2 : function () {
        console.log("app.test2");
        app.sqlite = new SQLite('example');
        app.sqlite.open(function(err) {
            if (err) { alert("open sqlite failed:" + err); };
            // ... 
        });
    },
    // Delete database
    test3 : function () {
    },
    // create table
    test4 : function () {
        console.log("app.test4");
    },
    // create data
    test5 : function () {
        console.log("app.test5");
    },
    // read data
    test6 : function () {
        console.log("app.test6");
    },

    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    storageAvailable: function (type) {
        return (type in window) ?  true : false;
    }

};
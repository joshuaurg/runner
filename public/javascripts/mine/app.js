// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

var serverIp = "http://localhost:8080/proz/";

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

var serverIp = "http://123.56.8.162:8080/proz";
// var serverIp = "http://localhost:8080/proz";

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
});
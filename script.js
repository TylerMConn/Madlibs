//Tyler Maguire

$(document).ready(function() {

    var nounArr = ["your mom", "bird", "sandbox"];
    var nameArr = ["Bill Gates", "Warren Buffet", "Tyler Maguire", "Jeff Bezos", "Elon Musk"];
    var verbArr = ["questioned", "inquired", "bombarded", "responded", "reluctantly admitted"];
    var adjArr = ["slow", "inefficient", "reliable", "costly", "universal"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        $(".name").each(function() {
            var randomIndex = Math.floor(Math.random() * nameArr.length);
            $(this).text(nameArr[randomIndex]);
        });
        $(".verb").each(function() {
            var randomIndex = Math.floor(Math.random() * verbArr.length);
            $(this).text(verbArr[randomIndex]);
        });
        $(".adjective").each(function() {
            var randomIndex = Math.floor(Math.random() * adjArr.length);
            $(this).text(adjArr[randomIndex]);
        });
    });
});
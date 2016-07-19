function changeColor() {
    var tweet = "";

    var i = Math.floor(Math.random() * 7);
    var color;

    switch (i) {
        case 0:
            color = "#27ae60";
            break;
        case 1:
            color = "#f1c40f";
            break;
        case 2:
            color = "#1abc9c";
            break;
        case 3:
            color = "#9b59b6";
            break;
        case 4:
            color = "#2980b9";
            break;
        case 5:
            color = "#34495e";
            break;
        case 6:
            color = "#d35400";
            break;
    }
    document.getElementsByTagName("body")[0].style.background = color;
    document.getElementsByClassName("words")[0].style.color = color;
    document.getElementsByClassName("author")[0].style.color = color;
    document.getElementsByClassName("send")[0].style.background = color;
    document.getElementsByTagName("i")[0].style.color = color;
    document.getElementsByTagName("i")[1].style.color = color;

    var j = Math.floor(Math.random() * 4);
    switch (j) {
        case 0:
            document.getElementsByClassName("words")[0].innerHTML = "Winning isn't everything, but wanting to win is.";
            document.getElementsByClassName("author")[0].innerHTML = "Vince Lombardi";
            break;
        case 1:
            document.getElementsByClassName("words")[0].innerHTML = "Strive not to be a success, but rather to be of value.";
            document.getElementsByClassName("author")[0].innerHTML = "Albert Einstein";
            break;
        case 2:
            document.getElementsByClassName("words")[0].innerHTML = "Every strike brings me closer to the next home run.";
            document.getElementsByClassName("author")[0].innerHTML = "Babe Ruth";
            break;
        case 3:
            document.getElementsByClassName("words")[0].innerHTML = "Your time is limited, so don't waste it living someone else's life.";
            document.getElementsByClassName("author")[0].innerHTML = "Steve Jobs";
            break;
    }

    tweet = 'https://twitter.com/intent/tweet?text=' +  '"' + document.getElementsByClassName("words")[0].innerHTML + '" ' + document.getElementsByClassName("author")[0].innerHTML;
    console.log(tweet);
    document.getElementsByTagName("a")[1].href = tweet;
}

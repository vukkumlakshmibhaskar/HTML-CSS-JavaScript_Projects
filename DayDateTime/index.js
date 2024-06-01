function continuousTime() {
    var data = new Date();
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    document.getElementById('date').innerHTML = "Date: " + data.getDate();
    document.getElementById('day').innerHTML = "Day: " + week[data.getDay()];
    document.getElementById('month').innerHTML = "Month: " + months[data.getMonth()];
    document.getElementById('year').innerHTML = "Year: " + data.getFullYear();
    document.getElementById('tm').innerHTML = "Time: " + data.toLocaleTimeString();

    setTimeout(continuousTime, 1000);
}

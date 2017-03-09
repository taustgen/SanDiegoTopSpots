$(document).ready(function() {
    $.getJSON("topspots.json", function(data) {
        $.each(data, function(i, spot) {
            $("#tab").append("<tr><td>" +
                spot.name + "</td><td>" +
                spot.description + '</td><td><a href="https://www.google.com/maps?q=' +
                spot.location + '">Open in Google Maps</a></td></tr>')



        });
    });
});

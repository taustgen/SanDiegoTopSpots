/*$.getJSON(github.com/OriginCodeAcademy/Cohort10/blob/master/Projects/04-SanDiegoTopSpots/topspots.json, function(data{
  $.each(data, function(name, description, location){
    $("#table").append("<tr><td>"+name+"</td><td>"+description+'</td><td><a href="www.google.com/maps?q='+location[0]+","+location[1]+'">Open in Google Maps</a></td></tr>')



  })
});
*/
$(document).ready(function(){
  $.getJSON("topspots.json", function(data){
  //  for(var i=0; i<10; i++){
      //var name = data[i][0];
      //var desc = data[i][1];
      //var loc = data[i][2];
      //$("#tab").append("<tr><td>"+name+"</td><td>"+desc+'</td><td><a href="www.google.com/maps?q='+location[0]+","+loc[1]+'">Open in Google Maps</a></td></tr>');
    //  $("#tab").append("<tr><td>name</td><td>desc</td><td>Open in Google Maps</td></tr>");
    $.each(data, function(i, spot){
      $("#tab").append("<tr><td>"+
          spot.name+"</td><td>"+
          spot.description+'</td><td><a href="https://www.google.com/maps?q='+
          spot.location+'">Open in Google Maps</a></td></tr>')



    });
  });
});

$( document ).ready(function() {
  let map;
  let  $latitud = $( "#lat" );
  let  $longitud = $( "#lng" );
  let  $zoom = $( "#zoom" );
  let  $submit = $( "#busca" );
  $submit.click(function(){
    console.log("click");
    if($latitud.val() != "" && $longitud.val() != "" && $zoom.val() != ""){
      console.log("bien");
      initMap2(parseFloat($latitud.val()),parseFloat($longitud.val()),parseFloat($zoom.val()));
    }else{
      console.log("mal");
    }
  });
});
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
function initMap2(latitud,longitud,zommm) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitud, lng: longitud },
    zoom: zommm,
  });
}


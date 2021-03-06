   // first we create a new map object and target a div to attach it to, as well as setting it's default view location (London in this case)
   const map = L.map('mapid').setView([51.505, -0.09], 13);
   // this variable will hold the route that is generated by the leaflet routing plugin
   let route;
   // this array will hold the coordinates that we want to generate a route between
   let selectedCords=[];

   let depatureLatCords
   let depatureLngCords
   let arrivalLatCords
   let arrivalLngCords

   
    
   let minDis;


function  mapHandler(){

    L.Routing.control({
        waypoints: [
        L.latLng(depatureLatCords,depatureLngCords),
          L.latLng(arrivalLatCords,arrivalLngCords)
          
        ]
      }).addTo(map);

      let departure = L.latLng(depatureLatCords,depatureLngCords)

        let arrival = L.latLng( arrivalLatCords,arrivalLngCords )
    
       shortDis = map.distance(departure,arrival)
       minDis = (shortDis/1000).toFixed(2)
      console.log(minDis)



    }
    




 
   // create a tile layer using tiles from opensstreetmaps.org, and add it to the map we created
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);
   // add a click listener to the map so that when clicked the handler function is executed
  

  
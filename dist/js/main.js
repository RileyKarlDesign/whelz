// console.log('bean')

// $('p').html('hello')

function init() {

    toggleContinueButton()
    hidePages()
    displayDepature()
    displayArrival()
}



const citys = [


    {

        name: "Auckland",
        lat: -36.8508,
        lng: 174.7645

    },
    {

        name: "Wellington",
        lat: -41.2889,
        lng: 174.7772

    },

    {

        name: "Christchurch",
        lat: -43.5309,
        lng: 172.6365

    },
    {

        name: "Manukau City",
        lat: -36.9833,
        lng: 174.8833

    },
    {

        name: "Waitakere",
        lat: -36.8490,
        lng: 174.5430,
    },
    {

        name: "Northcote",
        lat: -36.7913,
        lng: 174.7758,

    },
    {

        name: "Hamilton",
        lat: -37.7833,
        lng: 175.2833,

    },
    {

        name: "Auckland",
        lat: -36.8508,
        lng: 174.7645

    },
    {

        name: "Wellington",
        lat: -41.2889,
        lng: 174.7772

    },

    {

        name: "Christchurch",
        lat: -43.5309,
        lng: 172.6365

    },
    {

        name: "Manukau City",
        lat: -36.9833,
        lng: 174.8833

    },
    {

        name: "Waitakere",
        lat: -36.8490,
        lng: 174.5430,
    },
    {

        name: "Northcote",
        lat: -36.7913,
        lng: 174.7758,

    },
    {

        name: "Hamilton",
        lat: -37.7833,
        lng: 175.2833,

    },

]



let vehicles = [


    {
        type: "Car",
        name: "ford Festa",
        year: "2016",
        odo: "60,000",
        insurance: 150,
        seats: "5",
        fuleUsage: "low",
        location: 'Auckland',
        dayRate: 60,
        

        id: 1
        
    },
    {
        type: "Motor Bike",
        name: "Kawasaki Ninja",
        year: "2015",
        odo: "25,000",
        insurance: 150,
        seats: "2",
        fuleUsage: "low",
        location: 'Auckland',
        dayRate: 50,
        
        id: 2

    },
    {
        type: "Van",
        name: "Nissan Cube",
        year: "2018",
        odo: "35,000",
        insurance: 150,
        seats: "5",
        fuleUsage: "mid",
        location: 'Wellington',
        dayRate: 70,
        
        id: 3

    },

    {
        type: "Car",
        name: "ford Festa",
        year: "2016",
        odo: "60,000",
        insurance: 150,
        seats: "5",
        fuleUsage: "low",
        location: 'Auckland',
        dayRate: 60,
        

        id: 4
        
    },
    {
        type: "Motor Bike",
        name: "Kawasaki Ninja",
        year: "2015",
        odo: "25,000",
        insurance: 150,
        seats: "2",
        fuleUsage: "low",
        location: 'Auckland',
        dayRate: 50,
        
        id: 5

    },
    {
        type: "Van",
        name: "Nissan Cube",
        year: "2015",
        odo: "25,000",
        insurance: 150,
        seats: "25",
        fuleUsage: "low",
        location: 'Auckland',
        dayRate: 70,
        
        id: 6

    },

]



const maxPassengers = 5;

// running total paird withj a funtion that prints it to the dom every time somthing is added
const runningTotal =


    {
        name: "",
        departure: "",
        desitnation: "",
        dates: "",
        passengerCount: ""
    }








// 1st page
// on click away from first input it should run regex and botton to appear, clicking botton will open next page 





$('#user-name-input').blur(function () {

    const elName = $('#user-name-input').val();

    let nameRegex = /^[a-z ,.'-]+$/

    if (!nameRegex.test(elName)) {

        console.log('there is an error')
        this.style.backgroundColor = "red";

    } else {

        console.log('correct')
        this.style.backgroundColor = "green";
        runningTotal.name = elName

        toggleContinueButton();

    }
})


$('.welcome-pg-btn').click(function () {

    $('.welcome-page').hide()
    $('.departure-location').show()
    $('.running-info-update').show()

    plublishRunningInfo(`<div class = 'running user-Name'> <div> Name</div> <div> ${runningTotal.name} </div> </div>`);

});





//2nd page
// upon click of departure city , save that value , post to live recept update and open next page
let eldeparture

function displayDepature() {

    

    let html = ""
    for (let i = 0; i < citys.length; i++) {

        // $('departure-list').append( ` <li id="#depature-location">${citys[i].name}</li>`)
        html += ` <li class="depature-link" data-lat="${citys[i].lat}" data-lng="${citys[i].lng}">${citys[i].name}</li>`;

    }

    
    
    $('.deapture-list').append(html)




    $('.depature-link').click(function () {
        console.log('click')

        eldeparture = this.innerText;

        


        console.log(eldeparture);
        runningTotal.departure = eldeparture


        plublishRunningInfo(`<div class = 'running user-journey'> <div> ${runningTotal.departure} </div> <div> --> </div> <div></div> </div>`);
        $('.departure-location').hide()
        $('.arrival-location').show()

        depatureLatCords =  $(this).data('lat');
        depatureLngCords =    $(this).data('lng');

        
        
    })

    $('.departure-bk-btn').click(function(){
        
        $('.departure-location').hide()
        $('.running-info-update').hide()
        $('.welcome-page').show()
        $('.user-Name').remove()
        $('#user-name-input').val('')
        toggleContinueButton();

        eldeparture = ""
        


    })
}



//3rd page
// upon click of departure city , save that value , post to live recept update and open next page

let elarrival ="";

function displayArrival() {

    let html = ""
    for (let i = 0; i < citys.length; i++) {

        // $('departure-list').append( ` <li id="#depature-location">${citys[i].name}</li>`)
        html += ` <li class="arrival-link" data-lat="${citys[i].lat}" data-lng="${citys[i].lng}">${citys[i].name}</li>`;

    }

    $('.arrival-list').append(html)
    addArrivalClicks()
}

function addArrivalClicks() {

    $('.arrival-link').click(function () {

        console.log('click')

        elarrival = this.innerText;
        console.log(elarrival);
        runningTotal.desitnation = elarrival

        arrivalLatCords =  $(this).data('lat');
        arrivalLngCords =    $(this).data('lng');
         mapHandler()

        $('.user-journey').html(` <div> ${runningTotal.departure} </div>   <div> --> </div>   <div> ${runningTotal.desitnation}</div> `);
        plublishRunningInfo(`<div class ='running journey-min-dist'> <div> Min Distance </div> <div>${minDis} km</div></div>`);

        

       
        
        $('.arrival-location').hide()
        $('.trip-duration').show()

       


    })

}

    $('.arrival-bk-btn').click(function(){
            
        $('.departure-location').show()
        $('.arrival-location').hide()
        $('.user-journey').hide()
        

        elarrival = ""
    })

//4th page

let tripDurationDays = 0;

$("#date-input").flatpickr(

    {
        mode: "range",
        minDate: "today",
        dateFormat: 'n/j/Y',
        onClose: function(selectedDates, dateStr, instance) {
          let daysInRange = document.getElementsByClassName('inRange');
          tripDurationDays = daysInRange.length + 1;
          console.log(`total days = ${tripDurationDays}`);
        }
    }
);

let date = ""

$('#date-input').blur(function () {


    date = $('#date-input').val();



    if (!date) {

        console.log('there is an error')
        this.style.backgroundColor = "red";

    } else {

        console.log('correct')
        this.style.backgroundColor = "green";
        runningTotal.dates = date

        toggleContinueButton();

    }
})


$('.dates-pg-btn').click(function () {

    $('.trip-duration').hide()
    $('.passenger-count').show()

    plublishRunningInfo(`<div class = ' running travel-dates'> <div>Dates</div>  <div/>${runningTotal.dates}<div> <div>`);
    
    for( vehicle of vehicles){

        if ( vehicle.fuleUsage === 'low'){
            console.log( 'low fule usage')
    
            vehicle.carFuleCost = (0.18*minDis);
            
    
        } else if ( vehicle.fuleUsage === 'med') {
            
            vehicle.carFuleCost = (0.24*minDis);
            
        } else if ( vehicle.fuleUsage === 'high') {
            
            vehicle.carFuleCost = (0.29*minDis);
            
        } 


    }
   

});

$('.duration-bk-btn').click(function(){
            
    $('.arrival-location').show()
    $('.trip-duration').hide()
    $('.travel-dates').remove()
    $('.journey-min-dist').remove()
    $('.user-journey').remove()
    plublishRunningInfo(`<div class = 'running user-journey'> <div> ${runningTotal.departure} </div> <div> --> </div> <div></div> </div>`);
    

    elarrival = ""
})


// 5th page;

for (let i = 0; i < maxPassengers; i++) {
    // console.log(number)
    number = i + 1
    //     console.log(number)
    $('.passenger-count-list').append(`<li class = 'passenger-number'> ${number} <li>`)


}

addPassengerClicks()

function addPassengerClicks() {

    $('.passenger-number').click(function () {

        console.log('click')

        let elPassengerCountNumber = this.innerText;
        console.log(elPassengerCountNumber);
        runningTotal.passengerCount = elPassengerCountNumber;


        plublishRunningInfo(`<div class ='running passenger-count-total'> <div> Total passengers </div> <div> ${runningTotal.passengerCount} </div></div>`);


        $('.passenger-count').hide()
        $('.running-info-update').hide()

        $('.review-pg').show()

       

   



    })

    $('.passenger-count-bk-btn').click(function(){
            
        

        $('.passenger-count').hide()
        $('.trip-duration').show()
        $('.passenger-count-total').remove()
        $('.travel-dates').remove()
        
        
      
       
    })

}

//6th page


$('.review-pg-btn').click(function () {

    displayFilterdVehicles()
    $('.review-pg').hide()

    $('.avalible-vehicles').show()

    
})

$('.review-bk-btn').click(function(){
            
    

    $('.review-pg').hide()
    $('.passenger-count').show()
    $('.running-info-update').show()
    $('.passenger-count-total').hide()
    
    
    
})




//==================================================================================================








//7th page

function displayFilterdVehicles() {

    //    const avalibleVehicles = vehicles.filter(runningTotal.passengerCount === vehicles.name && runningTotal.departure <= vehicles.location)

    //    console.log(avalibleVehicles)
    let html = ""
    let totalNum = 0;


    for (vehicle of vehicles) {
        



        if (vehicle.seats >= runningTotal.passengerCount && vehicle.location === runningTotal.departure) {

            console.log(vehicle)
            totalNum += 1

            html += (`<div class="vehicle-icon" data-id='${vehicle.id}'> <img src="${vehicle.img}" alt=""> <div> ${vehicle.name} </div> <div>  ${vehicle.dayRate} Per day</div>   </div>`)



        }
    

        if (totalNum === 0) {
            console.log('no vehicals avalible')
            $('.avalible-vehicles-icons').html(' No vehicals avalible')

        } else {

            $('.avalible-vehicles-icons').html(html);

            $('.vehicle-icon').click(function () {
                
                

                
                const id = parseInt($(this).data('id'));

              
                selectedVehicle =  vehicles.find(function (vehicle) {
                   
                    if (vehicle.id === id) {
                        
                        
                        

                        
                        return true;
                    }

                   



                });

                console.log(selectedVehicle)
                populateOrderPage(selectedVehicle)

                

                    
                    
                
                
               

                

                $('.avalible-vehicles').hide()
                $('.order-page').show()
                
                
            });
        }

    

    }




}


$('.avalible-vehicle-bk-btn').click(function(){
            
    

    $('.avalible-vehicles').hide()
    $('.review-pg').show()
    
    
    
    
})





//8th page





function populateOrderPage(selectedVehicle){

    
    addTotal()

    $('.vehical-name').html(selectedVehicle.name)
   // $('.vehical-img').html(selectedVehicle.img)// do when you have images 
    $('.this-car-year').html(selectedVehicle.year)

    $('.this-car-odometer').html(selectedVehicle.odo)
    $('.this-car-seats').html(selectedVehicle.seats)



    $('.this-car-insurance').html(`$${selectedVehicle.insurance}`)
    $('.this-car-fule').html( `$${selectedVehicle.carFuleCost} `)/// do when you have fule cost 
    $('.this-car-day-rate').html(`${tripDurationDays} x $${selectedVehicle.dayRate}`)
    $('.this-car-total').html(`$${shortTotal}`)


    
     

}

let total= 0;
let shortTotal = 0 ;

function addTotal(){

    total = selectedVehicle.insurance + selectedVehicle.carFuleCost + (tripDurationDays*selectedVehicle.dayRate);
    shortTotal = total.toFixed(2);
}


$('.order-bk-btn').click(function(){
            
    

    $('.order-page').hide()
    $('.avalible-vehicles').show()
    
    
    
    
})

//9th page



$('.order-pg-btn').click(function(){
    $('.order-page').hide()
    $('.confirm-order-page').show()
    
})




// fule







function plublishRunningInfo(input) {

    $(".live-update").append(input)

}




function toggleContinueButton() {

    $("#continue-btn").toggle();
}

function hidePages() {

    $('.departure-location').hide()
    $('.arrival-location').hide()
    $('.trip-duration').hide()
    $('.passenger-count').hide()
    $('.review-pg').hide()
    $('.avalible-vehicles').hide()
    $('.order-page').hide()
    $('.confirm-order-page').hide()
    $('.running-info-update').hide()
    

}

init()
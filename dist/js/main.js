// console.log('bean')

// $('p').html('hello')

function init(){

    toggleContinueButton()
    hidePages()
}

const vehicles = [

    
        {
            type : "car",
            name:"ford Festa",
            seats: "5",
            fuleUsage: "low",
        },
        {
            type : "Motor Bike",
            name:"Kawasaki Ninja",
            seats: "2",
            fuleUsage: "low",
        },
    
]

// running total paird withj a funtion that prints it to the dom every time somthing is added
const runningTotal = [

    
{
    name: "",
    departure: "",
    desitnation: "",
    dates: "",
    passengerCount: ""

}

]






// 1st page
// on click away from first input it should run regex and botton to appear, clicking botton will open next page 





$('#user-name-input').blur(function(){

    const elName = $('#user-name-input').val();

    let nameRegex = /^[a-z ,.'-]+$/
    
    if (!nameRegex.test(elName)){
        
        console.log('there is an error')
        this.style.backgroundColor = "red"; 

    }else{

        console.log('correct')
        this.style.backgroundColor = "green"; 
        runningTotal[0].name= elName

        toggleContinueButton();
        
    }
})
    

$('.welcome-pg-btn').click(function(){

    $('.welcome-page').hide()
    $('.departure-location').show()

    plublishRunningInfo(`<div class = 'user-Name'> name ${runningTotal[0].name} <div>`);

});





//2nd page
// upon click of departure city , save that value , post to live recept update and open next page


$('#depature-location').click(function (){
    
    let eldeparture = this.innerText;
    console.log(eldeparture);
    runningTotal[0].departure= eldeparture
    plublishRunningInfo(`<div class = 'user-Departue'> Departure ${runningTotal[0].departure} <div>`);
    $('.departure-location').hide()
    $('.arrival-location').show()
})


//3rd page
// upon click of departure city , save that value , post to live recept update and open next page


$('#arrival-location').click(function (){
    
    let elarrival = this.innerText;
    console.log(elarrival);
    runningTotal[0].departure = elarrival
    plublishRunningInfo(`<div class = 'user-Departue'> Arrival ${runningTotal[0].arrival} <div>`);
   
    $('.arrival-location').hide()
})



//==============================================================================

function plublishRunningInfo(input){

    $(".live-update").append(input)

}

 


function toggleContinueButton(){

    $( "#continue-btn" ).toggle();
}

function hidePages(){

    $('.departure-location').hide()
    $('.arrival-location').hide()
    $('.trip-duration').hide()
    $('.passenger-count').hide()
    $('.review').hide()
    $('.avalible-vehicles').hide()
    $('.Order-page').hide()
    
}

init()
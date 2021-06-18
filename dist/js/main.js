// console.log('bean')

// $('p').html('hello')

function init(){

    toggleContinueButton()
    hidePages()
    displayDepature()
    displayArrival()
}

const citys = [

    
        {
            
            name:"Aluckland",
            lat : "36.8500",
            lng : "174.7833",
            
        },
        {
            
            name:"Wellington",
            lat : "-41.2889",
            lng : "174.7772",
            
        },

        {
            
            name:"Christchurch",
            lat : "-43.5309",
            lng : "172.6365",
            
        },
        {
            
            name:"Manukau City",
            lat : "36.9833",
            lng : "174.8833",
            
        },
        {
            
            name:"Waitakere",
            lat : "36.8490",
            lng : "174.5430",
        },
        {
            
            name:"Northcote",
            lat : "36.7913",
            lng : "174.7758",
            
        },
        {
            
            name:"Hamilton",
            lat : "37.7833",
            lng : "175.2833",
            
        }

       
]



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





$('#user-name-input').blur(function(){

    const elName = $('#user-name-input').val();

    let nameRegex = /^[a-z ,.'-]+$/
    
    if (!nameRegex.test(elName)){
        
        console.log('there is an error')
        this.style.backgroundColor = "red"; 

    }else{

        console.log('correct')
        this.style.backgroundColor = "green"; 
        runningTotal.name= elName

        toggleContinueButton();
        
    }
})
    

$('.welcome-pg-btn').click(function(){

    $('.welcome-page').hide()
    $('.departure-location').show()

    plublishRunningInfo(`<div class = 'user-Name'> Name ${runningTotal.name} <div>`);

});





//2nd page
// upon click of departure city , save that value , post to live recept update and open next page

function displayDepature(){

    let html = ""
    for( let i = 0; i < citys.length; i++){
        
      // $('departure-list').append( ` <li id="#depature-location">${citys[i].name}</li>`)
      html += ` <li class="depature-link">${citys[i].name}</li>`;
    
    }

    $('.deapture-list').append(html)

    

    
    $('.depature-link').click(function(){
        console.log('click')
    
        let eldeparture = this.innerText;
        console.log(eldeparture);
        runningTotal.departure= eldeparture
    
    
        plublishRunningInfo(`<div class = 'user-journey'> ${runningTotal.departure} --> <div>`);
        $('.departure-location').hide()
        $('.arrival-location').show()
    })
}



//3rd page
// upon click of departure city , save that value , post to live recept update and open next page

function displayArrival(){

    let html = ""
    for( let i = 0; i < citys.length; i++){
        
      // $('departure-list').append( ` <li id="#depature-location">${citys[i].name}</li>`)
      html += ` <li class="arrival-link">${citys[i].name}</li>`;
    
    }

    $('.arrival-list').append(html)
    addArrivalClicks()
}

function addArrivalClicks(){

    $('.arrival-link').click(function(){

        console.log('click')
    
        let elarrival = this.innerText;
        console.log(elarrival);
        runningTotal.desitnation = elarrival
       
        $('.user-journey').html(` ${runningTotal.departure} --> ${runningTotal.desitnation}`);
        plublishRunningInfo(`<div class = 'journey-min-dist'> Min Distance ${runningTotal.distance}<div>`);
       
        $('.arrival-location').hide()
        $('.trip-duration').show()
        
    })
    
}


//4th page

$('#date-input').blur(function(){

    const date = $('#date-input').val();

    
    
    if (!date){
        
        console.log('there is an error')
        this.style.backgroundColor = "red"; 

    }else{

        console.log('correct')
        this.style.backgroundColor = "green"; 
        runningTotal.dates= date

        toggleContinueButton();
        
    }
})
    

$('.dates-pg-btn').click(function(){

    $('.welcome-page').hide()
    $('.departure-location').show()

    plublishRunningInfo(`<div class = 'travel-dates'> Dates ${runningTotal.dates} <div>`);

});

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

var ctx = document.getElementById("chartBar");
var men = ctx.dataset.male
var female = ctx.dataset.female

new Chart(ctx, {

 type: 'bar',
 data: {
   labels: [ "Men","Female"],
   datasets: [{
     label: "Nombre d'utilisateurs par genre",
     data:[men, female],
     backgroundColor: [
        '#26de81',
        '#fd9644',
        
        ],
     borderColor: [
         '#0fa859',
         '#e07828',
       
        ],
     borderWidth: 2,
 
   
   }],
},
options: {
 scales: {
   yAxes: [{
       ticks: {min: 0}
     }]
}
}
}
);

var ctx2 = document.getElementById("doughnut");
var lus = ctx2.dataset.lus
var nonLus = ctx2.dataset.nonlus

new Chart(ctx2, {

 type: 'doughnut',
 data: {
   labels: [ "Lus","Non-lus"],
   datasets: [{
     label: "Messages",
     data:[lus, nonLus],
     backgroundColor: [
        
        '#fc5c65',
        '#4b6584'
        ],
        borderColor: [
         
         '#dd252b',
         '#304256'
        ],
        borderWidth: 2
   
   }]
 }
});

var ctx3 = document.getElementById("chartpie");
var exp = ctx3.dataset.exp
var nonExp = ctx3.dataset.nonexp

new Chart(ctx3, {

 type: 'pie',
 data: {
   labels: [ "Commandes Expédiées","Commandes Non-Expédiées"],
   datasets: [{
     label: "Commandes payées",
     data:[exp, nonExp],
     backgroundColor: [
        '#fd79a8',
        
        '#4b6584'
        ],
        borderColor: [
         '#0fa859',
         
         '#304256'
        ],
        borderWidth: 2
   
   }]
 }
});

var ctx4 = document.getElementById("linechart");

let turnover = JSON.parse(ctx4.dataset.turnover)
let monthTurnover = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let amountTurnover = []
let allMonths = [
    {_id: { month: 1 }, total: 0, shipping: 0},
    {_id: { month: 2 }, total: 0, shipping: 0},
    {_id: { month: 3 }, total: 0, shipping: 0},
    {_id: { month: 4 }, total: 0, shipping: 0},
    {_id: { month: 5 }, total: 0, shipping: 0},
    {_id: { month: 6 }, total: 0, shipping: 0},
    {_id: { month: 7 }, total: 0, shipping: 0},
    {_id: { month: 8 }, total: 0, shipping: 0},
    {_id: { month: 9 }, total: 0, shipping: 0},
    {_id: { month: 10 }, total: 0, shipping: 0},
    {_id: { month: 11 }, total: 0, shipping: 0},
    {_id: { month: 12 }, total: 0, shipping: 0},
]




// turnover.sort((a,b) => a._id.month - b._id.month)

for(let i = 0; i<turnover.length; i++){
    var index=allMonths.findIndex(elem=>elem._id.month==turnover[i]._id.month)
    allMonths[index].total = turnover[i].total
    allMonths[index].shipping = turnover[i].shipping
}

console.log(allMonths)



for(let j=0; j<allMonths.length; j++){
    // let monthsInLetters =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    // monthTurnover.push(monthsInLetters[j])
    amountTurnover.push(allMonths[j].total + allMonths[j].shipping)
}



new Chart(ctx4, {

 type: 'line',
 data: {
     
   labels: monthTurnover,
   datasets: [{
     label: "Chiffre d'affaire annuel",
        
     data:amountTurnover,
     backgroundColor: [
        '#fd79a8',
        "#3498db",
        '#4b6584'
        ],
        borderColor: [
         '#0fa859',
         "#e67e22",
    
         '#304256'
        ],
        borderWidth: 2
   
   }]
 }
});


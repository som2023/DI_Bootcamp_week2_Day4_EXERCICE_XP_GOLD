// exercice 1
// part 1
function infoAboutMe(){
    console.log("je suis diarrassouba seydou,j'ai 25 ans, je joue au football");
} 
infoAboutMe()

// part2
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("mon nom est "+ personName + " j'ai "+  personAge + " ans et ma couleur préferé est " + personFavoriteColor)
}
infoAboutPerson("kone", 45, "orange")
infoAboutPerson("Joe", 12, "yellow")


// exercice2
 function calculateTip(){
    
    let facture =prompt("   John quel est le montant de la facture?" )
    facture = parseFloat(facture)
    let pourboire;
    if(facture < 50 ){
       pourboire = (20*facture) / 100 
    }
    else if (facture  >= 50 && facture <= 200){
         pourboire =(15*facture)/100
    }
    else if( facture > 200){
         pourboire = (10*facture)/100
    }
    let montantPourboireFacture = facture + pourboire
    console.log(` the tip amount is ${pourboire}$  and the final bill  ${montantPourboireFacture}`)
 }
 calculateTip()


//  exercice3
 function isDivisible(){  

    let  sum = 0;  
    for (let i = 0; i < 501; i++){
        
    
        if(i % 23 == 0){ 
            
            console.log(`les nombres divisbles par 23 sont ${i}`) 
            sum = sum + i; 
    }
 }
 console.log( `la somme des nombres divisible par 23 est:${sum}`)
}
 isDivisible()
  
//  exercice4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;

    for (const item of shoppingList) {
        //checker les items dans le stock
        if (item in stock) {
        // trouver leur prix s'ils sont dedans
        const price = prices[item];
            //Bon simplement additionne pour oim
        totalPrice += price;
        }
    }
    return totalPrice;
}
console.log(myBill());

//bonus
function myBill() {
    let totalPrice = 0;
    for (const item of shoppingList) {
      if (item in stock) {
       
        const price = prices[item];
        stock[item]--;
        totalPrice += price;
      }
    }
    return totalPrice;
}
console.log(myBill());

//  exercice5
function changeEnough(itemPrice, amountOfChange) {
    let totalValue = 0;
    const coinValues = [0.25, 0.1, 0.05, 0.01];
    for (let i = 0; i < amountOfChange.length; i++) {
      totalValue += coinValues[i] * amountOfChange[i];  
    }
    console.log(totalValue)
    return totalValue >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0])); 

// exercice 6

function hotelCost() {
    while (true) {
      var nights = prompt("How many nights do you want to stay in the hotel?");
      if (nights !== null && !isNaN(nights)) {
        break;
      }
    }
    return nights * 140;
}
function planeRideCost() {
    while (true) {
      var destination = prompt("Where do you want to go?");
      if (destination !== null && typeof destination === "string") {
        break;
      }
    }
    if (destination === "London") {
      return 183;
    } else if (destination === "Paris") {
      return 220;
    } else {
      return 300;
    }
  }
  
function rentalCarCost() {
    while (true) {
      var days = prompt("How many days do you want to rent the car?");
      if (days !== null && !isNaN(days)) {
        break;
      }
    }
    var cost = days * 40;
    if (days > 10) {
      cost = cost * 0.95;
    }
    return cost;
}
  
function totalVacationCost() {
    var carCost = rentalCarCost();
    var hotelCost = hotelCost();
    var planeCost = planeRideCost();
    return "The car cost: $" + carCost + ", the hotel cost: $" + hotelCost + ", the plane tickets cost: $" + planeCost + ".";
}
  
 totalVacationCost()


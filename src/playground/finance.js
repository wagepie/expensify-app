// import { Finance } from 'financejs'
// let finance = new Finance();
// // To calculate Amortization
// console.log(finance.AM(20000, 7.5, 5, 0));
// // => 400.76

var AmortizeJS = require('amortizejs').Calculator;

let mortgage = AmortizeJS.calculate({
    method:   'mortgage',
    apr:      3.5, 
    balance:  280350,    
    loanTerm: 60,         
    startDate: new Date('December 24 2017')
});
 
console.log( mortgage.periodicPayment );
!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Net Salary Calculator</title>
</head>
<body>
    <script>
    const prompt = require( "prompt-sync"({sigint: true}))
        function calculatingNetSalary(basicSalary , benefits) {
const TAX RATE = { tier1: {rate ; 0.1, threshold; 24000}, tier2:{ rate:0.25, threshold:32333}, tier3: { rate: 0.3, threshold:42767 } } ;
const NHIF RATES = [0, 150, 300,400, 500,600, 750,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200] ;
const NSSF_EMPLOYEE_RATE = 0.06;
const NSSF_EMPLOYER_RATE = 0.06;

//calculating gross salary 
const grossSalary = basicSalary+ benefits ;

//calculating PAYE 
let payee =0;
for(const tier in TAX RATE) {
    if (grossSalary > TAX RATE[tier].threshold){
        payee += TAX RATE[tier].rate * (grossSalary- - TAX RATE[tier].threshold)
    }
}

//calculating NHIF Deduction 
let nhifDeduction = NHIF RATES.find(rate => grossSalary <=rate) || NHIF RATES[NHIF_RATES.LENGTH - 1] ;

//calculating NSSF Deduction 
const netSalary = grossSALARY - payee - nhifDeduction - nssfDeduction; 

//Return results 
return {
    grossSalary : grossSalary,
    payee: payee,
    nhifDeduction: nhifDeduction,
    nssfDeduction: nssfDeduction
    netSalary: netSalary
} ;

        }
        const basicSalary = prompt ( "Enter your basic salary") ;
        const benefits = prompt ( "Enter your benefits,") :
        //Example usage:
        const detailsofSalary = calculatingNetSalary(60000, 5000) ;
        console.log("Gross Salary; KES" + detailsofSalary.grossSalary)
        console.log("PAYE: KES" + detailsofSalary.payee);
        console.log("NHIF DEDUCTION: KES" + detailsofSalary.nhifDeduction);
        console.log("NSSF DEDUCTION: KES" + detailsofSalary.nssfDeduction);
        console.log("Net Salary: KES" + detailsofSalary);
        </script>
</body>
</html>
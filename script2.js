var bankname ="Secure Bank Ltd."
let branch = "Ahemadabad"
const IFSC ="0000001"
function showScope() {
    console.log("This is Demo")
    var message =" "
    console.log(message)
    console.log(typeof message)

    if(true){
        var customer ="Yug";
        let account ="Saving";

        message += "<b>"+ "customer :"+customer+ " <br> "+ "</b>"
        console.log(message)

         message +=  "Account :"+ account+ " <br> "
    }

         message +=  "customer outside Block :"+customer+ " <br> ";

          message +=  "Branch :"+branch+ " <br> ";

          message += "Bank :"+bankname+ " <br> ";

            message +=  "IFSC :"+IFSC+ " <br> ";

            const op = document.getElementById('output')
            op.innerHTML = message
}

function calculateSimpleInterst(p,r,t){
    console.log(p+r+t)
    return (p*r*t)/100
}

function calculateInterst(){

    var loan = document.getElementById('loan').value 

    var rate = document.getElementById('rate').value

    var years = document.getElementById('years').value

    const sInterst =calculateSimpleInterst(loan,rate,years)
    const op = document.getElementById('output')
    op.innerHTML = "Simple Interst : "+sInterst

}
function calculateEMI(){
    var loan = document.getElementById('loan').value 

    var rate = document.getElementById('rate').value

    var years = document.getElementById('years').value

    let emi = calculateMonthlyEMI(loan,rate,years);

    const op = document.getElementById('output')
    op.innerHTML = "Monthly EMI :" + emi

}
function calculateMonthlyEMI(l,r,y){
    let monthlyRate = r/(12*100)
    let months =y*12

    let emi =(1*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);
    console.log(emi.toFixed(2))
    return emi.toFixed(2)
}
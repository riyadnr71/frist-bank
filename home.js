
const validNumber = 11111111111;

const validPin = 6472;



document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const addAccountNumber =document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPinNumber = parseInt(document.getElementById("add-pin").value)

    const availaBalance = parseInt(document.getElementById('availa-balance').innerText)



    if(addAccountNumber.length < 11){

        alert('A sala moja nes ! thik Numbe de he!!😂😂')
        return;
    }

    // if(addAccountNumber !== validNumber){
    //     alert('A sala Number Janis na tui !! Ja ati theke!!!😂😂😂')
    //     return;
    // }


    if(addPinNumber !== validPin){
        alert('A sala Chor !! thik pin Number de!!😂😂')
        return;
    }


    


    const netBalance = addAmount + availaBalance; 

    document.getElementById('availa-balance').innerText = netBalance
})
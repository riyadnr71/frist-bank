
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

        alert(' thik Numbe de he!!😂😂')
        return;
    }

    // if(addAccountNumber !== validNumber){
    //     alert('A sala Number Janis na tui !! Ja ati theke!!!😂😂😂')
    //     return;
    // }


    if(addPinNumber !== validPin){
        alert('thik pin Number de!!😂😂')
        return;
    }




    const netBalance = addAmount + availaBalance; 

    document.getElementById('availa-balance').innerText = netBalance
})


        // Cashout money feature


        const cashoutPin = 6473;

            document.getElementById('withdraw-button').addEventListener('click', function(e){
                e.preventDefault()

                const AgentNumber = document.getElementById('Agent-num').value
                const amount = parseInt(document.getElementById('withdraw-amount').value)
                const cashPin = parseInt(document.getElementById('cash-pin').value)

                const availaBalance = parseInt(document.getElementById('availa-balance').innerText)

                   
                    if(AgentNumber.length < 11){

                        alert(' thik Numbe de he!!😂😂')
                        return;
                    }


                
                if(cashPin !== cashoutPin){
                alert('thik pin Number de!!😂😂')
                return;
                    }


                const netBalanceCash = availaBalance - amount;

                document.getElementById('availa-balance').innerText = netBalanceCash


            })




            // function to toggle

            function handleToggle(id){


                const froms = document.getElementsByClassName('from')
            

            for(const form of froms){
                form.style.display = 'none'
            }

            document.getElementById(id).style.display = 'block'


            }

// toggling feature



                //  <!-- add money -->

        document.getElementById('add-button').addEventListener('click',function(){
            
        
            handleToggle('add')
           
        })



        //  <!-- CashOut -->


        document.getElementById('cash-button').addEventListener('click',function(){
            
            
            handleToggle('cash')
        })

            // trasfer Money

        document.getElementById('transfer-button').addEventListener('click',function(){

        
            handleToggle('transfer')
        })


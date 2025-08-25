
const validNumber = 11111111111;

const validPin = 6472;

// function to get input value
function getInputValueNumber(id){
   const inputField = document.getElementById(id)

   const inputFieldValue = inputField.value

   const inputFieldValueNumber = parseInt(inputFieldValue);


   return inputFieldValueNumber;

   

}

    // function to get input


function getInputValue(id){
   const inputField = document.getElementById(id)

   const inputFieldValue = inputField.value

   return inputFieldValue;
}



// function to get innertext

function getInnertextNumber(id){

   const Field = document.getElementById(id)

   const inputFielInnertext = Field.innerText

   const inputFieldInnertextNumber = parseInt(inputFielInnertext);


   return inputFieldInnertextNumber;


}


// function to get innertext available balance
    function getAvailbleBalance(value){
        const AvailbleBalance = document.getElementById('availa-balance')
        AvailbleBalance.innerText = value
    }






// add money feafure

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()

    const bank = getInputValue("bank")

    const addAccountNumber = getInputValueNumber("account-number")

    const addAmount = getInputValueNumber('add-amount')

    const addPinNumber = getInputValueNumber('add-pin')
    

    const availaBalance = getInnertextNumber('availa-balance')



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

      getAvailbleBalance(netBalance)
})


        // Cashout money feature


        const cashoutPin = 6473;

            document.getElementById('withdraw-button').addEventListener('click', function(e){
                e.preventDefault()

                const AgentNumber = getInputValueNumber('Agent-num')

                const amount = getInputValueNumber('withdraw-amount')

                const cashPin = getInputValueNumber('cash-pin')

                const availaBalance =getInnertextNumber('availa-balance')


                   
                    if(AgentNumber.length < 11){

                        alert(' thik Numbe de he!!😂😂')
                        return;
                    }


                
                if(cashPin !== cashoutPin){
                alert('thik pin Number de!!😂😂')
                return;
                    }


                const netBalanceCash = availaBalance - amount;

               getAvailbleBalance(netBalanceCash) 


            })




            // function to toggle

            function handleToggle(id){


                const froms = document.getElementsByClassName('from')
            

            for(const form of froms){
                form.style.display = 'none'
            }

            document.getElementById(id).style.display = 'block'


            }
            
            // function to toggle  style

            function toggleStyle(id){

                const formBtns = document.getElementsByClassName('form-btn')

                for(const btn of formBtns){
                btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
                btn.classList.add('border-gray-300')

            }

            document.getElementById(id).classList.remove( 'border-gray-300')
            document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
        
            return;

            }

        




// toggling feature



                //  <!-- add money --> button

        document.getElementById('add-button').addEventListener('click',function(){
            
        
            handleToggle('add')

            toggleStyle('add-button')
            


           
        })



        //  <!-- CashOut --> button


        document.getElementById('cash-button').addEventListener('click',function(){
            
            
            handleToggle('cash')

            toggleStyle('cash-button')
        })

            // trasfer Money button

        document.getElementById('transfer-button').addEventListener('click',function(){

        
            handleToggle('transfer')
            toggleStyle('transfer-button')
            
        })


        // Get-Bonus-button
         document.getElementById('Get-Bonus-button').addEventListener('click',function(){

        
            // handleToggle('getBonus')
            toggleStyle('Get-Bonus-button')

         })


        //  <!-- Pay Bill -->


        document.getElementById('payBill-button').addEventListener('click',function(){

        
            handleToggle('pay-Bill')
            toggleStyle('payBill-button')

   })


//    transactions-button


   document.getElementById('transactions-button').addEventListener('click',function(){

        
            handleToggle('transactions')
            toggleStyle('transactions-button')

   })





// login-btn"

// console.log()



document.getElementById('login-btn')
.addEventListener('click', function(e){
    e.preventDefault()
   const mobileNumber = 17857111911;
   const pinNumber = 1234;
   const mobileNumberValue = document.getElementById("mobile-number").value

    const mobileNumberValueCanverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value

    const pinNumberValueCanverted = parseInt(pinNumberValue)
    console.log(mobileNumberValueCanverted, pinNumberValueCanverted)

    if(mobileNumberValueCanverted === mobileNumber && pinNumberValueCanverted === pinNumber){
        window.location.href="./Home.html"

    }
    else{
        alert('Invalid')
    }


})


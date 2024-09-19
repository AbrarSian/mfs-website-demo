document.getElementById("btn-main-1").addEventListener('click', function(event){
    event.preventDefault();
    const amountIn= document.getElementById('amount-in').value ;
    const passCheck= document.getElementById('pass-1').value ;
    const balance= document.getElementById('balance').value ;

    if(passCheck==="1234"){
        alert("Money has moved into your account");
        const balanceValue = parseFloat(balance);
        const amountValue = parseFloat(amountIn);
        const finalBalance = balanceValue + amountValue;
        document.getElementById('balance').value = finalBalance ;
    }
    else{
        alert("Incorrect Pin. Please try again");
    }
})
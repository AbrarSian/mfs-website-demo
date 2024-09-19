document.getElementById('btn-feature-1').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('btn-hidden-issue-1').classList.remove('hidden');
    document.getElementById('btn-hidden-issue').classList.add('hidden');
})


document.getElementById("btn-main-1").addEventListener('click', function(event){
    event.preventDefault();
    const amountIn= document.getElementById('amount-in').value ;
    const passCheck= document.getElementById('pass-1').value ;
    const balance= document.getElementById('balance').innerText ;

    if(passCheck==="1234"){
        alert("Money has moved into your account");
        const balanceValue = parseInt(balance);
        const amountValue = parseInt(amountIn);
        const finalBalance = balanceValue + amountValue;
        document.getElementById('balance').innerText = finalBalance ;
    }
    else{
        alert("Incorrect Pin. Please try again");
    }
})
document.getElementById('btn-feature').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('btn-hidden-issue').classList.remove('hidden');
    document.getElementById('btn-hidden-issue-1').classList.add('hidden',true);
})


document.getElementById("btn-main-2").addEventListener('click', function(event){
    event.preventDefault();
    const amountOut= document.getElementById('amount-out').value ;
    const passCheck= document.getElementById('pass-2').value ;
    const balance= document.getElementById('balance').innerText ;

    if(passCheck==="1234"){
        alert("Money has been withdrawed from your account");
        const finalBalance = balance - amountOut;
        document.getElementById('balance').innerText = finalBalance ;
    }
    else{
        alert("Incorrect Pin. Please try again");
    }
})
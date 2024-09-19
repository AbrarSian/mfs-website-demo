document.getElementById('btn-main').addEventListener('click', function(event){
    event.preventDefault();
    const numberPart= document.getElementById('number-part').value ;
    const passwordPart= document.getElementById('pass-part').value ;
    if(numberPart==='01521763234' && passwordPart === '1234'){
        window.location.href='./home-page.html';
        alert('You have succesfully logged in....You are redirecting to your home');

    }
    else{
        alert('Invalid number or password.Try again');
    }
    numberPart.value='';
    passwordPart.value='';
})
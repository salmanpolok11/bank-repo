document.getElementById('submit-btn').addEventListener('click', function() {

 const emailFlied = document.getElementById('user-flid');
 const email = emailFlied.value;


 const passwordFlid = document.getElementById('user-pasword');
 const password = passwordFlid.value;

 if(email === 'salman@polok.com' && password === 'maha'){
    window.location.href = 'bank.html';
 }
 else{
     alert('tui vlo heye ja')
 }

})
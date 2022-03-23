var btnLogin = document.getElementById('btnlogin');
var inputEmail = document.getElementById('inputemail');
var inputPassword = document.getElementById('inputpassword');




btnLogin.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(function (result) {
            //alert('Usuário Conectado!');
            //console.log('sucesso')
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    //alert(user.email);
                    window.location = 'app.html';

                }
            });
            //window.location.replace("app.html");


        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            //console.log('falha')
        });
});



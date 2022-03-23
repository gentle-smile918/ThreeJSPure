var btnLogout = document.getElementById('btnlogout');


btnLogout.addEventListener('click', function () {
    firebase.auth().signOut().then(() => {
        //alert('Usuário Desonectado!');
        window.location.replace("index.html");
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        //console.log('falha')
    });

});

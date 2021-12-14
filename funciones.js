var ref= firebase.database().ref("Paciente1/").on("value",function(snapshot){
    document.getElementById("dato1").innerHTML= snapshot.val().Oxigenacion;
})

var ref= firebase.database().ref("Paciente1/").on("value",function(snapshot){
    document.getElementById("dato2").innerHTML= snapshot.val().PresionCardiaca;
})

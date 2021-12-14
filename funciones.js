var ref= firebase.database().ref("Optoelectrica/Pacientes/Paciente1/").on("value",function(snapshot){
    document.getElementById("dato1").innerHTML= snapshot.val().Oxigenacion;

})

var ref= firebase.database().ref("Optoelectrica/Pacientes/Paciente1/").on("value",function(snapshot){
    document.getElementById("dato2").innerHTML= snapshot.val().PresionCardiaca;

})
var ref= firebase.database().ref("Optoelectrica/Pacientes/Paciente1/").on("value",function(snapshot){
    document.getElementById("dato3").innerHTML= snapshot.val().Temperatura;

})

var ref= firebase.database().ref("Optoelectrica/").on("value",function(snapshot){
    document.getElementById("dato4").innerHTML= snapshot.val().Edad;

})

var ref= firebase.database().ref("Paciente1").on("value",function(snapshot){
    document.getElementById("dato5").innerHTML= snapshot.val().Pulsaciones;

})
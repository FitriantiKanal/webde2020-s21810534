console.log("Basic JavaScript");

//conditional JavaScript
 

function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value

if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "Kurus."
}
if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Normal."
}
if(finalBmi > 25.0 && finalBmi < 29.9){
    document.bmiForm.meaning.value = "Overweight."
}
if(finalBmi >  30.0){
    document.bmiForm.meaning.value = "Obesitas"
}
}
else{
    alert("Please Fill in everything correctly")
}
}
 

function calculate(a){
    var x = parseInt(document.calcForm.num1.value)
    var y = parseInt(document.calcForm.num2.value)
    var z = document.calcForm.result
    
    if (a.value == "add"){
        z.value=x+y
    }else if(a.value == "sub"){
        z.value = x-y
    }else if(a.value == "mul"){
        z.value = x*y
    }else if(a.value == "div"){
        z.value = x/y
    }else {
        z.value = x%y
    }
}
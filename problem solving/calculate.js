function calculate(){


    let number1="15";
    let number2="20";
    let num1=parseInt(number1)
    let num2=parseInt(number2)
    

    let sum=num1+num2;
    console.log(sum);


    if(sum>30){
        console.log("large numbers");

    }
    else{
        console.log("small number")
    }

    for(let i=1;i<=35;i++){
        if(i%2==0){
            console.log(i);
        }
    }
    
}
calculate();

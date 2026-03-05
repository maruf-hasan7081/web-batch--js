function showname(){
    let firstname= "Dibajit";
    let lastname="Roy";


    let fullname=firstname+" "+lastname;

    console.log(fullname);


    if(fullname.length>12){
        console.log("Your name is too long");
    }
    else{
        console.log("Your name is shortname");
    }


    for(let i=1; i<=3; i++){
        console.log(fullname);
    }

}
showname();
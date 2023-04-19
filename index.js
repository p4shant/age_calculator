
document.getElementById("mybutton").onclick=function(){

    // current day and time
    const currentdate=new Date();
    let month=currentdate.getMonth();
    let year=currentdate.getFullYear();

    // day of birth 
    const birthdaydate=document.getElementById("userage").value;
    console.log(birthdaydate);
    const obj= new Date(birthdaydate);
    let year2=obj.getFullYear();
    let month2=obj.getMonth();

    if(month2==month){
        document.getElementById("demo").innerHTML=`You are ${year-year2} year old`
    }
    else if(month2>month){
        document.getElementById("demo").innerHTML=`You are ${year-year2-1} year and ${12-(month2-month)} month old`
    }
    else
    document.getElementById("demo").innerHTML=`You are ${year-year2} year and ${month-month2} month old`


}
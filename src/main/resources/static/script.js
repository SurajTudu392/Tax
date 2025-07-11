function getDate()
{
    var curr_date=new Date();
    var x=document.getElementById("date");
    x.innerHTML=curr_date.toString();
}
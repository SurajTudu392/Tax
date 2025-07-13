function getDate()
{
    var curr_date=new Date();
    var x=document.getElementById("date");
    x.innerHTML=curr_date.toString();
}
window.onload=getDate;
function Bill()
{
    var gst=document.getElementById("tax").value;
    document.getElementById("tax").innerHTML = "You typed: " + gst;
    var s="";
    for(let i=0;i<=gst.length;i++)
    {
        if(gst.charAt(i)!='%'&&gst.charAt(i)!=' ')
        {
            s=s+gst.charAt(i);

    }
}
var Gst=parseInt(gst);
    Gst=Gst/100.0;
var b=document.getElementById("am").value;
var Price=parseInt(b);    
    var Total=Gst+Price;
    document.getElementById("t1").innerHTML=" "+Total;


}
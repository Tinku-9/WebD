function fun()
{
    let a=parseInt(document.getElementById("id1").value);
    let b=parseInt(document.getElementById("id2").value);
    let total= (a*10)+(b*5);
    let c="₹";
    c=String.fromCharCode(8377);
    document.getElementById("id3").value=c+" "+total;
}
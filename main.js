let num=parseInt(prompt("Enter the Number"));
let para=document.getElementById("ans");
if(num%2==0)
{
    para.innerText=(num + " This is a Even Number");
}
else
{
    para.innerText=(num + " This is a Odd Number");
}
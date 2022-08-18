let year=1700

if(year%4===0)
{

  if(year%100===0)
{

  if(year%400===0)
   
    console.log("The given year "+year+" is leap year")

  else

    console.log("The given year "+year+" is Not a leap year")
}
else
  console.log("The given year "+year+" is leap year")
}
else
console.log("The given year "+year+" is Not a leap year")

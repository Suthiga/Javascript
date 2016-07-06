
// var nam={
// first:"Suthiga",
// last:"Raja",
// fullName : function(){
//   return  this.first+this.last;
// }
// };
// alert(nam.fullName());

//
// var x=100;
// function add()
// {
//  z=x+y;
//    alert(z);
// }
//   //  i=1;
// var mm=function()
// {
//   var ex=document.getElementById("foo"),
//       left=ex.offsetLeft,
//       speed=30;
//         alert(left);
//       ex.style.left=left+speed+"px";
//       alert(ex.style.left);

// if(left>500){

//  clearTimeout(time);
//  }
// }
 // var time=setInterval(mm,10);
// mm();



// for(var i=0;i<names.length;i=i+1)
// {
//   alert(names[i]);
// }
// var names=[];
// do
// {
//   a=names.pop();
//   alert(a);
// }while(names.length>0)
// alert("loop failed");
//
// var emp={
//   first:"hi",
//   last:"hello"
// }
// var emp1=emp;
// emp.last=" man";
// console.log(emp);
// alert(emp.first+emp.last);
// alert(emp1.first+emp1.last);
// var a=1;
// b=2;
// delete this.a;
// delete this.b;
// console.log(a);
// var hi="hiiii";
// var abc=function(){
//   var hi="hello";
//   alert(hi);
// }
// abc();
//
// alert(location.href);
// if(confirm("How is it?"))
// {
//   location="https://google.com";

// x=10;
// function add(){
//   y=90;
//   z=x+y;
//   console.log(z);
//   var x=20;
// }
// add();
// var ex=document.getElementById("foo");
// ex.style.color="red";
// ex.style.backgroundColor="blue";
// var abc={
//   name:"hi",
//   array:[1,2,3]
// };
// console.log(abc['array']);
// window.onload=function(){
// var ex=document.getElementById("foo");
// ex.onclick=function(){
//   this.style.backgroundColor="yellow";
// };
// }
// console.log(x);
// var x=89;
(function()
{
  alert("hi");
  var click=document.getElementsByTagName("button");
for(var i=0; i<click.length ; i=i+1){
 alert(i);
  click[i].onclick=function(){
    alert("hi");

  };
}
}());

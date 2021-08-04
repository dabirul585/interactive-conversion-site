function add()
 {
   var num1 = Number(document.getElementById("inp1").varlue);
   var num2 = Number(document.getElementById("inp2").varlue);

   var result = num1 - num2;
   document.getElementById("result").innerHTML = result;
   document.getElementById("result").style.fontSize ="36px";


   document.getElementById("d1").innerHTML=typeof(num1);
   document.getElementById("d2").innerHTML=typeof(num2);
   document.getElementById("r1").innerHTML=typeof(result);


   var num3 = Number(document.getElementById("inp3").varlue);
   var num4 = Number(document.getElementById("inp4").varlue);

   var result = num3 + num4;
   document.getElementById("result").innerHTML = result;
   document.getElementById("result").style.fontSize ="36px";


   document.getElementById("e1").innerHTML=typeof(num3);
   document.getElementById("e2").innerHTML=typeof(num4);
   document.getElementById("r2").innerHTML=typeof(result);


   var num5 = Number(document.getElementById("inp5").varlue);
   var num6 = Number(document.getElementById("inp6").varlue);

   var result = num5 * num6;
   document.getElementById("result").innerHTML = result;
   document.getElementById("result").style.fontSize ="36px";


   document.getElementById("c1").innerHTML=typeof(num5);
   document.getElementById("c2").innerHTML=typeof(num6);
   document.getElementById("r3").innerHTML=typeof(result);


   var num7 = Number(document.getElementById("inp7").varlue);
   var num8 = Number(document.getElementById("inp8").varlue);

   var result = num7 / num8;
   document.getElementById("result").innerHTML = result;
   document.getElementById("result").style.fontSize ="36px";


   document.getElementById("k1").innerHTML=typeof(num7);
   document.getElementById("k2").innerHTML=typeof(num8);
   document.getElementById("r4").innerHTML=typeof(result);

}	
function calculate() {
    var n1 = document.getElementById("25W B No").value;
    var n2 = document.getElementById("40W B No").value;
    var n3 = document.getElementById("60W B No").value;
    var n4 = document.getElementById("100W B No").value;
    var n5 = document.getElementById("20 T No").value;
    var n6 = document.getElementById("20 W CFL No").value;
    var n7 = document.getElementById("30 F No").value;
    var n8 = document.getElementById("48 F No").value;
    var n9 = document.getElementById("40 tF No").value;

    var n11 = document.getElementById("550 I No").value;
    var n12 = document.getElementById("750 I No").value;
    var n13 = document.getElementById("3000 G No").value;
    var n14 = document.getElementById("2000 WM No").value;
    var n15 = document.getElementById("1400 AC No").value;
    var n16 = document.getElementById("1800 AC No").value;
    var n17 = document.getElementById("200 Ref No").value;
    var n18 = document.getElementById("300 Ref No").value;
    
    var n21 = document.getElementById("3000 OV No").value;
    var n22 = document.getElementById("5000 OV No").value;
    var n23 = document.getElementById("1000 Toast No").value;
    var n24 = document.getElementById("200 Mix No").value;
    var n25 = document.getElementById("5000 cook No").value;

    var n31 = document.getElementById("100 Speaker No").value;
    var n32 = document.getElementById("150 TV No").value;
    var n33 = document.getElementById("200 Comp No").value;
    var n34 = document.getElementById("745 Motor No").value;
    
    var h1 = document.getElementById("25W B H").value;
    var h2 = document.getElementById("40W B H").value;
    var h3 = document.getElementById("60W B H").value;
    var h4 = document.getElementById("100W B H").value;
    var h5 = document.getElementById("20 T H").value;
    var h6 = document.getElementById("20W CFL H").value;
    var h7 = document.getElementById("30 F H").value;
    var h8 = document.getElementById("48 F H").value;
    var h9 = document.getElementById("40 tF H").value;

    var h11 = document.getElementById("550 I H").value;
    var h12 = document.getElementById("750 I H").value;
    var h13 = document.getElementById("3000 G H").value;
    var h14 = document.getElementById("2000 WM H").value;
    var h15 = document.getElementById("1400 AC H").value;
    var h16 = document.getElementById("1800 AC H").value;
    var h17 = document.getElementById("200 Ref H").value;
    var h18 = document.getElementById("300 Ref H").value;

    var h21 = document.getElementById("3000 OV H").value;
    var h22 = document.getElementById("5000 OV H").value;
    var h23 = document.getElementById("1000 Toast H").value;
    var h24 = document.getElementById("200 Mix H").value;
    var h25 = document.getElementById("5000 cook H").value;

    var h31 = document.getElementById("100 Speaker H").value;
    var h32 = document.getElementById("150 TV H").value;
    var h33 = document.getElementById("200 Comp H").value;
    var h34 = document.getElementById("745 Motor H").value;
  // Multiply the two numbers
  var r1 = [(n1 * h1 *25)/1000]*30;
  var r2 = [(n2 * h2 *40)/1000]*30;
  var r3 = [(n3 * h3 *60)/1000]*30;
  var r4 = [(n4 * h4 *100)/1000]*30;
  var r5 = [(n5 * h5 *20)/1000]*30;
  var r6 = [(n6 * h6 *20)/1000]*30;
  var r7 = [(n7 * h7 *30)/1000]*30;
  var r8 = [(n8 * h8 *50)/1000]*30;
  var r9 = [(n9 * h9 *40)/1000]*30;

  var r11 = [(n11 * h11 *550)/1000]*30;
  var r12 = [(n12 * h12 *750)/1000]*30;
  var r13 = [(n13 * h13*3000)/1000]*30;
  var r14 = [(n14 * h14 *200)/1000]*30;
  var r15 = [(n15 * h15 *1400)/1000]*30;
  var r16 = [(n16 * h16 *1800)/1000]*30;
  var r17 = [(n17 * h17 *200)/1000]*30;
  var r18 = [(n18 * h18 *300)/1000]*30;

  var r21 = [(n21 * h21 *3000)/1000]*30;
  var r22 = [(n22 * h22 *5000)/1000]*30;
  var r23 = [(n23 * h23 *1000)/1000]*30;
  var r24 = [(n24 * h24 *200)/1000]*30;
  var r25 = [(n25 * h25 *5000)/1000]*30;

  var r31 = [(n31 * h31 *100)/1000]*30;
  var r32 = [(n32 * h32 *150)/1000]*30;
  var r33 = [(n33 * h33 *200)/1000]*30;
  var r34 = [(n34 * h34 *745)/1000]*30;
                // [[(n2 * h2 *40)/1000]*30]];
                // [[(n3 * h3 *60)/1000]*30]+
                // [[(n4 * h4 *100)/1000]*30];
  var result= r1+r2+r3+r4+r5+r6+r7+r8+r9+
              r11+r12+r13+r14+r15+r16+r17+r18+
              r21+r22+r23+r24+r25+
              r31+r32+r33+r34;
  var cpu= document.getElementById("CPU").value;
  var bill = cpu * result;
  // Display the result
  document.getElementById("resultdaily").innerHTML = result/30;
  document.getElementById("resultMonthly").innerHTML = result;
  document.getElementById("Bill").innerHTML=bill;

  // Report
  if (n1>0) {
    // Bulb25W.innerText = "Bulb 25 Watt " + r1;
    document.getElementById("No1").innerHTML=n1;
    document.getElementById("T1").innerHTML=h1;
    document.getElementById("R1").innerHTML=r1;
    document.getElementById("C1").innerHTML=r1*cpu;
    // Bulb25W.style.display = "block";
} else {
    Bulb25W.style.display = "none";
}

if ((n2)>0) {
    // Bulb40W.innerText = "Bulb 40 Watt " + r2;
    // Bulb40W.style.display = "block";
    document.getElementById("No2").innerHTML=n2;
    document.getElementById("T2").innerHTML=h2;
    document.getElementById("R2").innerHTML=r2;
    document.getElementById("C2").innerHTML=r2*cpu;
} else {
    Bulb40W.style.display = "none";
}

if (n3>0) {
    // Bulb60W.innerText = "Bulb 60 Watt  " + r3;
    // Bulb60W.style.display = "block";
    document.getElementById("No3").innerHTML=n3;
    document.getElementById("T3").innerHTML=h3;
    document.getElementById("R3").innerHTML=r3;
    document.getElementById("C3").innerHTML=r3*cpu;
} else {
    Bulb60W.style.display = "none";
}
if (n4>0) {
  document.getElementById("No4").innerHTML=n4;
    document.getElementById("T4").innerHTML=h4;
    document.getElementById("R4").innerHTML=r4;
    document.getElementById("C4").innerHTML=r4*cpu;
} else {
  Bulb100W.style.display = "none";
}

if (n5>0) {
  document.getElementById("No5").innerHTML=n5;
    document.getElementById("T5").innerHTML=h5;
    document.getElementById("R5").innerHTML=r5;
    document.getElementById("C5").innerHTML=r5*cpu;
} else {
  Tube20W.style.display = "none";
}

if (n6>0) {
  document.getElementById("No6").innerHTML=n6;
    document.getElementById("T6").innerHTML=h6;
    document.getElementById("R6").innerHTML=r6;
    document.getElementById("C6").innerHTML=r6*cpu;
} else {
  CFL20W.style.display = "none";
}
if (n7>0) {
  document.getElementById("No7").innerHTML=n7;
    document.getElementById("T7").innerHTML=h7;
    document.getElementById("R7").innerHTML=r7;
    document.getElementById("C7").innerHTML=r7*cpu;
} else {
  Fan30W.style.display = "none";
}
if (n8>0) {
  document.getElementById("No8").innerHTML=n8;
    document.getElementById("T8").innerHTML=h8;
    document.getElementById("R8").innerHTML=r8;
    document.getElementById("C8").innerHTML=r8*cpu;
} else {
  Fan50W.style.display = "none";
}
if (n9>0) {
  document.getElementById("No9").innerHTML=n9;
    document.getElementById("T9").innerHTML=h9;
    document.getElementById("R9").innerHTML=r9;
    document.getElementById("C9").innerHTML=r9*cpu;
} else {
  TFan40W.style.display = "none";
}
if (n11>0) {
  document.getElementById("No10").innerHTML=n11;
    document.getElementById("T10").innerHTML=h11;
    document.getElementById("R10").innerHTML=r11;
    document.getElementById("C10").innerHTML=r11*cpu;
} else {
  Iron550W.style.display = "none";
}
if (n12>0) {
  document.getElementById("No11").innerHTML=n12;
    document.getElementById("T11").innerHTML=h12;
    document.getElementById("R11").innerHTML=r12;
    document.getElementById("C11").innerHTML=r12*cpu;
} else {
  Iron750W.style.display = "none";
}
if (n13>0) {
  document.getElementById("No12").innerHTML=n13;
    document.getElementById("T12").innerHTML=h13;
    document.getElementById("R12").innerHTML=r13;
    document.getElementById("C12").innerHTML=r13*cpu;
} else {
  Geyser3000W.style.display = "none";
}
if (n14>0) {
  document.getElementById("No13").innerHTML=n14;
    document.getElementById("T13").innerHTML=h14;
    document.getElementById("R13").innerHTML=r14;
    document.getElementById("C13").innerHTML=r14*cpu;
} else {
  WashM200W.style.display = "none";
}
if (n15>0) {
  document.getElementById("No14").innerHTML=n15;
    document.getElementById("T14").innerHTML=h15;
    document.getElementById("R14").innerHTML=r15;
    document.getElementById("C14").innerHTML=r15*cpu;
} else {
  AC1400W.style.display = "none";
}
if (n16>0) {
  document.getElementById("No15").innerHTML=n16;
    document.getElementById("T15").innerHTML=h16;
    document.getElementById("R15").innerHTML=r16;
    document.getElementById("C15").innerHTML=r16*cpu;
} else {
  AC1800W.style.display = "none";
}
if (n17>0) {
  document.getElementById("No16").innerHTML=n17;
    document.getElementById("T16").innerHTML=h17;
    document.getElementById("R16").innerHTML=r17;
    document.getElementById("C16").innerHTML=r17*cpu;
} else {
  Ref200W.style.display = "none";
}
if (n18>0) {
  document.getElementById("No17").innerHTML=n18;
    document.getElementById("T17").innerHTML=h18;
    document.getElementById("R17").innerHTML=r18;
    document.getElementById("C17").innerHTML=r18*cpu;
} else {
  Ref300W.style.display = "none";
}
if (n21>0) {
  document.getElementById("No18").innerHTML=n21;
    document.getElementById("T18").innerHTML=h21;
    document.getElementById("R18").innerHTML=r21;
    document.getElementById("C18").innerHTML=r21*cpu;
} else {
  Oven3000W.style.display = "none";
}
if (n22>0) {
  document.getElementById("No19").innerHTML=n22;
    document.getElementById("T19").innerHTML=h22;
    document.getElementById("R19").innerHTML=r22;
    document.getElementById("C19").innerHTML=r22*cpu;
} else {
  Oven5000W.style.display = "none";
}
if (n23>0) {
  document.getElementById("No20").innerHTML=n23;
    document.getElementById("T20").innerHTML=h23;
    document.getElementById("R20").innerHTML=r23;
    document.getElementById("C20").innerHTML=r23*cpu;
} else {
  Toaster1000W.style.display = "none";
}
if (n24>0) {
  document.getElementById("No21").innerHTML=n24;
    document.getElementById("T21").innerHTML=h24;
    document.getElementById("R21").innerHTML=r24;
    document.getElementById("C21").innerHTML=r24*cpu;
} else {
  Mixer200W.style.display = "none";
}
if (n25>0) {
  document.getElementById("No22").innerHTML=n25;
    document.getElementById("T22").innerHTML=h25;
    document.getElementById("R22").innerHTML=r25;
    document.getElementById("C22").innerHTML=r25*cpu;
} else {
  Cook5000W.style.display = "none";
}
if (n31>0) {
  document.getElementById("No23").innerHTML=n31;
    document.getElementById("T23").innerHTML=h31;
    document.getElementById("R23").innerHTML=r31;
    document.getElementById("C23").innerHTML=r31*cpu;
} else {
  Speaker100W.style.display = "none";
}
if (n32>0) {
  document.getElementById("No24").innerHTML=n32;
    document.getElementById("T24").innerHTML=h32;
    document.getElementById("R24").innerHTML=r32;
    document.getElementById("C24").innerHTML=r32*cpu;
} else {
  TV150W.style.display = "none";
}
if (n33>0) {
  document.getElementById("No25").innerHTML=n33;
    document.getElementById("T25").innerHTML=h33;
    document.getElementById("R25").innerHTML=r33;
    document.getElementById("C25").innerHTML=r33*cpu;
} else {
  Comp200W.style.display = "none";
}
if (n34>0) {
  document.getElementById("No26").innerHTML=n34;
    document.getElementById("T26").innerHTML=h34;
    document.getElementById("R26").innerHTML=r34;
    document.getElementById("C26").innerHTML=r34*cpu;
} else {
  Motar745W.style.display = "none";
}

if (result>0) {
    document.getElementById("resultMonthlyR").innerHTML=result;
    document.getElementById("BillR").innerHTML=bill;
} else {
  result.style.display = "none";
}
displayReport.style.display = "block";

return false; 
}

function scoreClear() {
  document.getElementById("noteCount").value = NaN;
  document.getElementById("gradeS").innerHTML = "";
  document.getElementById("gradeAAAplus").innerHTML = "";
  document.getElementById("gradeAAA").innerHTML = "";
  document.getElementById("gradeAAplus").innerHTML = "";
  document.getElementById("gradeAA").innerHTML = "";
  document.getElementById("gradeAplus").innerHTML = "";
  document.getElementById("gradeA").innerHTML = "";

}

function scoreCalc() {
  var totalNotes = parseFloat(document.getElementById("noteCount").value);
  var criticalValue = 10000000/totalNotes;
  var nearValue = criticalValue/2;

  //grade S
  var s_value = Math.floor((10000000 - 9900000)/nearValue);
  var s_errValue = Math.floor(s_value/2);
  var outS = "Max " + s_value + " nears, Max " + s_errValue + " errors";

  //grade AAA+
  var AAAplusValue = Math.floor((10000000 - 9800000)/nearValue);
  var AAAplusErrValue = Math.floor(AAAplusValue/2);
  var outAAAplus = "Max " + AAAplusValue + " nears, Max " + AAAplusErrValue + " errors";

  //grade AAA
  var AAAvalue = Math.floor((10000000 - 9700000)/nearValue);
  var AAAerrValue = Math.floor(AAAvalue/2);
  var outAAA = "Max " + AAAvalue + " nears, Max " + AAAerrValue + " errors";

  //grade AA+
  var AA_plus_value = Math.floor((10000000 - 9500000)/nearValue);
  var AA_plus_errValue = Math.floor(AA_plus_value/2);
  var outAAplus = "Max " + AA_plus_value + " nears, Max " + AA_plus_errValue + " errors";

  //grade AA
  var AA_value = Math.floor((10000000 - 9300000)/nearValue);
  var AA_errValue = Math.floor(AA_value/2);
  var outAA = "Max " + AA_value + " nears, Max " + AA_errValue + " errors";

  //grade A+
  var A_plus_value = Math.floor((10000000 - 9000000)/nearValue);
  var A_plus_errValue = Math.floor(A_plus_value/2);
  var outAplus = "Max " + A_plus_value + " nears, Max " + A_plus_errValue + " errors";

  //grade A
  var A_value = Math.floor((10000000 - 8700000)/nearValue);
  var A_errValue = Math.floor(A_value/2);
  var outA = "Max " + A_value + " nears, Max " + A_errValue + " errors";

  document.getElementById("gradeS").innerHTML = outS;
  document.getElementById("gradeAAAplus").innerHTML = outAAAplus;
  document.getElementById("gradeAAA").innerHTML = outAAA;
  document.getElementById("gradeAAplus").innerHTML = outAAplus;
  document.getElementById("gradeAA").innerHTML = outAA;
  document.getElementById("gradeAplus").innerHTML = outAplus;
  document.getElementById("gradeA").innerHTML = outA;


}

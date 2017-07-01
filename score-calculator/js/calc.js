function scoreClear() {
  document.getElementById("critical").value = NaN;
  document.getElementById("near").value = NaN;
  document.getElementById("error").value = NaN;
  document.getElementById("score").innerHTML = "";
  document.getElementById("grade").innerHTML = "";
  document.getElementById("otherInfo").innerHTML = "";
  document.getElementById("totalNotes").innerHTML = "";
  document.getElementById("critInfo").innerHTML = "";
  document.getElementById("nearInfo").innerHTML = "";
  document.getElementById("nextGrade").innerHTML = "";

}

function scoreCalc() {
  var critical = parseFloat(document.getElementById("critical").value);
  var near = parseFloat(document.getElementById("near").value);
  var error = parseFloat(document.getElementById("error").value);
  var totalNotes = critical + near + error;
  var critVal = Math.floor(10000000/totalNotes);
  var nearVal = Math.floor(critVal/2);
  var otherInfo = "";


  if (critical != 0 && near == 0 && error == 0)
    {
      totScore = 10000000;
      otherInfo = "PUC!!";
      nextGrade = "";
    }
  else if (critical == 0 && near == 0 && error == 0){
    totScore = 0;
  }
  else {
    //totScore = (criticalVal*critical)+(nearVal*near);
    totScore = ((critical+(near/2))/totalNotes)*10000000;
  }

  if ((totScore==0 && error==0 && near==0)||(totScore==0 && error>1 && near==0)){
    grade="N/A";
    otherInfo ="Did you even play?";
    nextGrade = "";
  }

  if(error==1 && near==1) {
    otherInfo = "You got SNM'd and Hibiki'd ok...";
  }

  else if (error==1) {
    otherInfo = "HAH HIBIKI'D!";
  }
  else if (near==1 && error==0) {
    otherInfo = "HAH SNM'D!";
  }
  if (isNaN(totScore)){
    otherInfo = "Please input numbers for each field";
    nextGrade = "";
  }

  var grade ="";

  //grade calc + how many nears you might need for the next grade
  if(totScore>=9900000) {
    grade="S";
    
    /**var toPUC = near + error;
    if (toPUC == 1) {
      nextGrade = toPUC + " critical for PUC";
    }

    else {
      nextGrade = toPUC + " criticals for PUC";
    }**/

  }
  else if(totScore>=9800000) {
    grade="AAA+";
  }
  else if(totScore>=9700000) {
    grade="AAA";
  }
  else if(totScore>=9500000) {
    grade="AA+";
  }
  else if(totScore>=9300000) {
    grade = "AA";
  }
  else if(totScore>=9000000) {
    grade="A+";
  }
  else if(totScore>=8700000) {
    grade = "A";
  }
  else if(totScore>=7500000) {
    grade = "B";
  }
  else if (totScore>=6500000) {
    grade = "C";
  }
  else if (totScore<6500000 && totScore>0) {
    grade="D";
  }

  document.getElementById("score").innerHTML = Math.floor(totScore);
  document.getElementById("grade").innerHTML = grade;
  document.getElementById("otherInfo").innerHTML = otherInfo;
  document.getElementById("totalNotes").innerHTML = totalNotes;
  document.getElementById("critInfo").innerHTML = critVal;
  document.getElementById("nearInfo").innerHTML = nearVal;
  //document.getElementById("nextGrade").innerHTML = nextGrade;


}

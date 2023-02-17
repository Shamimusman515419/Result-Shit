
function inputValue(element){
     const inputvalue=document.getElementById(element).value ;
     return inputvalue;
}
function inputValueJubject(element1){
     const inputvalue=document.getElementById(element1).value ;
     const inputValuParstaInt=parseFloat(inputvalue);
     if(isNaN(inputValuParstaInt)){
          alert('CrratValue')
          return inputValuParstaInt;
     }
     return inputValuParstaInt;
}
function outputvalue(element,value){
     const outpoutvalue=document.getElementById(element);
       outpoutvalue.innerText=value;
}

var Back=document.getElementById("Back");

var MakeMarksitPage=document.getElementById("MakeMarksitPage");
var InputMarksitpage=document.getElementById("InputMarksitpage");
Back.addEventListener("click",function(){
     InputMarksitpage.style.display="block";
     MakeMarksitPage.style.display="none";

})


document.getElementById("Click").addEventListener("click",function(){

     InputMarksitpage.style.display="none";
     MakeMarksitPage.style.display="block";



 const name=inputValue("name");
 outputvalue('setName',name);

 const Fathername=inputValue("Fathername");
 outputvalue('setFathername',Fathername);
 
 const MotherName=inputValue("MotherName");
 outputvalue('setMotherName',MotherName);

 const institute=inputValue("institute");
 outputvalue('setInstitute',institute);

 const Roll=inputValue("Roll");
 outputvalue('setRoll',Roll);
 const Register=inputValue("Register");
 outputvalue('setRegister',Register);
 const Dateofbirth=inputValue("Dateofbirth");
 outputvalue('setDateofbirth',Dateofbirth);
 const Group=inputValue("Group");
 outputvalue('setGroup',Group);



//   subject value 

const Bangla=inputValueJubject("Bangla");
const English=inputValueJubject("English");
const Mathematics=inputValueJubject("Mathematics");
const Religion=inputValueJubject("Religion");
const GenerelSciene=inputValueJubject("GenerelSciene");
const Chemistry=inputValueJubject("Chemistry");
const Physics=inputValueJubject("Physics");


let CountSubjectMark=[Bangla,English,Mathematics,Religion,GenerelSciene,Chemistry,Physics];
 let totlMrk=0;
 for(let i=0; i<CountSubjectMark.length ; i++){
      totlMrk=totlMrk +CountSubjectMark[i];
   
}








console.log(totlMrk)




if(totlMrk>=560){
    
     outputvalue('totalgpa'," 5");

}else if(totlMrk>=490){
    
     outputvalue('totalgpa',"4.5 ");


}else if(totlMrk>=420){
     
     outputvalue('totalgpa'," 4");


}else if(totlMrk>=350){
  
     outputvalue('totalgpa'," 3");


}
else if(totlMrk>=280){
    
     outputvalue('totalgpa'," 2");


}
else if(totlMrk>=231){
     
     outputvalue('totalgpa'," 1.5");


}
else if(totlMrk>=700){
     alert("Unvalit Number");

}else{
   
   
     outputvalue('totalgpa'," 00");

}




 if(Bangla>=80){
     outputvalue('setBangla',"A+");
     outputvalue('gradeBangla'," 5");

}else if(Bangla>=70){
     outputvalue('setBangla',"A");
     outputvalue('gradeBangla',"4.5 ");


}else if(Bangla>=60){
     outputvalue('setBangla',"B+");
     outputvalue('gradeBangla'," 4");


}else if(Bangla>=50){
     outputvalue('setBangla',"B");
     outputvalue('gradeBangla'," 3");


}
else if(Bangla>=40){
     outputvalue('setBangla',"C");
     outputvalue('gradeBangla'," 2");


}
else if(Bangla>=33){
     outputvalue('setBangla',"D");
     outputvalue('gradeBangla'," 1.5");


}
else if(Bangla>=100){
     outputvalue('setBangla',"Unvalit Number");

}else{
   
     outputvalue('setBangla',"Fall");
     outputvalue('gradeBangla'," 00");

}
// English
 if(English>=80){
     outputvalue('setEnglish',"A+");
     outputvalue('gradeEnglish',"  5");

}else if(English>=70){
     outputvalue('setEnglish',"A");
     outputvalue('gradeEnglish'," 4.5 ");


}else if(English>=60){
     outputvalue('setEnglish',"B+");
     outputvalue('gradeEnglish',"  4");


}else if(English>=50){
     outputvalue('setEnglish',"B");
     outputvalue('gradeEnglish'," 3 ");


}
else if(English>=40){
     outputvalue('setEnglish',"C");
     outputvalue('gradeEnglish',"  2");


}
else if(English>=33){
     outputvalue('setEnglish',"D");
     outputvalue('gradeEnglish'," 1.5 ");


}
else if(English>=100){
     outputvalue('setEnglish',"Unvalit Number");
     outputvalue('gradeEnglish',"  00");


}else{
   
     outputvalue('setEnglish',"Fall");
     outputvalue('gradeEnglish',"  00");

}

// Mathematics 
 if(Mathematics>=80){
     outputvalue('setMathematics',"A+");
     outputvalue('gradeMathematics',"  5");

}else if(Mathematics>=70){
     outputvalue('setMathematics',"A");
     outputvalue('gradeMathematics',"4.5  ");


}else if(Mathematics>=60){
     outputvalue('setMathematics',"B+");
     outputvalue('gradeMathematics',"  4");


}else if(Mathematics>=50){
     outputvalue('setMathematics',"B");
     outputvalue('gradeMathematics',"  3");


}
else if(Mathematics>=40){
     outputvalue('setMathematics',"C");
     outputvalue('gradeMathematics'," 2 ");


}
else if(Mathematics>=33){
     outputvalue('setMathematics',"D");
     outputvalue('gradeMathematics',"  1.5");


}
else if(Mathematics>=100){
     outputvalue('setMathematics',"Unvalit Number");
     outputvalue('gradeMathematics',"  00");


}else{
   
     outputvalue('setMathematics',"Fall");
     outputvalue('gradeMathematics',"  00");

}

// Religion 
 if(Religion>=80){
     outputvalue('setReligion',"A+");
     outputvalue('gradeReligion',"5");

}else if(Religion>=70){
     outputvalue('setReligion',"A");
     outputvalue('gradeReligion',"4.5 ");


}else if(Religion>=60){
     outputvalue('setReligion',"B+");
     outputvalue('gradeReligion'," 4");


}else if(Religion>=50){
     outputvalue('setReligion',"B");
     outputvalue('gradeReligion'," 3");


}
else if(Religion>=40){
     outputvalue('setReligion',"C");
     outputvalue('gradeReligion'," 2");


}
else if(Religion>=33){
     outputvalue('setReligion',"D");
     outputvalue('gradeReligion'," 1.4");


}
else if(Religion>=100){
     outputvalue('setReligion',"Unvalit Number");
     outputvalue('gradeReligion'," 00");


}else{
   
     outputvalue('setReligion',"Fall");
     outputvalue('gradeReligion',"00 ");

}


// GenerelSciene 
 if(GenerelSciene>=80){
     outputvalue('setGenerelSciene',"A+");
     outputvalue('gradeGenerelSciene'," 5");

}else if(GenerelSciene>=70){
     outputvalue('setGenerelSciene',"A");
     outputvalue('gradeReligion',"4.5 ");


}else if(GenerelSciene>=60){
     outputvalue('setGenerelSciene',"B+");
     outputvalue('gradeReligion'," 4");


}else if(GenerelSciene>=50){
     outputvalue('setGenerelSciene',"B");
     outputvalue('gradeReligion',"3 ");


}
else if(GenerelSciene>=40){
     outputvalue('setGenerelSciene',"C");
     outputvalue('gradeReligion'," 2");


}
else if(GenerelSciene>=33){
     outputvalue('setGenerelSciene',"D");
     outputvalue('gradeReligion',"1.5 ");


}
else if(GenerelSciene>=100){
     outputvalue('setGenerelSciene',"Unvalit Number");
     outputvalue('gradeReligion'," ");


}else{
   
     outputvalue('setGenerelSciene',"Fall");
     outputvalue('gradeReligion'," ");

}



 if(Chemistry>=80){
     outputvalue('setChemistry',"A+");
     outputvalue('gradeChemistry',"5");
}else if(Chemistry>=70){
     outputvalue('setChemistry',"A");
     outputvalue('gradeChemistry',"4.5");

}else if(Chemistry>=60){
     outputvalue('setChemistry',"B+");
     outputvalue('gradeChemistry',"4");


}else if(Chemistry>=50){
     outputvalue('setChemistry',"B");
     outputvalue('gradeChemistry',"3");

}
else if(Chemistry>=40){
     outputvalue('setChemistry',"C");
     outputvalue('gradeChemistry',"2");


}
else if(Chemistry>=33){
     outputvalue('setChemistry',"D");
     outputvalue('gradeChemistry',"1.5");


}
else if(Chemistry>=100){
     outputvalue('setChemistry',"Unvalit Number");
     outputvalue('gradeChemistry',"00");


}else{
   
     outputvalue('setChemistry',"Fall");
     outputvalue('gradeChemistry',"00");

}


 if(Physics>=80){
     outputvalue('setPhysics',"A+");
     outputvalue('gradePhysics',"5");

}else if(Physics>=70){
     outputvalue('setPhysics',"A");
     outputvalue('gradePhysics',"4.5");


}else if(Physics>=60){
     outputvalue('setPhysics',"B+");
     outputvalue('gradePhysics',"4");


}else if(Physics>=50){
     outputvalue('setPhysics',"B");
     outputvalue('gradePhysics',"3");


}
else if(Physics>=40){
     outputvalue('setPhysics',"C");
     outputvalue('gradePhysics',"2");


}
else if(Physics>=33){
     outputvalue('setPhysics',"D");
     outputvalue('gradePhysics',"1.5");


}
else if(Physics>=100){
     outputvalue('setPhysics',"Unvalit Number");
     outputvalue('gradePhysics',"00");


}else{
   
     outputvalue('setPhysics',"Fall");
     outputvalue('gradePhysics',"00");
}


})
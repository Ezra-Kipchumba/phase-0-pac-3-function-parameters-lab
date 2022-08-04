//01
function introduction(name = "Aki"){ 
   return `Hi, my name is ${name}.`;
}
//02
function introductionWithLanguage(name ="Aki",language = "JavaScript"){
   return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//03
function introductionWithLanguageOptional(name ,language = "JavaScript"){
   return `Hi, my name is ${name} and I am learning to program in ${language}.`

}
introductionWithLanguageOptional("Gracie","Python");
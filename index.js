function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
    //'Hi, my name is Aki and I am learning to program in Ember.js.'
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language="JavaScript"){
    //'Hi, my name is Aki and I am learning to program in Ember.js.'
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


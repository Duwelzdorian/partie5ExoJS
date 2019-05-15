var languagesArrayCreation = function(languages) {
  // Je déclare un tableau languagesArrayCreation
  // Le contenu se définit entre crochets avec '' pour les lettres.
  languages = ['Html', 'CSS', 'Java', 'PHP'];
  //   index    [0]     [s1]    [2]     [3]
  return languages;
}

var numbersArrayCreation = function(numbers) {
  numbers = [0, 1, 2, 3, 4, 5];
  return numbers;
}

var ElementReplacement = function(languages) {
  // Je remplace index [2] pour y ajouter Javascript
  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function(languages) {
  // Ajoute 2 index Ruby [4] et Python [5] dans la fonction languages
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function(numbers) {
  // Ajoute 2 index -2 et -1 dans la fonction numbers au debut du tableau
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function(languages) {
  // Supprime le premier index du tableau languages
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function(languages) {
  // Supprime le dernier index du tableau languages
  languages.pop();
  return languages;
}

var stringToArray = function(socialMediaInString) {
  var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function(languages) {
  // Crée et renvoie une nouvelle chaîne de caractères en concaténant
  // tous les éléments d'un tableau. La concaténation utilise la virgule comme séparateurs.
  languages.join();
  // languagesInString = languagesToString();
  return languagesInString;
  return languages;
}

var arraySort = function(socialMedia) {
  socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function(languages) {
  languages.reverse();
  return languages;
}

function checkSpam(str) {
    let lowerCase = str.toLowerCase();

    return lowerCase.includes('viagra') || lowerCase.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
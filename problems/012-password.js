/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    let flagNum = false;
    let flagLet = false;
    let flagUpperCase = false;
    const passArr = password.split('');
    for (const element in  passArr){
        if(!isNaN(parseInt(passArr[element], 10))){ 
            flagNum = true;
        } else {
            flagLet = true;
            if(passArr[element] === passArr[element].toUpperCase()){
                flagUpperCase = true;
            }
        }
    }
    return (flagNum == true && flagLet == true && flagUpperCase == true) ? true : false;
}

module.exports = validatePassword;

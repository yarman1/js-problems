/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    palindromeFlag = true;
    const valueArr = value.split('');
    for (let i = 0; i < valueArr.length/2; i++){
        if(valueArr[i] !== valueArr[valueArr.length - 1 - i]){
            palindromeFlag = false;
            break; 
        }
    }
    return palindromeFlag;
}

module.exports = isPalindrome;

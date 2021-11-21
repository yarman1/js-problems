/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let firstSum = 0;
    let secondSum = 0;
    const numbers = number.split('')
    .map((number)=>parseInt(number, 10));
    for (index in numbers){
        if(index > 2){
            secondSum += numbers[index];
            continue;
        }
        firstSum += numbers[index];
    }
    return firstSum === secondSum ? true : false;
}

module.exports = checkTicket;

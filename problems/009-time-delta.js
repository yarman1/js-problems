/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const start = x.split(':').map((char)=>parseInt(char, 10));
    const end = y.split(':').map((char)=>parseInt(char, 10));
    let hours = end[0] - start[0];
    let minutes = end[1] - start[1];
    let seconds = end[2] - start[2];
    return hours*3600 + minutes*60 + seconds;
}

module.exports = getTimeDelta;

/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    const decoder = 'abcdefghijklmnopqrstuvwxyz';
    const secretArr = secret.split('');
    let resultArr = [];
    for (let i = 0; i < secret.length; i++){
        if(secretArr[i] === 'z'){ 
            resultArr.push('a');
            continue;
        }
        if(secretArr[i] === ' '){ 
            resultArr.push(' ');
            continue;
        }
        resultArr[i] = decoder[decoder.indexOf(secretArr[i])+1];
    }
    return resultArr.join(''); 
}

module.exports = decrypt;

function checkingTheString(string, length) {
  return string.length <= length;
}
// Cтрока короче 20 символов
checkingTheString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkingTheString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkingTheString('проверяемая строка', 10); // false

function isPalindromeString(string){
  string = string.toLowerCase();
  const stringReverse = string.split('').reverse().join('');
  return string === stringReverse;
}
// Строка является палиндромом
isPalindromeString('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindromeString('ДовОд'); // true
// Это не палиндром
isPalindromeString('Кекс'); // false

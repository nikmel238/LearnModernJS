'use strict'

var oldName;
oldName = 'для объявления переменных, в старых версиях JS  используется var';
console.log (oldName); 
let newName = 'в новой версии JS, для объявления переменной используется let';
console.log (newName); 
const INFO = 'const используется для объявления постоянных переменных, при чем если переменная заранее известна, то обзываем ее прописными буквами';
console.log (INFO); 
newName = 'значения в переменных можно изменять, но не const'
console.log (newName); 

/* Практика №1 */
let name;
let admin;
name = 'Джон';
admin = name;
alert (admin);

/* Практика №2 */
let OurPlanetName = 'Земля';
let CurrentUserName = 'Алекс';

/* Практика №3 */

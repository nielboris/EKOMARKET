nombre=prompt('escriba su nombre');
let num1,num2,num3,prom;
num1=parseInt(prompt('INGRESE PRIMERA NOTA: '));
num2=parseInt(prompt('INGRESE SEGUNDA NOTA: '));
num3=parseInt(prompt('INGRESE TERCERA NOTA: '));
prom=round(num1+num2+num3)/3;
prom1=Math.floor((num1+num2+num3)/3);
document.writeln("Bienvenido "+nombre);
document.writeln('<br>');
document.writeln('sus notas son;'+ num1 +' n2: '+num2 +' n3: '+num3 );
document.writeln('<br>');
document.writeln('el promedio es '+prom);
document.writeln('<br>');
document.writeln('promedio sin redondear: '+prom1);
document.writeln('<br>');
let texto=prompt('escriba una frase o mensaje');//todo libro contiene texto en frases 

document.writeln('<br>');
document.writeln(texto.leght);
document.writeln('<br>');
document.writeln(texto.toUpperCase);
document.writeln('<br>');
document.writeln(texto.split('frase'));
document.writeln('<br>');
document.writeln(texto.replace('texto en','informacion importante'));
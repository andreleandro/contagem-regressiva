PT-BR
Contagem regressiva para o Ano Novo responsivo

A lógica é basicamente pegar a data do Ano Novo (2023) em milisegundos, e dividir pela data atual em milisegundos.
A var gap vai dividir os milisegundos do Ano Novo(2023) pelos milisegundos da data atual.
São criadas as variáveis dos tempos, que vão ser usadas para fazer os cálculos, 1 segundo são 1000 milisegundos, 1 minuto são 60 segundos, 1 hora são 60 minutos, 1 dia são 24 horas.
Cada cálculo é armazenado numa var respectiva, o "Math.floor" é pra pegar somente o número inteiro parar ser mostrado no DOM. 
A var do textoDia é a divisão da var gap pela var dia. 
A var textoHora é o resto da divisão entre o gap e o dia dividido pela var hora. 
A var textoMinuto é o resto da divisão entre gap e a var hora dividido pela var minuto.
A var textoSegundo é o resto da divisão entre gap e a var minuto dividido pela var segundo.
As variáveis alteram o DOM utilizando o "innerText", selecionando cada div com o "document.querySelector" e mudando o valor para o da var respectiva.

O site está responsivo, podendo ser visto em todos os tamanhos de tela, se adaptando caso necessário usando "media queries".

EN
Countdown to New Year responsive

The logic is basically get the date from New Year(2023) in milliseconds, then divide for the current date in milliseconds.
The var gap will divide the milliseconds from New Year(2023) by the milliseconds from the current date.
Are created some variables to store the time, that will be utilized to do the calculation, 1 second is 1000 milliseconds, 1 minute is 60 seconds, 1 hour is 60 minutes, 1 day is 24 hours.
Each calculation is stored in his respective var, the "Math.floor" is to get the integer to be showed on the DOM.
The var textoDia is the division between the var gap by the var dia.
The var textoHora is the remainder of the division between the var gap and the var dia, divided by the var hora.
The var textoMinuto is the remainder of the division between the var gap and the var hora, divided by the var minuto.
The var textoSegundo is the remainder of the division between the var gap and the var minuto, divided by the var segundo.
The variables changes the DOM utilizing "innerText", selected each div with "document.querySelector" then changing the value for the respective time var.

The website is responsive, being able to be viewed in all screen sizes, adapting each needed utilizing "media queries".

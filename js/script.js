
let title='Complimenti! La tua password è:'
let nome='';
let cognome='';
let color='';


nome=prompt ('Come ti chiami?');
cognome=prompt ('Qual è il tuo cognome?');
color=prompt ('Qual è il tuo colore preferito?')

document.getElementById('title').innerHTML= title;

document.getElementById('password').innerHTML= `${nome}${cognome}${color}23`;


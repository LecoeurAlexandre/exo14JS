let nbNotes = 0, noteMax = 0, noteMin = 20, moyNotes = 0;

nbNotes = prompt("Combien de notes voulez-vous saisir ?")

for(let i=1 ; i<= nbNotes; i++) {
    let noteTmp = Number(prompt(`Merci de saisir la note n°${i}`));
    moyNotes += noteTmp;
    if(noteTmp > noteMax) {
        noteMax = noteTmp
    }
    if(noteTmp < noteMin) {
        noteMin = noteTmp
    }
}

moyNotes = Math.round(moyNotes/nbNotes);

console.log(`Note moyenne : ${moyNotes} ; note minimale : ${noteMin} ; note maximale : ${noteMax}`);
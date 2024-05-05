// backend/controllers/PlayerController.js

function analyzeAnswers(answers) {
    let profile = {
        angriff: 0,
        abwehr: 0,
        technik: 0,
        kontrolle: 0,
    } ;

    if (answers[0].includes('Sturm')) profile.angriff+= 3;
    if (answers[0].includes('Abwehr')) profile.abwehr=+3;
    if (answers[0].includes('Zentrales-Mittefeld')) {
        profile.angriff += 2; // Corrected from =+2 to +=2
        profile.abwehr += 3;  // Corrected from =+3 to +=3
    }
    
}

exports.submitAnswer = (req, res) => {
    const { answer } = req.body;
    console.log("Received answer:", answer);

  };
  
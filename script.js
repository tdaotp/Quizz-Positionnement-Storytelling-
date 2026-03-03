// Définition des 15 questions du quiz
const questions = [
    {
        question: "Avant d’écrire ton histoire, la première question stratégique c’est...",
        choices: [
            "Qu’est-ce qui me rend unique en tant que personne ?",
            "Quelle partie de ma vie est la plus impressionnante ?",
            "Quelle transformation je promets, pour qui, et contre quoi je me positionne ?",
            "Quel ton émotionnel va plaire à mon audience ?"
        ],
        correctAnswer: 2,
        explanation: "Storytelling stratégique = histoire au service d’un positionnement clair (promesse + cible + différence)."
    },
    {
        question: "Une “bonne histoire” dans ton contenu B2B sert surtout à...",
        choices: [
            "Divertir et faire rester les gens plus longtemps",
            "Créer une connexion… même si ça ne mène à rien",
            "Prouver ton expertise par un vocabulaire technique",
            "Rendre ton point de vue crédible et mémorable"
        ],
        correctAnswer: 3,
        explanation: "L’objectif = autorité + clarté + décision, pas juste ‘beau récit’."
    },
    {
        question: "Si ton audience dit “c’est inspirant, mais je ne comprends pas ce que tu fais”, ça signifie surtout que...",
        choices: [
            "Tu n’as pas assez raconté de détails",
            "Ton storytelling n’est pas relié au positionnement",
            "Ton histoire n’est pas assez dramatique",
            "Tu devrais ajouter des chiffres"
        ],
        correctAnswer: 1,
        explanation: "Inspiration sans direction = manque de message stratégique."
    },
    {
        question: "Le meilleur “hook” pour une histoire d’autorité, c’est plutôt...",
        choices: [
            "J’ai vécu quelque chose de difficile",
            "Je vais te raconter mon parcours",
            "Voici l’erreur qui coûte X à [cible] — et ce que j’ai compris",
            "Tout a changé le jour où…"
        ],
        correctAnswer: 2,
        explanation: "L'**autorité** commence par un problème concret et une solution qui témoigne de ton expertise."
    },
    {
        question: "Une preuve d’autorité “story-compatible”, c’est...",
        choices: [
            "J’ai toujours été passionné(e)",
            "J’ai 10 ans d’expérience",
            "Un cas concret avec décision, critère, résultat, apprentissage",
            "Une belle phrase sur ta mission"
        ],
        correctAnswer: 2,
        explanation: "La preuve = situation → choix → résultat → apprentissage."
    },
    {
        question: "Ton histoire est *stratégique* quand...",
        choices: [
            "Elle est vraie et touchante",
            "Elle te ressemble à 100%",
            "Elle fait rire ton audience",
            "Elle démontre une croyance forte et différenciante qui guide ta méthode"
        ],
        correctAnswer: 3,
        explanation: "Le storytelling stratégique = **point de vue** (thèse) + cohérence avec l’offre."
    },
    {
        question: "Un signe que tu “enjolives” au lieu d’être stratégique :",
        choices: [
            "Tu utilises des métaphores",
            "Tu ajoutes du suspense",
            "Tu supprimes les décisions clés et tu gardes l’émotion",
            "Tu parles au présent"
        ],
        correctAnswer: 2,
        explanation: "L’émotion sans **décision/critère** = joli, mais peu utile."
    },
    {
        question: "Pour construire ton “Authority Link”, tu relies surtout...",
        choices: [
            "Ton enfance → ta mission",
            "Tes diplômes → tes tarifs",
            "Ton expérience → un principe → une promesse claire",
            "Tes valeurs → ton logo"
        ],
        correctAnswer: 2,
        explanation: "L’**Authority Link** : **expérience → principe → résultat**."
    },
    {
        question: "Dans une story de positionnement, le “conflit” le plus puissant est souvent...",
        choices: [
            "Un conflit avec quelqu’un",
            "Un conflit intérieur émotionnel",
            "Un conflit d’idées : l’approche dominante vs ton approche",
            "Un événement dramatique"
        ],
        correctAnswer: 2,
        explanation: "Le conflit utile = **contre quoi tu te bats** (croyance, méthode, norme)."
    },
    {
        question: "Tu veux être perçu(e) comme expert(e). La meilleure stratégie narrative c’est...",
        choices: [
            "En dire plus et montrer que tu sais beaucoup",
            "Dire moins, mais structurer plus : problème → principe → preuve → action",
            "Parler de tes certifications",
            "Utiliser des mots sophistiqués"
        ],
        correctAnswer: 1,
        explanation: "L’autorité vient de la **structure** et de la **clarté**, pas de la complexité."
    },
    {
        question: "Le moment où tu dois *éviter* de raconter ton histoire personnelle :",
        choices: [
            "Quand tu es stressé(e)",
            "Quand l’histoire ne soutient pas une décision d’achat ou une croyance clé",
            "Quand tu n’as pas de photo",
            "Quand tu as déjà raconté une histoire hier"
        ],
        correctAnswer: 1,
        explanation: "Si ça ne sert pas le **positionnement**, c’est du bruit."
    },
    {
        question: "Si tu ne devais garder qu’une seule question pour vérifier qu’une histoire “vend”, ce serait :",
        choices: [
            "Est-ce que c’est émouvant ?",
            "Est-ce que c’est inédit ?",
            "Est-ce que ça prouve pourquoi *ma méthode* est la bonne pour *ce type de personne* ?",
            "Est-ce que c’est long ?"
        ],
        correctAnswer: 2,
        explanation: "La **vente** = **preuve + différenciation + ciblage**."
    },
    {
        question: "Le meilleur indicateur d’un storytelling aligné au positionnement :",
        choices: [
            "Les gens réagissent avec des emojis",
            "Les gens te posent des questions plus précises sur ton offre",
            "Les gens te complimentent",
            "Les gens te suivent"
        ],
        correctAnswer: 1,
        explanation: "La qualité = **qualification des demandes**, pas l’engagement superficiel."
    },
    {
        question: "Tu veux “témoigner” de ton autorité sans te vanter. Tu fais plutôt :",
        choices: [
            "Une liste de réussites",
            "Une story “avant/après” centrée sur toi",
            "Une analyse d’un cas/erreur + ce que ça révèle sur ton angle",
            "Une punchline inspirante"
        ],
        correctAnswer: 2,
        explanation: "L’autorité discrète = **analyse + principe + preuve**."
    },
    {
        question: "Ton storytelling devient scalable quand...",
        choices: [
            "Tu as beaucoup d’histoires",
            "Tu as une story très forte",
            "Tu as une bibliothèque de “patterns” (hooks, preuves, angles) reliés à ton positionnement",
            "Tu postes tous les jours"
        ],
        correctAnswer: 2,
        explanation: "Scalable = système, pas inspiration."
    }
];

// Variables globales pour le quiz
let currentQuestionIndex = 0;
let score = 0;

// Fonction pour afficher la question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <p><strong>Question ${currentQuestionIndex + 1} :</strong> ${questions[currentQuestionIndex].question}</p>
        ${questions[currentQuestionIndex].choices.map((choice, index) => `
            <div>
                <input type="radio" id="choice${index}" name="question${currentQuestionIndex}" value="${index}">
                <label for="choice${index}">${choice}</label>
            </div>
        `).join('')}
    `;
    document.getElementById("next-button").style.display = "inline-block";
}

// Fonction pour soumettre les résultats au Google Apps Script
function submitQuiz() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    
    // Préparer les données à envoyer au script Google Apps
    const data = {
        'first-name': firstName,
        'last-name': lastName,
        'email': email,
        'score': score,
        'level': getLevel(score)
    };

    // Envoi des données au Google Apps Script via une requête POST
    const options = {
        method: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        payload: data
    };

    const url = 'https://script.google.com/macros/s/AKfycbzRbLnqbKyfHQrIKHOIJbS4WJISNGc6MHK7tqZOyDx3n-gKOhM0yKsi1r8d60vfF0sq1w/exec';  // URL de ton Web App
    fetch(url, options)
        .then(response => response.text())
        .then(result => {
            console.log('Réponse du serveur:', result);
            alert('Merci pour ta participation ! Les résultats ont été envoyés.');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Merci de réessayer plus tard.');
        });
}

// Fonction pour déterminer le niveau basé sur le score
function getLevel(score) {
    if (score <= 5) return "Touriste";
    else if (score <= 10) return "Élémentaire";
    else return "Spécialisé";
}

// Fonction pour démarrer le quiz
function startQuiz() {
    if (document.getElementById("first-name").value === "" || 
        document.getElementById("last-name").value === "" || 
        document.getElementById("email").value === "") {
        alert("Tous les champs sont requis !");
        return;
    }
    
    document.getElementById("info-form").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    displayQuestion();
}

// Fonction pour afficher le score et le niveau final
function showResult() {
    const resultContainer = document.getElementById("result-container");
    const scoreText = document.getElementById("score-text");
    const levelText = document.getElementById("level-text");

    scoreText.innerHTML = `Ton score est ${score} sur ${questions.length}`;
    levelText.innerHTML = `Ton niveau : ${getLevel(score)}`;
    
    resultContainer.style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
}

// Fonction pour recommencer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
}

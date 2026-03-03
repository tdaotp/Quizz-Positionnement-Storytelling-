// Fonction qui gère l'envoi des données du quiz au script Google Apps
function submitQuiz() {
    // Récupérer les informations du formulaire (prénom, nom, email)
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    
    // Préparer les données à envoyer au script Google Apps
    const data = {
        'first-name': firstName,
        'last-name': lastName,
        'email': email,
        'score': score,
        'level': getLevel(score)  // Fonction pour déterminer le niveau basé sur le score
    };

    // Préparer la requête HTTP POST
    const options = {
        method: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        payload: data  // Les données envoyées au script
    };

    // URL de ton Web App Google Apps Script (à remplacer par ton URL)
    const url = 'https://script.google.com/macros/s/AKfycbyjEbO2ngOwaWDNeENQWIernmiCuCD9H_56Mqxr8Yfex2mdFVqIRlrlIPRurBo9e_RdCQ/exec';  // Remplace par l'URL de ton Web App Google Apps Script
    
    // Envoi des données à Google Apps Script via POST
    fetch(url, options)
        .then(response => response.text())
        .then(result => {
            console.log('Réponse du serveur:', result);  // Afficher la réponse du serveur
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
    else if (score <= 10) return "Artisan";
    else return "Stratège";
}

// Fonction pour démarrer le quiz (masquer le formulaire et afficher le quiz)
function startQuiz() {
    // Vérifie si tous les champs du formulaire sont remplis
    if (document.getElementById("first-name").value === "" || 
        document.getElementById("last-name").value === "" || 
        document.getElementById("email").value === "") {
        alert("Tous les champs sont requis !");  // Avertir l'utilisateur si des champs sont vides
        return;
    }
    
    // Cache le formulaire d'information et affiche les questions du quiz
    document.getElementById("info-form").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    
    // Afficher la première question
    displayQuestion();
}

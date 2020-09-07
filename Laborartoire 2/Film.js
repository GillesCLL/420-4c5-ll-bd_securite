    const header = document.querySelector('header'); // Reference a l'entête de notre page HTML
    const section = document.querySelector('section'); // Reference vers la section qui va contenir nos données JSON formatées

    // Création d'une variable contenant l'adresse de notre site contenant le fichier JSON
    //let requestURL = 'https://localhost:44391/';
    let requestURL ='http://localhost:56939/weatherforecast';

    
    // Création d'une requête
    let request = new XMLHttpRequest();
    // Ouverture de la requête
    request.open('Get', requestURL);
    // Indqiuer que c'est une requête JSON
    request.responseType= 'json';
    // Envoyer la requête
    request.send();
    // Associer une fonction de rappel pour le traitement des données expédiées par le serveur
    request.onload= MaFonctionCallBack;

    /////////////////////////////////////////
    // Section des fonctions
    /////////////////////////////////////////

    // Fonction de rappel pour la requête  XMLHttpRequest
    function MaFonctionCallBack(){
      const Film = this.response;   // Emmagasiner les données JSON dans une variable
      ConstruireEntete(Film);            // Appel de la fonction qui vas créer une entête et un paragraphe html
      //AfficherVedette(Film);
    }

    // Fonction pour construire l'entête de notre page
    function ConstruireEntete(jsonObj) {
      const myH1 = document.createElement('h1');  // Créer un entête élément de type h1m(l'élément est créé mais non associer a notre page pour le moment)
      myH1.textContent=jsonObj['prenom'];    // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1
      header.appendChild(myH1);             // Assigner(associer) notre entête à l'entête de notre page HTML

      const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe
      myPara1.textContent=  jsonObj['nom']; ; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
      header.appendChild(myPara1);
      // const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date
      // myPara2.textContent=  'Date: ' + jsonObj['Date']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
      // header.appendChild(myPara2);

    }

    // Fonction pour afficher les informations sur le film
    function AfficherVedette(jsonObj) {
      const Vedette = jsonObj['Vedette']; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau heroes 
      // Récupérer les éléments du tableau Vedette pour remplir notre page html
      for (var i = 0; i < Vedette.length; i++) {
        const myArticle = document.createElement('article');// Pour chaque vedette, créer un article ('article'), une entête h2 ('h2'), 1 paragraphe ('p')
        const Nom = document.createElement('article'); 
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = Vedette[i].Nom; // Utiliser la valeur de la propriété JSON 'Nom' retourné par le serveur pour initialiser le texte de notre entête h2
        myPara1.textContent = 'Personnage: ' + Vedette[i].Personnage; // Utiliser la valeur de la propriété JSON 'Personnage' retourné par le serveur pour initialiser le paragraphe
      
        // Assigner(associer) l'entête myH2 et le paragraphes myPara1 à l'article myArticle
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        
        section.appendChild(myArticle); // Associer notre article a notre section de la page HTML
  }
}

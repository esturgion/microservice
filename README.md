# 🌍 World News Déploiment

Cette application comporte deux docker.
L'un pour lancer l'application avec son environnement et sa base de données.
Le second pour créer un environnement de tests.

## 🚀 Lancement de l'application

Pour faire tourner le projet en local, il faut :\
    - récupérer le code depuis le répository\
    - lancer la commande: ```docker-compose -f docker-compose.yml up```

Vous pourrez alors accéder à la partie reader à cette adresse :
    http://localhost:3001

Et à la partie writer ici : 
    http://localhost:3002

Pour couper les services docker, lancer cette commande :\
    - ```docker-compose -f docker-compose.yml down```


## 🛠️ Tests

Pour le micro-service writer, des tests unitaires et d'intégrations ont été réalisés sur le back et unitaires et e2e sur le front.

Pour le micro-service reader, il y a des tests e2e dans le front (ces tests seront complété dans le futur).

### Stack

Les tests unitaires et d'intégrations ont été réalisé avec Vitest.
Les tests e2e avec playwright.

### Lancement environnement

L'environnement de test prévu pour pointer vers une base de données est stocké dans un docker de test.
Il faudra créé un fichier .env.test et env.integration dans le back de chaque micro-service avec les variables de votre base de données en suivant l'exemple du fichier .env.exemple.

Vour pourrez ensuite lancer docker avec la commande :\
 ```docker-compose -f docker-compose.test.yml up```\
Pour arrêter ce docker, faîtes la commande :\
```docker-compose -f docker-compose.test.yml down -v```

### Lancement tests

Une fois l'environnement en place, vous pouvez lancer les tests.


*Micro-service writer* :

    - Pour les tests du backend, il faut se placer dans le dossier backend :
    ```cd .\wm-rajar-ms_writer\BACK\```
    Vous pouvez lancer les tests unitaires avec cette commande :
    ```npm run test:uni```
    et les tests d'intégrations avec cette commande :
    ```npm run test:inte```
    pour lancer tout les tests en une commande, faîtes :
    ``` npm test```

    - Pour les tests frontend, placez-vous dans le bon dossier :
    ```cd .\wm-rajar-ms_writer\FRONT\```
    Pour les tests unitaires faîtes la commande :
    ```npm test```
    Et pour les tests e2e, la commande :
    ```npm run test:e2e```

*Micro-service reader* :

    Placez-vous dans le bon dossier :
    ```cd .\wn-rajar-ms_reader\Frontend\```
    Et lancer la commande pour les tests e2e :
    ```npx playwright test ```
# Application Hello 
## Introduction
L'application contient deux chemins /explainshow/helloworks et /hello. 
Le premier chemin amène a une description de l'application et le second, avec un attribut 'name' ajouté, amène sur une page qui affiche "bonjour" avec le nom ajouté.
## instruction pour lancer l'application
Pour lancer l'application, il faut télécharger les deux fichiers index.js et handles.js. Il est important que les deux fichiers soient dans le même dossier pour que cela fonctionne. Une fois le fichier téléchargé, il faut le lancer. Avec un logiciel comme visual studio code, allez sur l'onglet "Debug" et "start debugging". Une fois le debugger attaché, allez dans votre navigateur et rentrer l'adresse URL: 
localhost:8080
Ainsi vous serrez sur l'application.
## l'application 
Rentrez localhost:8080/explainshow/helloworks pour accéder au fonctionnement de l'application. 
De plus, vous pouvez mettre comme adresse url: localhost:8080/hello?name=MyName , cette adresse vous amène à une page avec "Bonjour MyName!" . Si le nom est vide comme suivant localhost:8080/hello?name= , il y a un message indiquant que le nom est vide. 
En mettant localhost:8080/hello?name=luc , vous arrivez sur ma brève présentation. Cette commande fonctionne aussi avec LUC ou Luc. 
Si le chemin rentré est différent des deux autres (localhost:8080/explainshow/helloworks et localhost:8080/hello), il y aura le message "error 404 the path: /FalsePath does not exist" si /FalsePAth a été rentré.

 Luc BOURRETERE
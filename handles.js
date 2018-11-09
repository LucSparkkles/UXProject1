// ./handles.js
const http = require('http');
const url = require('url');
const qs = require('querystring');


const biography = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LUC bio </title>' +
'    </head>' + 
'    <body>' +
"         <p>Bonjour, je suis Luc. " +
'  </p>' +

"<p> Un étudiant ingénieur en 5ième année à l'Ecole Centrale d'Electronique de Paris  " +
'  </p>' +
"<p> Je suis en fillière Système d'information cyber-sécurité et option d'approfondissement internet nouvelle génération "+
'  </p>' +
'    </body>' +
'</html>'

const contenthowhellowworks= '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LUC APP how hello works </title>' +
'    </head>' + 
'    <body>' +
" <h2> Fonctionnement de l'application HELLO </h2>"+
"<div>  En rentrant dans l'application, vous pouvez vous déplacer dans 2 chemins qui sont /explainshow/helloworks et /hello." +
"<p> Avec le chemin /hello il faut rajouter votre nom. Par exemple ?name=Thomas si vous vous appelez Thomas. Le chemin aura la forme suivante: localhost:8080/hello?name=Thomas </p>"+
"<p> -L'application vous dira bonjour avec votre nom remplis au préalable. </p>"+
"<p> -Si vous mettez un nom vide comme ceci : localhost:8080/hello?name= , l'application affichera un message pour que vous redéfinissiez votre nom dans la barre. </p>"+
"<p> -Si vous mettez le nom Luc, vous arriverez à une brève présentation du développeur. </p>"+
"<p> -Si vous mettez un chemin différent de /hello et /explainshow/helloworks, il y aura un message d'erreur 404. </p>"+
'  </div>' +
'    </body>' +
'</html>'
const erreurquatre = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title> erreur 404</title>' +
'    </head>' + 
'    <body>' +
'<p> error 404 the path: '
const erreurquatresuite = '  does not exist</p>  </body>' +
'</html>'

const bonjour = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title> Bonjour '
const bonjourintermed = '</title>' +
'    </head>' + 
'    <body>' +
'<p> Bonjour '
const bonjoursuite = '!  </p>  </body>' +
'</html>'

const nomvide = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>Nom vide </title>' +
'    </head>' + 
'    <body>' +
"<p> Le nom entré est vide <p>"
'    </body>' +
'</html>'


module.exports ={

 serverHandle : function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    res.writeHead(200,);

    if (path === '/explainshow/helloworks' || path === '/hello'){
      if(path === '/explainshow/helloworks'){
        res.write(contenthowhellowworks)
      }
      if (path === '/hello' && 'name' in params 
          && (params['name']==='luc' || params['name']==='Luc' 
                                     || params['name']==='LUC')){
          res.write(biography )
      } 
      else{
       if (path === '/hello' && 'name' in params ){
            if(params['name']==='' ){res.write(nomvide)}
           else{res.write(bonjour + params['name']+bonjourintermed + params['name'] + bonjoursuite)}
        } 
      }
      
    }
    else{
      res.write(erreurquatre + path+ erreurquatresuite)
    }
    res.end();
}}
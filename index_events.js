/* Revoir le pdf : JS - Intro aux événement pdf;

Liste des événements DOM les plus utiles :

Événements souris :
    click – lorsque la souris clique sur un élément (les appareils à écran tactile le génèrent d'un simple toucher).
    contextmenu – lorsque la souris fait un clic droit sur un élément.
    mouseover / mouseout – lorsque le curseur de la souris survole / quitte un élément.
    mousedown / mouseup – lorsque le bouton de la souris est enfoncé/relâché sur un élément.
    mousemove – lorsque la souris est déplacée.

Événements clavier :
    keydown / keyup – lorsqu'une touche du clavier est enfoncée et relâchée.

Événements d'élément de formulaire :
    submit – lorsque le visiteur soumet un fichier <form>.
    focus – lorsque le visiteur se concentre sur un élément, par exemple sur un fichier <input>.

Événements du document :
    DOMContentLoaded – lorsque le HTML est chargé et traité, le DOM est entièrement construit.

Événements CSS :
    transitionend – quand une animation CSS se termine.

*/

//Pour écouter un événement  : addEventListener( 'eventType', eventHandler );
//eventType correspond à l'événement que l'on souhaite écouter
//evenetHandler correspond à la fonction/méthode qui sera exécutée lorsque l'événement se produit
//Ex : écouter et gérer un click sur un bouton
document.getElementById("btn").addEventListener('click', handleClickOnBtn);
function handleClickOnBtn(evt){ //evt est l'evénement
    console.log("Button click !");
    let buttonClicked = evt.currentTarget; //evt.currentTarget est l'élément qui a déclenché l'événement
    console.log(buttonClicked);
// Pour arrêter d'écouter un événement : removeEventListener
    document.getElementById("btn").removeEventListener('click', handleClickOnBtn);
    //dans cet exemple lors du premier clic sur le bouton nous déclenchons la fonction handleClickOnBtn
    //et l'on arrête d'écouter l'événement, un 2ème clic ne déclenchera plus la fonction handleClickOnBtn
}

//Le bouillonnement des événements : Bubbling
let borderedDivs = document.querySelectorAll('div.border');
borderedDivs.forEach((elt)=>{elt.addEventListener('click', handleClickOnBorderedDiv)});
function handleClickOnBorderedDiv(evt){
    alert("élément with id=" + evt.currentTarget.id + " clicked !");
}
//Lorsque l'on clic sur un élément, l'événement se propage depuis l'élément en remontant dans le DOM élément par élément
//En cliquant sur le BOTTOM DIV, 3 événements sont finalement déclenchés 
//Certains événements ne bouillonnent pas comme par exemple 'focus', pour le savoir il faut consulter la documentation 
//Pour click : https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
//Pour focus : https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event

//Il est possible d'empécher le bouillonnement avec la méthode stopPropagation
borderedDivs.forEach((elt)=>{elt.removeEventListener('click', handleClickOnBorderedDiv)});
borderedDivs.forEach((elt)=>{elt.addEventListener('click', handleClickOnBorderedDivWithoutBubbling)});
function handleClickOnBorderedDivWithoutBubbling(evt){
    evt.stopPropagation();
    alert("élément with id=" + evt.currentTarget.id + " clicked !");
}

//Il est également possible d'annuler le comportement par défaut d'un événement
//On utilise pour cela la méthode preventDefault
//Souvent utilisé pour la validation des données d'un formulaire
let formulaire = document.getElementById('formulaire');
formulaire.addEventListener('submit', handleSumibForm);
function handleSumibForm(evt){
    evt.preventDefault();//Annule l'envoi du formulaire
    //...
    // Validation des données 
    //...
    evt.currentTarget.submit();//Envoi le formulaire (aprés validation)
}
//Tous les événements ne sont pas cancellable, voir la doc ...
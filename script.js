// partie Jonjon--------------------------------------------------------------------------------------------
new CBPFWTabs( document.getElementById( 'tabs' ) );
// !partie Jonjon--------------------------------------------------------------------------------------------
$(document).ready(function(){
//partie se connecter--------------------------------------------------------------------------------------------
// $function promptMessage(){
//   prompt("identifiez-vous", "exemple : Laetitia");
//   var connect = prompt("#header1").value;
//   $("#header1").text(connect);
// };
//partie Jeffen--------------------------------------------------------------------------------------------
  // A SUPPRIMER POUR TESTER >>>>>>>
  var cartItemAdded = true;
  // <<<<<<<<A SUPPRIMER POUR TESTER
  var cartWrapper = $('#product');
  var priceInput = '';// viens de la sélection dans le panneau de commande pour les types de transformation
  var typeInput = '';// viens de la sélection dans le panneau de commande pour les types de transformation
  var products= [
    {
      id: 0,
      name: 'Potion d\'amour',
      description: 'La personne qui boira cette potion tombera instantanément amoureuse du premier être vivant qu’elle verra et ce jusqu’à la fin de ses jours. À manipuler avec précaution.',
      quantity: '50 ml',
      imageUrl: 'images/amour.jpg',
      price: 40
    },
    {
      id: 1,
      name: 'Potion de vérité',
      description: 'Une fois ingérée, toute parole qui sort de la bouche n’est que vérité pour une durée de  30 minutes.',
      quantity: 'Flacon de 20 ml',
      imageUrl: 'images/verite.jpg',
      price: 30,
    },
    {
      id: 2,
      name: 'Potion de transmutation',
      description: 'Divers choix s’offrent à vous pour cette potion qui permet de se tranformer en l’un des animaux de la liste pour une durée de 30 minutes à 4 heures selon la dose (se référer à la notice fournie).',
      quantity: 'Flacon de 80 ml',
      type: typeInput,
      imageUrl: 'images/eternite.jpg',
      price: priceInput
    },
    {
      id: 3,
      name: 'Potion d’éternité',
      description: 'Cette potion possède peut-être un goût insupportable mais permet d’accéder à la vie éternelle. Disponible uniquement dans notre boutique.',
      quantity: 'Flacon de 30 ml',
      imageUrl: 'images/mutation.jpg',
      price: 1260
    },
    {
      id: 4,
      name: 'Licorne',
      description: 'Animal solitaire à l’origine, toutes nos licornes sont élevées au contact de l’homme et peuvent même être montées pour les plus dociles. Possibilité de choisir la couleur sur demande et selon notre stock.',
      quantity: '1 adulte',
      imageUrl: 'images/licorne.png',
      price: 800
    },
    {
      id: 5,
      name: 'Dragon',
      description: 'Récupérés par nos soins dans les terres oubliées des monts Oural dès leur plus jeune âge, nos dragons ne sont livrés qu’après un entretien poussé avec son futur maître, pour des raisons de sécurité évidentes.',
      quantity: '1 adulte',
      imageUrl: 'images/dragon.jpeg',
      price: 2500
    },
    {
      id: 6,
      name: 'Phœnix',
      description: 'Majestueux, intelligent et surtout attachant, le phœnix est un animal très fidèle envers son maître mais qui aime aussi garder sa part d’indépendance et de liberté.',
      quantity: '1 adulte',
      imageUrl: 'images/animal_phoenix.png',
      price: 700
    },
    {
      id: 7,
      name: 'Griffon',
      description: 'Bien qu’impressionnant, le griffon reste un animal docile et facilement domesticable. Il pourra autant être pour vous un compagnon de jeu qu’un redoutable garde du corps.',
      quantity: '1 adulte',
      imageUrl: 'images/griffon.jpg',
      price: 1200
    },
    {
      id: 8,
      name: 'Litière pour dragon',
      description: 'Retiens efficacement les odeurs de soufres.',
      quantity: '65 Kg',
      imageUrl: 'images/litieredrag.jpg',
      price: 1200
    },
    {
      id: 9,
      name: 'Chamallows',
      description: 'Friandise préféré des licorne qui ne cesseront de vous en réclamer après y avoir goûter.',
      quantity: '1 Kg',
      imageUrl: 'images/chamallows.jpg',
      price: 29
    },
    {
      id: 10,
      name: 'Lotion pour plumage de griffon',
      description: 'Toujours soucieux de son hygiène, votre griffon sera ravi de recevoir vos soins avec cette lotion qui fera briller son plumage.',
      quantity: '500 ml',
      imageUrl: 'images/lotion.jpg',
      price: 42
    },
    {
      id: 11,
      name: 'Cendrier pour phœnix',
      description: 'Pour sa renaissance, votre phoenix aura la joie de découvrir sa nouvelle vie dans ce joli cendrier douillet.',
      quantity: '1 pièce',
      imageUrl: 'images/cendrier.jpg',
      price: 120
    },
    {
      id: 12,
      name: 'Balai magique',
      description: 'D’une qualité artisanale exceptionnelle, ce balai volant peut atteindre les 120 km/h et grimper jusqu’à 1,2km d’altitude. De plus, pour plus de discrétion, vous pouvez vous en servir pour le ménage.',
      quantity: '1 pièce',
      imageUrl: 'images/balai.jpg',
      price: 170
    },
    {
      id: 13,
      name: 'Cape d’invisibilité',
      description: 'Cette cape de grand standing est confectionnée dans un tissu enchanté de première qualité et vous permettra de vous esquiver de vos soirées mondaines ennuyeuses en toute discrétion.',
      quantity: '1 pièce',
      imageUrl: 'images/cape.jpg',
      price: 179
    },
    {
      id: 14,
      name: 'Baguette magique',
      description: 'Outil indispensable pour exécuter tous vos sorts, réalisé dans une essence de bois venue d’une forêt enchantée tenue secrète.',
      quantity: '1 pièce',
      imageUrl: 'images/baguette.jpg',
      price: 220
    },
    {
      id: 15,
      name: 'Haricots magiques bio',
      description: 'Après de longues expérimentations, nous avons réussi à reproduire avec un procédé totalement naturel les fameux haricots magiques.',
      quantity: '2 pièces - temps de pousse variable',
      imageUrl: 'images/haricot.jpg',
      price: 79
    },
    {
      id: 16,
      name: 'Formule de téléportation',
      description: 'Cette formule à laquelle vous rajouterait votre destination vous permettra de vous téléporter dans toutes les directions dans un rayon de 12km.',
      quantity: 'Utilisable 12 fois',
      imageUrl: 'images/parchemin.jpg',
      price: 96
    },
    {
      id: 17,
      name: 'Formule d’invisibilité',
      description: 'Encore en phase de développement, cette formule permet de rendre votre corps invisible pour une durée de 45 minutes. Attention, cette formule ne rend pas encore vos vêtements et accessoires invisibles bien que nous y travaillons d’arrache-pied.',
      quantity: 'Utilisable 8 fois',
      imageUrl: 'images/parchemin.jpg',
      price: 29
    },
    {
      id: 18,
      name: 'Invocation de démon',
      description: 'Cette formule est à manipuler avec précaution car elle permet d’invoquer aléatoirement l’un des 7 démons de l’apocalypse pour une durée de 7 heures. Attention, ce sort n’est pas à mettre entre toute les mains !!',
      quantity: 'Utilisable 7 fois',
      imageUrl: 'images/parchemin.jpg',
      price: 777
    },
    {
      id: 19,
      name: 'Formule de résurrection',
      description: 'Cette formule indispensable à tout bon sorcier guérisseur n’est utilisable qu’une fois sur chaque âme mais redonne toute sa vitalité à l’être choisi.',
      quantity: 'Usage unique',
      imageUrl: 'images/parchemin.jpg',
      price: 99
    },
    {
      id: 20,
      name: 'Formule de désenchantement',
      description: 'Cette formule très pratique permet d’annuler tous les sorts et toutes les potions appliqués sur un individu choisit durant l’incantation.',
      quantity: 'Usage unique',
      imageUrl: 'images/parchemin.jpg',
      price: 99
    }
  ],
  productsIdInCart = [];

  if(cartItemAdded==false){
    $('#infoEmptyCart').text('Votre panier est vide.');
  }

  //fonction servant à ajouter des produits dans le panier en fonction des variables passées en paramètre
  $(".addToCartBtn").click(function(){
    //Variable de récupération de l'ID du bouton cliqué (Ajouter au panier)
    var idProduct = $(this).attr('id');
    alert($.inArray(idProduct, productsIdInCart[idProduct]));
    // if (idProduct!=$.inArray($(this).attr('id'), productsIdInCart)&&productsIdInCart){//compare les id de l'objet cliqué s'ils existent déjà dans la liste
    //Extraction des informations de la liste la liste
    var urlById = products[idProduct].imageUrl;//adresse de l'image
    var nameById = products[idProduct].name;//nom du produit
    var quantityById = products[idProduct].quantity;//quantités (flacon,pièce,etc)
    var descriptionById = products[idProduct].description;//descriptif
    var smallDescriptById = descriptionById.slice(0, descriptionById.indexOf(' '))+'...';//descriptif réduit au premier mot de suivi de '...'
    var priceById = products[idProduct].price;//prix
    var productAdded = document.createElement('div');//Variable servant à créer le container pour l'injection html
    productAdded.className = idProduct+'_productAdded';
    productAdded.innerHTML = `<div class="row">
                                <div class="col-md-3"><img id="productImage" class="img-fluid mx-auto d-block image" src="${urlById}" alt="product_image"></div>
                                <div class="col-md-8">
                                <div class="info">
                                <div class="row">
                                <div class="col-md-5 product-name">
                                <div class="product-name"><a href="#">${nameById}</a>
                                <div class="product-info">
                                <div>Nombre : </div><div id="quantified">${quantityById}</div>
                                <div>Détail : <a class="tooltip-test" href="#" title="${descriptionById}" >${smallDescriptById}</a></div>
                                </div>
                                </div>
                                </div>
                                <div class="col-md-4 quantity">
                                <label for="quantity">Quantité :</label><input id="quantity" type="number" value ="1" class="form-control quantity-input"></div>
                                <div class="col-md-3 price"><span>${priceById} €</span></div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div class="dropdown-divider"></div>`;
    cartWrapper.append(productAdded);//Injection dans la page html au niveau de cartWrapper(id="product")
    productsIdInCart.push(idProduct);
    // } else {
    //   $('#quantity').value++;
    // }
  });
  //fin partie Jeffen--------------------------------------------------------------------------------------------
  // partie Jonjon--------------------------------------------------------------------------------------------

  $( "input[type=radio]" ).on( "click",function(){
    var choice = document.querySelector("input[name=choice]:checked").value;
    $("#transmut").text("Prix : " + choice+" €");
  })


  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function CBPFWTabs( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }

  CBPFWTabs.prototype.options = {
    start : 0
  };

  CBPFWTabs.prototype._init = function() {
    // tabs elemes
    this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
    // content items
    this.items = [].slice.call( this.el.querySelectorAll( '.content > section' ) );
    // current index
    this.current = -1;
    // show current content item
    this._show();
    // init events
    this._initEvents();
  };

  CBPFWTabs.prototype._initEvents = function() {
    var self = this;
    this.tabs.forEach( function( tab, idx ) {
      tab.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        self._show( idx );
      } );
    } );
  };

  CBPFWTabs.prototype._show = function( idx ) {
    if( this.current >= 0 ) {
      this.tabs[ this.current ].className = '';
      this.items[ this.current ].className = '';
    }
    // change current
    this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
    this.tabs[ this.current ].className = 'tab-current';
    this.items[ this.current ].className = 'content-current';
  };

  // add to global namespace
  //Fin Jonjon--------------------------------------------------------------------------------------------
  window.CBPFWTabs = CBPFWTabs;
  // fin partie Jonjon
  //début partie Yacine--------------------------------------------------------------------------------------------
  // ===== Scroll haut de page ====
  $(function(){
  	$("#lientop").click(function(){
      	$("html, body").animate({scrollTop: 0},"slow");
      });
  });
  //fin partie Yacine--------------------------------------------------------------------------------------------
});

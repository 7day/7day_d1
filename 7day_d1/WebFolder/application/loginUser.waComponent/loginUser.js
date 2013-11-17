
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'loginUser';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var entra = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	entra.click = function entra_click (event)// @startlock
	{// @endlock
        //Verifico la connessione al DB
        //Creo utente di prova
         
        //indexMenu.utenteDiProva();
      
        var utente=[];
		var db=indexMenu.testdb($$(getHtmlId('aziende')).getValue());
		if(db==0)
		{
			alert("DataBase non configurato. Impossibile proseguire");
			return;
		}
        
        utente=indexMenu.loginD1($$(getHtmlId('aziende')).getValue(),$$(getHtmlId('d1coduten')).getValue(), $$(getHtmlId('d1genpass')).getValue());

        if(utente[0]==0)
        	alert("Utente non trovato");
        else
        {
        	//CurDate.dateFormat("DD/MM/YYYY");
        	var dataSessione = new Date();
        	
        	//Creo la sessione di lavoro
        	var progsess=indexMenu.userSc(utente,dataSessione.dateFormat("DD/MM/YYYY"));
        	if(utente[3]=="AM")
        	{
        		//Richiamo il menù dell'ammistratore del sistema
        		$$('main1').loadComponent({path: '/application/indexMenuAm.waComponent', userData: {utente: utente, progsess: progsess}});
        	}
			
        
        	
        }
        
       
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_entra", "click", entra.click, "WAF");
	// @endregion// @endlock

		if(typeof(data.userData) == "undefined")
		{
			window.location='/indexMenu.waPage';
		}
		       

	};// @lock


}// @startlock
return constructor;
})();// @endlock

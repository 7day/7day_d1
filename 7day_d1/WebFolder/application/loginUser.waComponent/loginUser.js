
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
		var db=indexMenu.testdb(1);
		if(db==0)
		{
			alert("DataBase non configurato. Impossibile proseguire");
			return;
		}
        
        alert(indexMenu.loginD1(1,$$(getHtmlId('d1coduten')).getValue(), $$(getHtmlId('d1genpass')).getValue()));
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

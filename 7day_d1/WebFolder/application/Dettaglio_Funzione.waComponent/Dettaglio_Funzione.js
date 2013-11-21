
(function Component (id) {

// Add the code that needs to be shared between components here

function constructor (id) {

	blur_err="false";
	// @region beginComponentDeclaration
	var $comp = this;
	this.name = 'Form_Mansioni';
	// @endregion

	this.load = function (data) {
    
    console.log(data.userData);
	console.log(data.userData.modalita);
	
	var cur_elem=data.userData.cur;
	
	console.log(cur_elem);
	
	CheckDB();
	
	if (data.userData.modalita=="update"){
		$$(getHtmlId('Eli_mans')).show();
	}else{
		$$(getHtmlId('Eli_mans')).hide();
	}
	
	// @region namespaceDeclaration
	var Drop_Dati = {};	// @buttonImage
	var Eli_mans = {};	// @buttonImage
	var d1codfunz = {};	// @textField
	var d1desfudl = {};	// @textField
	var d1gennote = {};	// @textField
	var d1desfubr = {};	// @textField
	var ConfermaDati = {};	// @buttonImage
	// @endregion

	// eventHandlers

	Drop_Dati.click = function Drop_Dati_click (event)
	{
		$$(getHtmlId('Eli_mans')).hide();
		$$('component1').removeComponent();
		$$("tabView3").selectTab(1);
	
	};

	Eli_mans.click = function Eli_mans_click (event)
	{
		var scelta=window.confirm("Elimino l'elemento selezionato?");
		
		if (scelta){
			var id=cur_elem.d1codfunz;
			console.log("id"+id);
			
			var connectionParams= myDb.connetti();
			
			mansioni3= myDb.delAsync({
	                'onSuccess': function (result) {
	                   console.log("ok");
	                   Refresh_Ricerca("anagrafica");
	                   sources.mansioni3.sync();
	                },  
	                'onError': function (error) {
	                   alert('errore');
	                    console.log("errore");
	                },  
	                'params': [connectionParams,'d1anagfunz',id,0]
	             }); 
		            		
			Refresh_Ricerca("anagrafica"); 
			this.hide();
			$$("tabView3").selectTab(1);
		} 
	};
	
	d1codfunz.blur = function d1codfunz_blur (event)
	{
		if (this.getValue()=="0"){
			console.log("zero");
		  	alert("il campo non accetta 0");
		  	this.focus();
		}else{
			if (this.getValue()!="" && isAllAlfaNum(this.getValue(),true)!=true){
				alert("questo campo non accetta caratteri speciali");
				this.setValue("");
				this.focus();
			}
		}
	};


	d1desfudl.focus = function d1desfudl_focus (event)
	{
		chkIndDescBlur(this);
	};

	d1desfudl.blur = function d1desfudl_blur (event)
	{
		chkIndDescBlur(this);
		
	};
	

	d1gennote.focus = function d1gennote_focus (event)
	{
		chkIndDescBlur(this);
	};


	d1gennote.blur = function d1gennote_blur (event)
	{
		chkIndDescBlur(this);
		
	};
	

	d1desfubr.blur = function d1desfubr_blur (event)
	{
		chkIndDescBlur(this);

	};
	
	
	if (data.userData.modalita=='update'){
	
		$$(getHtmlId('d1codfunz')).setValue(data.userData.dati.d1codfunz);
		$$(getHtmlId('d1codfunz')).setReadOnly(true);
		if(data.userData.dati.d1codfunz=="0"){
			$$(getHtmlId('d1desfubr')).setReadOnly(true);
		}
		$$(getHtmlId('d1desfubr')).setValue(data.userData.dati.d1desfubr);
		
		
		$$(getHtmlId('d1desfudl')).setValue(data.userData.dati.d1desfudl);
		$$(getHtmlId('d1gennote')).setValue(data.userData.dati.d1gennote);
	}else{
		
		if (data.userData.search_id!=''){
			$$(getHtmlId('d1codfunz')).setValue(data.userData.search_id);
		}
		if(data.userData.search_desc!=''){
			$$(getHtmlId('d1desfubr')).setValue(data.userData.search_desc);
			
		}
	
	}
	
	ConfermaDati.click = function ConfermaDati_click (event)
	{
		chkIndDescBlur($$(getHtmlId('d1desfubr')));
		chkIndDescBlur($$(getHtmlId('d1gennote')));
		chkIndDescBlur($$(getHtmlId('d1desfudl')));
		
		var elem = document.getElementById($$(getHtmlId('d1codfunz')).id);
		
		//fare funzione
		if ($$(getHtmlId('d1codfunz')).getValue()=="0"){
			console.log("zero");
		  	alert("il campo non accetta 0");
		  	$$(getHtmlId('d1codfunz')).focus();
		}else{
			if ($$(getHtmlId('d1codfunz')).getValue()!="" && isAllAlfaNum($$(getHtmlId('d1codfunz')).getValue(),true)!=true){
				alert("questo campo non accetta caratteri speciali");
				errorColorCode();
			blur_err="true"
			
			}else{
				elem.setAttribute("style","border:1px solid #999999");

			}
		}
		
		//
		
		if (blur_err=="false"){
		
			if ($$(getHtmlId('d1desfubr')).getValue()!='' && $$(getHtmlId('d1codfunz')).getValue()!=''){
				console.log("dati inviati alle stored"+$$(getHtmlId('d1codfunz')).getValue(),$$(getHtmlId('d1desfubr')).getValue(),$$(getHtmlId('d1desfudl')).getValue(),$$(getHtmlId('d1gennote')).getValue());
				var connectionParams = myDb.connetti();
				if (data.userData.modalita=='update'){			
					console.log("update");
					
					myDb.updateAsync({
			                'onSuccess': function (result) {
			                   console.log("ok");
			                   Refresh_Ricerca("anagrafica");
			                   $$("tabView3").selectTab(1);
			                },  
			                'onError': function (error) {
								CheckDB();
			                   	alert('operazione non riusciuta ')
			                    console.log("errore");
			                },  
			                'params': [connectionParams,'d1anagfunz',$$(getHtmlId('d1codfunz')).getValue(),$$(getHtmlId('d1desfubr')).getValue(),$$(getHtmlId('d1desfudl')).getValue(),$$(getHtmlId('d1gennote')).getValue(),0,0,0,0,0,0,0,0]
			             });
				
				}else{	
				
				console.log("insert");
				myDb.insertAsync({
			                'onSuccess': function (result) {                  
			            		console.log("insert ok");
			            		$$('component1').removeComponent();
								Refresh_Ricerca("anagrafica");
								$$("tabView3").selectTab(1);
			                },  
			                'onError': function (error) {
			                	CheckDB();
			                	console.log(error);
			                  	alert('operazione insert non riusciuta ');
			                 
			                    
			               		/*console.log($$(getHtmlId('d1desfubr')).getValue());
						
			                    var scelt=window.confirm("l'elemento è gia presente vuoi aggiornarlo?");
			                    	if (scelt){
			                    		
			                    		myDb.updateAsync({
							                'onSuccess': function (result) {
							                   console.log("ok");
							                   Refresh_Ricerca("anagrafica");
							                   $$("tabView3").selectTab(1);
							                },  
							                'onError': function (error) {
							                	CheckDB();
							                   alert('update non riusciuta inserire tutti i campi');
							                    console.log("errore");
							                },  
							                'params': [connectionParams,'d1anagfunz',$$(getHtmlId('d1codfunz')).getValue(),$$(getHtmlId('d1desfubr')).getValue(),$$(getHtmlId('d1desfudl')).getValue(),$$(getHtmlId('d1gennote')).getValue(),0,0,0,0,0,0,0,0]
							             	});
							             	
							             }*/
		 					   
			                  },  
			                'params': [connectionParams,'d1anagfunz',$$(getHtmlId('d1codfunz')).getValue(),$$(getHtmlId('d1desfubr')).getValue(),$$(getHtmlId('d1desfudl')).getValue(),$$(getHtmlId('d1gennote')).getValue(),0,0,0,0,0,0,0,0]
			             });
			        
			   
				}	
				$$(getHtmlId('Eli_mans')).hide();
				Refresh_Ricerca("anagrafica");
			}else{
				alert("inserisci i campi obbligatori");	
			}
		
		}else{
			 	alert("prima di salvare, correggi i campi non validi");
		}
		blur_err="false";
	           	
	};

	// @region eventManager
	WAF.addListener(this.id + "_Drop_Dati", "click", Drop_Dati.click, "WAF");
	WAF.addListener(this.id + "_Eli_mans", "click", Eli_mans.click, "WAF");
	WAF.addListener(this.id + "_d1gennote", "focus", d1gennote.focus, "WAF");
	WAF.addListener(this.id + "_d1desfudl", "focus", d1desfudl.focus, "WAF");
	WAF.addListener(this.id + "_d1codfunz", "blur", d1codfunz.blur, "WAF");
	WAF.addListener(this.id + "_d1desfudl", "blur", d1desfudl.blur, "WAF");
	WAF.addListener(this.id + "_d1gennote", "blur", d1gennote.blur, "WAF");
	WAF.addListener(this.id + "_d1desfubr", "blur", d1desfubr.blur, "WAF");
	WAF.addListener(this.id + "_ConfermaDati", "click", ConfermaDati.click, "WAF");
	// @endregion

	};
	
	
	function Refresh_Ricerca(tipo){
		if (tipo=="anagrafica"){
			
			
				var connectionParams= myDb.connetti();
				mansioni3 = myDb.search(connectionParams,'d1anagfunz','d1codfunz','d1desfubr',$$('component3_search_d1codfunz').getValue(),$$('component3_search_d1desfubr').getValue(),0,0,0,0,0,0,0,0);
				sources.mansioni3.sync();
				
			}
			sources.mansioni3.select(-1);	
	}

function CheckDB(){
		try {
			myDb.testconnessione();
 		}
		catch(e) { // in case of error
    		alert("impostare i dati della connessione al database nel menu settings");
    		document.location.href = "/Default.waPage/index.html";
 		}
 	}
}
return constructor;
})();

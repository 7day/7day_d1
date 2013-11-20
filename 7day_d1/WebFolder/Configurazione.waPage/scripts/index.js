
WAF.onAfterInit = function onAfterInit() {

// @region namespaceDeclaration
	var imageButton2 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	var d1genema3 = {};	// @textField
	var d1genema2 = {};	// @textField
	var d1genema1 = {};	// @textField
	var d1gendb = {};	// @textField
	var d1genhost = {};	// @textField
	var d1gencitt = {};	// @textField
	var d1genindi = {};	// @textField
	var d1genuser = {};	// @textField
	var d1genprov = {};	// @textField
	var d1genrags = {};	// @textField
	var d1genssl = {};	// @textField
	var d1genport = {};	// @textField
	var d1gentel = {};	// @textField
	var d1genfax = {};	// @textField
	var d1gencap = {};	// @textField
	var d1codazie = {};	// @textField
	var documentEvent = {};	// @document
// @endregion

// eventHandlers
	blur_err="false";
	
	imageButton2.click = function imageButton2_click (event)
	{
		document.location.href = "/Default.waPage/index.html";
	};

	imageButton1.click = function imageButton1_click (event)
	{
		
		if($$('d1codazie').getValue()== ""){
					
					$$("tabView1").selectTab(1);
					$$('d1codazie').focus();
					alert("inserisci id azienda");		
		}else{	
						
				sources.parametri.d1codazie=$$('d1codazie').getValue();
			
				
				if($$('d1genrags').getValue()==''){
					sources.parametri.d1genrags=null; 
				}else{

					sources.parametri.d1genrags=$$('d1genrags').getValue();
				}
	 
			 	if($$('d1genindi').getValue()==''){
					sources.parametri.d1genindi=null; 
				}else{

					sources.parametri.d1genindi=$$('d1genindi').getValue();
				}
				 
				if($$('d1gencitt').getValue()==''){
					sources.parametri.d1gencitt=null; 
				}else{

					sources.parametri.d1gencitt=$$('d1gencitt').getValue();
				}
				 
				if($$('d1genprov').getValue()==''){
					sources.parametri.d1genprov=null; 
				}else{

					sources.parametri.d1genprov=$$('d1genprov').getValue();
				}
				 
				if($$('d1gencap').getValue()==''){
					sources.parametri.d1gencap=null; 
				}else{

					sources.parametri.d1gencap=$$('d1gencap').getValue();
				}
				 
				if($$('d1gentel').getValue()==''){
					sources.parametri.d1gentel=null; 
				}else{

					sources.parametri.d1gentel=$$('d1gentel').getValue();
				}
				  
				if($$('d1genfax').getValue()==''){
					sources.parametri.d1genfax=null; 
				}else{

					sources.parametri.d1genfax=$$('d1genfax').getValue();
				}
				  
				if($$('d1genema1').getValue()==''){
					sources.parametri.d1genema1=null; 
				}else{

					sources.parametri.d1genema1=$$('d1genema1').getValue();
				}
				 
				if($$('d1genema2').getValue()==''){
					sources.parametri.d1genema2=null; 
				}else{

					sources.parametri.d1genema2=$$('d1genema2').getValue();
				}
				 
				if($$('d1genema3').getValue()==''){
					sources.parametri.d1genema3=null; 
				}else{

					sources.parametri.d1genema3=$$('d1genema3').getValue();
				}
				 
				if($$('d1genhost').getValue()==''){
					sources.parametri.d1genhost=null; 
				}else{

					sources.parametri.d1genhost=$$('d1genhost').getValue();
				}
				 
				if($$('d1genuser').getValue()==''){
					sources.parametri.d1genuser=null; 
				}else{

					sources.parametri.d1genuser=$$('d1genuser').getValue();
				}
				 
				if($$('d1genpass').getValue()==''){
					sources.parametri.d1genpass=null; 
				}else{

					sources.parametri.d1genpass=$$('d1genpass').getValue();
				}
				 
				if($$('d1gendb').getValue()==''){
					sources.parametri.d1gendb=null; 
				}else{

					sources.parametri.d1gendb=$$('d1gendb').getValue();
				}
				   
				if($$('d1genport').getValue()==''){
					sources.parametri.d1genport=null; 
				}else{

					sources.parametri.d1genport=$$('d1genport').getValue();
				}
				 
				if($$('d1genssl').getValue() ==''){
					sources.parametri.d1genssl=null; 
				}else{

					sources.parametri.d1genssl=$$('d1genssl').getValue() ;
				}
				 
				if($$('d1desvar1').getValue()==''){
					sources.parametri.d1desvar1=null; 
				}else{

					sources.parametri.d1desvar1=$$('d1desvar1').getValue();
				}
				 
				if($$('d1desvar2').getValue()==''){
					sources.parametri.d1desvar2=null; 
				}else{

					sources.parametri.d1desvar2=$$('d1desvar2').getValue();
				}
				 
				if($$('d1desvar3').getValue()==''){
					sources.parametri.d1desvar3=null; 
				}else{

					sources.parametri.d1desvar3=$$('d1desvar3').getValue();
				}
			
			
			chkMailBlur($$('d1genema1'));
			chkMailBlur($$('d1genema2'));
			chkMailBlur($$('d1genema3'));
			chkIndDescBlur($$('d1genindi'));
			chkLocazioneBlur($$('d1gencitt'));
			chkLocazioneBlur($$('d1genprov'));
			chkCoNoBlur($$('d1genrags'));
			chkCapBlur($$('d1genport'));
			chkCapBlur($$('d1gentel'));
			chkCapBlur($$('d1gencap'));
			chkCapBlur($$('d1codazie'));
			chkSSL($$('d1genssl'));
			chkAlfa($$('d1gendb'));
			chkAlfa($$('d1genhost'));
			chkAlfa($$('d1genuser'));
			chkCapBlur($$('d1codazie'));
			chkCapBlur($$('d1genfax'));
			chkCapBlur($$('d1gentel'));
						
			if (blur_err=="false"){
				sources.parametri.save({
			        onSuccess: function(event) {
			                // displays success message in a DisplayError area
			            alert("dati salvati");
			        },
			        onError: function(error) {
			                // displays error message in a DisplayError area
			            //$("#errorDiv1").html(error['error'][0].message);
			            alert("errore nel salvataggio dati")
			        }
			    	});
			 }else{
			 	alert("prima di salvare, correggi i campi non validi");
			 }
			
		}
		blur_err="false";
	};

	d1genema3.blur = function d1genema3_blur (event)
	{
		chkMailBlur(this);
	};

	d1genema2.blur = function d1genema2_blur (event)
	{
		chkMailBlur(this);
	};

	d1genema1.blur = function d1genema1_blur (event)
	{
		chkMailBlur(this);
	};
	

	d1gendb.blur = function d1gendb_blur (event)
	{
		chkAlfa($$('d1gendb'));
	};

	d1genhost.blur = function d1genhost_blur (event)
	{
		chkAlfa($$('d1genhost'));
	};
	
	$("#d1gencitt").keypress(function() {
			return Keypress_Alfa(event.charCode);
	});
	

	d1gencitt.blur = function d1gencitt_blur (event)
	{
		chkLocazioneBlur(this);
	};
	
	

	d1genindi.blur = function d1genindi_blur (event)
	{
		chkIndDescBlur(this);
	};

	d1genuser.blur = function d1genuser_blur (event)
	{
		chkAlfa($$('d1genuser'));
		
	};
	
	$("#d1genprov").keypress(function() {
			return Keypress_Alfa(event.charCode);
	});
     
	d1genprov.blur = function d1genprov_blur (event)
	{
		chkLocazioneBlur(this);
	};
	

	$("#d1genrags").keypress(function() {
			return Keypress_Alfa(event.charCode);
	});

     

	d1genrags.blur = function d1genrags_blur (event)
	{
		chkCoNoBlur(this);
	};
	
	
	$("#d1genssl").keypress(function() {
			return Keypress_Num(event.charCode);
	});

     
	d1genssl.blur = function d1genssl_blur (event)
	{
		chkSSL($$('d1genssl'));
		
	};

	
	$("#d1genport").keypress(function() {
			return Keypress_Num(event.charCode);
	});

	

	d1genport.blur = function d1genport_blur (event)
	{
		chkCapBlur(this);
		
	};
	
	
	  $("#d1gentel").keypress(function() {
			return Keypress_Num(event.charCode);
	});

	d1gentel.blur = function d1gentel_blur (event)
	{
		chkCapBlur(this);
	};
	
     $("#d1genfax").keypress(function() {
			return Keypress_Num(event.charCode);
	});
	
     
	d1genfax.blur = function d1genfax_blur (event)
	{
		chkCapBlur(this);
	};
	
    $("#d1gencap").keypress(function() {
			return Keypress_Num(event.charCode);
	});
     
	d1gencap.blur = function d1gencap_blur (event)
	{
		chkCapBlur(this);
	};
	

	d1codazie.keydown = function d1codazie_keydown (event)
	{
		return Keypress_Num(event);
	};

	d1codazie.blur = function d1codazie_blur (event)
	{
		chkCapBlur(this);
	};
	
	d1desvar2.keydown = function d1desvar2_keydown (event)
	{
		return Keypress_AlfaNumExt(event);
	};

	documentEvent.onLoad = function documentEvent_onLoad (event)
	{
		console.log(sources.parametri.length);
		if (sources.parametri.length==0){
			console.log("non esiste una riga ora la creo");
			sources.parametri.addNewElement();
			sources.parametri.d1codazie=1;
			sources.parametri.save();
		}else{
			console.log("esiste una riga");
		}
	};

	
	

// @region eventManager
	WAF.addListener("d1codazie", "keydown", d1codazie.keydown, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("d1genema3", "blur", d1genema3.blur, "WAF");
	WAF.addListener("d1genema2", "blur", d1genema2.blur, "WAF");
	WAF.addListener("d1genema1", "blur", d1genema1.blur, "WAF");
	WAF.addListener("d1genport", "blur", d1genport.blur, "WAF");
	WAF.addListener("d1gencap", "blur", d1gencap.blur, "WAF");
	WAF.addListener("d1codazie", "blur", d1codazie.blur, "WAF");
	WAF.addListener("d1genfax", "blur", d1genfax.blur, "WAF");
	WAF.addListener("d1gentel", "blur", d1gentel.blur, "WAF");
	WAF.addListener("d1genssl", "blur", d1genssl.blur, "WAF");
	WAF.addListener("d1gendb", "blur", d1gendb.blur, "WAF");
	WAF.addListener("d1genhost", "blur", d1genhost.blur, "WAF");
	WAF.addListener("d1genuser", "blur", d1genuser.blur, "WAF");
	WAF.addListener("d1genprov", "blur", d1genprov.blur, "WAF");
	WAF.addListener("d1gencitt", "blur", d1gencitt.blur, "WAF");
	WAF.addListener("d1genindi", "blur", d1genindi.blur, "WAF");
	WAF.addListener("d1genrags", "blur", d1genrags.blur, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};

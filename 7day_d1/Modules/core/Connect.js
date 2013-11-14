﻿/*  Questo modulo servirà per recuperare i parametri di connessione al DB (Mysql) */exports.connectParam = function connectParam (d1codazie) {		/* In base all'azienda recuperemo il record di configurazione corretto */		/*        Aggancio il file di configurazione che differenza cì tra find e query? find restituisce il        primo record, query restituisce più record.	              Se uso il comando find i campi mi vengono restituiti nel tipo in cui sono stati definiti.       Con il comdo query vengono restituiti degli array... Perchè?       	*/			var connectionParams;	var parametri = ds.Parametri.find("d1codazie == :1", d1codazie);	if(parametri!=null)	{				/* recupero i parametri */		connectionParams = {	                          hostname: parametri.d1genhost,	                          user: parametri.d1genuser,	                          password: parametri.d1genpass,	     	                  database: parametri.d1gendb,	     	          	      port: parametri.d1genport,	                          	                          ssl: parametri.d1genssl==0?false:true	                       };				                             	    console.log("connetti a "+connectionParams);	}	        return connectionParams;        };exports.connectTest = function connectTest (connectionParams) {	/* Verifico la connessione al DB */	try	{		var dbconn = require('waf-mysql');		var connection= dbconn.connect(connectionParams);		var ok=connection.isConnected;		connection.close();    }    catch(err)	{			return false;    }		return ok;	}
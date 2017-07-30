'use strict';

fetch('https://restcountries.eu/rest/v2/all', { method: 'GET',
   headers: new Headers(),
   mode: 'cors',
   cache: 'default' }).then(function(response) { 
	return response.json();
}).then(function(countries) {
	$.each(countries, function(key, value) {
	    $('#countrySelector').append('<option value=' + value.name + '>' + value.name + '</option>');
	}); 
});


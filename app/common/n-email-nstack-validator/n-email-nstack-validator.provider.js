(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nEmailNStackValidator')
		.provider('nEmailNStackValidator', nEmailNStackValidator);
	
	function nEmailNStackValidator() {

		// Private variables

		// Default options (configurable in confing phase)
		var settings = {
			appId: '',
			apiKey: ''
		};

		// Getter / Setter
		this.configure = function(config) {
			for(var key in config) {
				if(config.hasOwnProperty(key) && settings.hasOwnProperty(key)) {
					settings[key] = config[key];
				}
			}
		};
		
		/* @ngInject */
		this.$get = function($q, $http, $exceptionHandler) {
			return {
				validate: validate
			};
			
			function validate(email) {
				
				if(settings.appId.length < 1 || settings.apiKey.length < 1) {
					throw new $exceptionHandler('missing appId or apiKey', 'Use the nEmailNStackValidatorProvider to configure this during config phase.');
				}
				
				var deferred = $q.defer();
				
				var url = 'https://nstack.like.st/api/v1/validator/email';
				var headers = {
					'X-Application-Id': settings.appId,
					'X-Rest-Api-Key': settings.apiKey
				};
				
				$http.get(url, {headers: headers, params: {email: email}})
					.then(function validateEmailSuccess(response) {
						deferred.resolve(response.data.data);
					})
					.catch(function validateEmailError(error) {
						deferred.reject(error.data.message);
					});
				
				return deferred.promise;
			}
		};

	}

})();
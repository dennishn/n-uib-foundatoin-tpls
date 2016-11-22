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
	  	.directive('nEmailNstackValidator', nEmailNStackValidator);

	/* @ngInject */
	function nEmailNStackValidator(nEmailNStackValidator, $q) {
		var directive = {
			link: link,
			restrict: 'A',
			require: 'ngModel'
		};

		return directive;

		function link(scope, element, attrs, ngModelCtrl) {

			ngModelCtrl.$asyncValidators.nStackEmail = function(value) {

				var deferred = $q.defer();

				if(!value) {
					deferred.resolve();
					return deferred.promise;
				}

				nEmailNStackValidator.validate(value)
					.then(function(result) {
						if(ngModelCtrl.nStackEmailMessage) {
							delete ngModelCtrl.nStackEmailMessage;
						}
						deferred.resolve(result);
					}).catch(function(e) {
						ngModelCtrl.nStackEmailMessage = e;
						deferred.reject(e);
					});

				return deferred.promise;
			};
		}
	}
})();

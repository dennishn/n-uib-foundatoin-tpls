(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nEmailAsyncValidator')
	  	.directive('nEmailAsyncValidator', NEmailAsyncValidator);

	/* @ngInject */
	function NEmailAsyncValidator(NEmailAsyncValidator) {
		var directive = {
			link: link,
			restrict: 'A',
			require: 'ngModel'
		};

		return directive;

		function link(scope, element, attrs, ngModelCtrl) {
			
			console.log(ngModelCtrl.$validators)
			
			ngModelCtrl.$validators.email = function(modelValue, viewValue) {
				
			};
			
			ngModelCtrl.$asyncValidators.asyncEmail = function(modelValue, viewValue) {
				return NEmailAsyncValidator.validate(viewValue);
			};
			
			// ngModel.$asyncValidators.username = function(modelValue, viewValue) {
			// 	return $http.post('/username-check', {username: viewValue}).then(
			// 		function(response) {
			// 			if (!response.data.validUsername) {
			// 				return $q.reject(response.data.errorMessage);
			// 			}
			// 			return true;
			// 		}
			// 	);
			// };
		}
	}
})();

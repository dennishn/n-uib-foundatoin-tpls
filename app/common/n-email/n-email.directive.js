(function() {
	'use strict';
	
	/**
	 * @name nEmail
	 * @author Dennis Haulund Nielsen <dhni@nodes.dk>
	 * @description
	 * Overwrites the build-in validation in browsers to be more in line with our server-side email validation.
	 */
	angular
		.module('nEmail')
	  	.directive('nEmail', NEmail);

	/* @ngInject */
	function NEmail() {
		
		var directive = {
			link: link,
			restrict: 'A',
			require: 'ngModel'
		};

		return directive;

		function link(scope, element, attrs, ngModelCtrl) {
			var EMAIL_REGEXP = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
			ngModelCtrl.$validators.email = function(value) {
				return ngModelCtrl.$isEmpty(value) || EMAIL_REGEXP.test(value);
			};
		}
	}
})();

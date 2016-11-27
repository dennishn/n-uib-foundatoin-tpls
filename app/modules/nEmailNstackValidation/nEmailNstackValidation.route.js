(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nEmailNstackValidation')
		/* @ngInject */
		.config(function($stateProvider) {

			var NEmailNstackValidation = {
				name: 'application.nemailnstackvalidator',
				url: '/nemailnstackvalidator',
				views: {
					'application@application': {
						templateUrl: 'modules/nEmailNstackValidation/nemailnstackvalidation.template.html',
						controller: 'NEmailNstackValidationController',
						controllerAs: 'nemailnstackvalidator'
					}
				}
			};

			$stateProvider.state(NEmailNstackValidation);
		});
})();

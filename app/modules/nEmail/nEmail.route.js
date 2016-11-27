(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nEmailModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NEmail = {
				name: 'application.nemail',
				url: '/nemail',
				views: {
					'application@application': {
						templateUrl: 'modules/nEmail/nemail.template.html',
						controller: 'NEmailController',
						controllerAs: 'nemail'
					}
				}
			};

			$stateProvider.state(NEmail);
		});
})();

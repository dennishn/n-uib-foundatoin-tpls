(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationExtras')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationExtras = {
				name: 'application.nfoundationextras',
				url: '/nfoundationextras',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationExtras/nfoundationextras.template.html',
						controller: 'NFoundationExtrasController',
						controllerAs: 'nfoundationextras'
					}
				}
			};

			$stateProvider.state(NFoundationExtras);
		});
})();

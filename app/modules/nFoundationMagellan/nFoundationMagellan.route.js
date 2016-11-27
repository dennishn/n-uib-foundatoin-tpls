(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationMagellanModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationMagellan = {
				name: 'application.nfoundationmagellan',
				url: '/nfoundationmagellan',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationMagellan/nfoundationmagellan.template.html',
						controller: 'NFoundationMagellanController',
						controllerAs: 'nfoundationmagellan'
					}
				}
			};

			$stateProvider.state(NFoundationMagellan);
		});
})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationAnimationExperiment')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationAnimationExperiment = {
				name: 'application.nfoundationanimationexperiment',
				url: '/nfoundationanimationexperiment',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationAnimationExperiment/nfoundationanimationexperiment.template.html',
						controller: 'NFoundationAnimationExperimentController',
						controllerAs: 'nfoundationanimationexperiment'
					}
				}
			};

			$stateProvider.state(NFoundationAnimationExperiment);
		});
})();

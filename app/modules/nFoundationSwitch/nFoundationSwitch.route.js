(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationSwitchModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationSwitch = {
				name: 'application.nfoundationswitch',
				url: '/nfoundationswitch',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationSwitch/nfoundationswitch.template.html',
						controller: 'NFoundationSwitchController',
						controllerAs: 'nfoundationswitch'
					}
				}
			};

			$stateProvider.state(NFoundationSwitch);
		});
})();

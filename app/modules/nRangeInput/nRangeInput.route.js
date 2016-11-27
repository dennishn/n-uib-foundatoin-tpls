(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nRangeInputModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NRangeInput = {
				name: 'application.nrangeinput',
				url: '/nrangeinput',
				views: {
					'application@application': {
						templateUrl: 'modules/nRangeInput/nrangeinput.template.html',
						controller: 'NRangeInputController',
						controllerAs: 'nrangeinput'
					}
				}
			};

			$stateProvider.state(NRangeInput);
		});
})();

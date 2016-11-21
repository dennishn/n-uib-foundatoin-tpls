(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('timepicker')
		/* @ngInject */
		.config(function($stateProvider) {

			var Timepicker = {
				name: 'application.timepicker',
				url: '/timepicker',
				views: {
					'application@application': {
						templateUrl: 'modules/timepicker/timepicker.template.html',
						controller: 'TimepickerController',
						controllerAs: 'timepickerCtrl'
					}
				}
			};

			$stateProvider.state(Timepicker);
		});
})();

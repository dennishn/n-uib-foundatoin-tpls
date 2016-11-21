(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('datepicker')
		/* @ngInject */
		.config(function($stateProvider) {

			var Datepicker = {
				name: 'application.datepicker',
				url: '/datepicker',
				views: {
					'application@application': {
						templateUrl: 'modules/datepicker/datepicker.template.html',
						controller: 'DatepickerController',
						controllerAs: 'datepickerCtrl'
					}
				}
			};

			$stateProvider.state(Datepicker);
		});
})();

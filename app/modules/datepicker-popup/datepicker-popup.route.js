(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('datepickerPopup')
		/* @ngInject */
		.config(function($stateProvider) {

			var DatepickerPopup = {
				name: 'application.datepicker-popup',
				url: '/datepicker-popup',
				views: {
					'application@application': {
						templateUrl: 'modules/datepicker-popup/datepicker-popup.template.html',
						controller: 'DatepickerPopupController',
						controllerAs: 'datepickerPopupCtrl'
					}
				}
			};

			$stateProvider.state(DatepickerPopup);
		});
})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('alert')
		/* @ngInject */
		.config(function($stateProvider) {

			var Alert = {
				name: 'application.alert',
				url: '/alert',
				views: {
					'application@application': {
						templateUrl: 'modules/alert/alert.template.html',
						controller: 'AlertController',
						controllerAs: 'alertCtrl'
					}
				}
			};

			$stateProvider.state(Alert);
		});
})();

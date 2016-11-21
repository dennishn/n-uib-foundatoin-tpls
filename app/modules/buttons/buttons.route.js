(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('buttons')
		/* @ngInject */
		.config(function($stateProvider) {

			var Buttons = {
				name: 'application.buttons',
				url: '/buttons',
				views: {
					'application@application': {
						templateUrl: 'modules/buttons/buttons.template.html',
						controller: 'ButtonsController',
						controllerAs: 'buttonsCtrl'
					}
				}
			};

			$stateProvider.state(Buttons);
		});
})();

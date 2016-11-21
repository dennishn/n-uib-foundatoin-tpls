(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('accordion')
		/* @ngInject */
		.config(function($stateProvider) {

			var Accordion = {
				name: 'application.accordion',
				url: '/accordion',
				views: {
					'application@application': {
						templateUrl: 'modules/accordion/accordion.template.html',
						controller: 'AccordionController',
						controllerAs: 'accordionCtrl'
					}
				}
			};

			$stateProvider.state(Accordion);
		});
})();

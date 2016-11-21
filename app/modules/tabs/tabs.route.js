(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('tabs')
		/* @ngInject */
		.config(function($stateProvider) {

			var Tabs = {
				name: 'application.tabs',
				url: '/tabs',
				views: {
					'application@application': {
						templateUrl: 'modules/tabs/tabs.template.html',
						controller: 'TabsController',
						controllerAs: 'tabsCtrl'
					}
				}
			};

			$stateProvider.state(Tabs);
		});
})();

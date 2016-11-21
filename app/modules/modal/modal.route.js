(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('modal')
		/* @ngInject */
		.config(function($stateProvider) {

			var Modal = {
				name: 'application.modal',
				url: '/modal',
				views: {
					'application@application': {
						templateUrl: 'modules/modal/modal.template.html',
						controller: 'ModalController',
						controllerAs: 'modalCtrl'
					}
				}
			};

			$stateProvider.state(Modal);
		});
})();

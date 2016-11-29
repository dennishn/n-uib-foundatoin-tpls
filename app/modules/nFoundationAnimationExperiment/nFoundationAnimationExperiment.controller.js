(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationAnimationExperiment')
		.controller('NFoundationAnimationExperimentController', NFoundationAnimationExperiment);

	/* @ngInject */
	function NFoundationAnimationExperiment($uibModal) {
		/*jshint validthis: true */
		var vm = this;

		vm.openModal = openModal;
		
		function openModal(referrerId) {
			var modalInstance = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				template: '<div anim-exp-modal-referrer-id="' + referrerId + '" class="anim-exp-modal__content"><p>Look at me, I am the Modal now!</p></div>',
				windowClass: 'anim-exp-modal'
			});

		}
		
	}

})();

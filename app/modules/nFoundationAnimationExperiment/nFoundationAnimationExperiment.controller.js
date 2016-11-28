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
		
		function openModal() {
			var modalInstance = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				template: '<p>Look at me, I am the Modal now!</p>',
				windowClass: 'anim-exp-modal'
			});
		}
		
	}

})();

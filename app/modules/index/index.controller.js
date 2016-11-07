(function() {
	'use strict';

	/**
	 * @name index
	 * @description
	 *
	 * Index Controller
	 */
	angular
		.module('index')
		.controller('ModalCtrl', ModalCtrl)
		.controller('Index', Index);

	/* @ngInject */
	function Index($uibModal) {
		/*jshint validthis: true */
		var vm = this;

		vm.openModal = openModal;
		function openModal(size) {
			var modalInstance = $uibModal.open({
				templateUrl: 'modules/index/modal.inner.template.html',
				controller: 'ModalCtrl',
				controllerAs: '$ctrl',
				size: size
			});

			modalInstance.result.then(function (result) {
				console.info(result);
			}, function (result) {
				console.warn(result);
			});
		}

		vm.alerts = [
			{
				msg: 'success',
				type: 'success'
			},
			{
				msg: 'warning',
				type: 'warning'
			},
			{
				msg: 'alert',
				type: 'alert'
			},
			{
				msg: 'primary',
				type: 'primary'
			},
			{
				msg: 'secondary',
				type: 'secondary'
			}
		];
		vm.addAlert = addAlert;
		vm.closeAlert = closeAlert;
		function addAlert() {
			vm.alerts.push({msg: 'New alert', type: 'default'});
		}
		function closeAlert(i) {
			vm.alerts.splice(i, 1);
		}

		vm.checkBoxModel = {
			default: false,
			success: true,
			warning: false,
			alert: false,
			secondary: true,
			defaultHollow: false,
			successHollow: false,
			warningHollow: false,
			alertHollow: false,
			secondaryHollow: false
		};

		vm.pagerTotal = 64;
		vm.pagerCurrent = 4;

		vm.paginationTotal = 177;
		vm.paginationCurrent = 1;
		vm.paginationMaxSize = 5;
	}

	/* @ngInject */
	function ModalCtrl($uibModalInstance) {
		/*jshint validthis: true */
		var vm = this;

		vm.ok = ok;
		vm.cancel = cancel;

		function ok() {
			$uibModalInstance.close('Closed by OK');
		}

		function cancel() {
			$uibModalInstance.dismiss('Dismissed by Cancel');
		}

	}

})();

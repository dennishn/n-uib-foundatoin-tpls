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
		
		vm.dynamicPopover = {
			title: 'Dynamic Popover Title',
			content: 'Dynamic Popover Content',
			templateUrl: 'modules/index/popover.template.html'
		};
		
		vm.placement = {
			options: [
				'top',
				'top-left',
				'top-right',
				'bottom',
				'bottom-left',
				'bottom-right',
				'left',
				'left-top',
				'left-bottom',
				'right',
				'right-top',
				'right-bottom'
			],
			selected: 'top'
		};
		
		vm.progressBarMax = 200;
		vm.randomizeProgreesBarVal = function() {
			
			var value = Math.floor(Math.random() * 100 + 1);
			var type;
			
			if (value < 20) {
				type = 'primary';
			} else if (value < 40) {
				type = 'secondary';
			} else if (value < 60) {
				type = 'success';
			} else if (value < 85) {
				type = 'warning';
			} else {
				type = 'alert';
			}
			
			vm.progressBarType = type;
			vm.progressBarVal = value;
		};
		vm.randomizeProgreesBarVal();
		
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

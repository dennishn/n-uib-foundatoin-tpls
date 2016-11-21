(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('modal')
		.controller('ModalController', Modal)
		.controller('ModalInstanceCtrl', ModalCtrl)
		.component('modalComponent', {
			templateUrl: 'myModalContent.html',
			bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
			},
			controllerAs: 'vm',
			controller: function () {
				var vm = this;
				
				vm.$onInit = function() {
					vm.items = vm.resolve.items;
					vm.selected = {
						item: vm.items[0]
					};
				};
				
				vm.ok = function() {
					vm.close({$value: vm.selected.item});
				};
				
				vm.cancel = function() {
					vm.dismiss({$value: 'cancel'});
				};
			}
		});

	/* @ngInject */
	function Modal($uibModal, $log, $document) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.items = ['item1', 'item2', 'item3'];
		
		vm.animationsEnabled = true;
		
		vm.open = function (size, parentSelector) {
			var parentElem = parentSelector ?
				angular.element(parentSelector) : undefined;
			
			var modalInstance = $uibModal.open({
				animation: vm.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'vm',
				size: size,
				appendTo: parentElem,
				resolve: {
					items: function () {
						return vm.items;
					}
				}
			});
			
			modalInstance.result.then(function (selectedItem) {
				vm.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
		
		vm.openComponentModal = function () {
			var modalInstance = $uibModal.open({
				animation: vm.animationsEnabled,
				component: 'modalComponent',
				resolve: {
					items: function () {
						return vm.items;
					}
				}
			});
			
			modalInstance.result.then(function (selectedItem) {
				vm.selected = selectedItem;
			}, function () {
				$log.info('modal-component dismissed at: ' + new Date());
			});
		};
		
		vm.openLongModal = function () {
			var modalInstance = $uibModal.open({
				templateUrl: 'truckloadModal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'vm',
				resolve: {
					items: function () {
						return vm.items;
					}
				}
			});
		};
		
		vm.openMultipleModals = function () {
			$uibModal.open({
				animation: vm.animationsEnabled,
				ariaLabelledBy: 'modal-title-bottom',
				ariaDescribedBy: 'modal-body-bottom',
				templateUrl: 'stackedModal.html',
				size: 'sm',
				controller: function($scope) {
					$scope.name = 'bottom';
				}
			});
			
			$uibModal.open({
				animation: vm.animationsEnabled,
				ariaLabelledBy: 'modal-title-top',
				ariaDescribedBy: 'modal-body-top',
				templateUrl: 'stackedModal.html',
				size: 'sm',
				controller: function($scope) {
					$scope.name = 'top';
				}
			});
		};
		
		vm.toggleAnimation = function () {
			vm.animationsEnabled = !vm.animationsEnabled;
		};
	}
	
	function ModalCtrl($uibModalInstance, items) {
		var vm = this;
		
		vm.items = items;
		
		vm.selected = {
			item: vm.items[0]
		};
		
		vm.ok = function () {
			$uibModalInstance.close(vm.selected.item);
		};
		
		vm.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
		
	}

})();

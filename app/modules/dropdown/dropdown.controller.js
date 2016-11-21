(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('dropdown')
		.controller('DropdownController', Dropdown);

	/* @ngInject */
	function Dropdown() {
		/*jshint validthis: true */
		var vm = this;

		vm.isOpen = false;
		vm.toggleIsOpen = function() {
			vm.isOpen = !vm.isOpen;
		};
		
		vm.onToggleLog = ['no callbacks yet'];
		vm.onToggle = function(open) {
			console.log(open);
			vm.onToggleLog.push(open ? 'open' : 'close');
		};
		
		vm.hoverIsOpen = false;
		
	}

})();

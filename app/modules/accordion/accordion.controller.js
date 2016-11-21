(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('accordion')
		.controller('AccordionController', Accordion);

	/* @ngInject */
	function Accordion() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.oneAtATime = true;
		
		vm.accordionGroups = [
			{
				title: 'Dynamic Group Header - 1',
				content: 'Dynamic Group Body - 1'
			},
			{
				title: 'Dynamic Group Header - 2',
				content: 'Dynamic Group Body - 2'
			}
		];
		
		vm.items = ['Item 1', 'Item 2', 'Item 3'];
		
		vm.addItem = function() {
			var newItemNo = vm.items.length + 1;
			vm.items.push('Item ' + newItemNo);
		};
		
		vm.status = {
			isCustomHeaderOpen: false,
			isFirstOpen: true,
			isFirstDisabled: false
		};
	}

})();

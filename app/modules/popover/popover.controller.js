(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('popover')
		.controller('PopoverController', Popover);

	/* @ngInject */
	function Popover($sce) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.dynamicPopover = {
			content: 'Hello, World!',
			templateUrl: 'myPopoverTemplate.html',
			title: 'Title'
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
		
		vm.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label success">HTML</div> content');
	}

})();

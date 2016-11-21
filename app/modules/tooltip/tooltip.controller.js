(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('tooltip')
		.controller('TooltipController', Tooltip);

	/* @ngInject */
	function Tooltip($sce) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.dynamicTooltip = 'Hello, World!';
		vm.dynamicTooltipText = 'dynamic';
		vm.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
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
	
	}

})();

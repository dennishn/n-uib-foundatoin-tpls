(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('openColorColors')
		.controller('OpenColorColorsController', OpenColorColors);

	/* @ngInject */
	function OpenColorColors() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.ocColorClasses = [];
		_buildOcColorArray();
		
		function _buildOcColorArray() {
			var ocColorSpectrum = 9;
			var ocColorNames = [
				'gray',
				'red',
				'pink',
				'grape',
				'violet',
				'indigo',
				'blue',
				'cyan',
				'teal',
				'green',
				'lime',
				'yellow',
				'orange'
			];
			
			ocColorNames.forEach(function(k,i) {
				console.log(k, i);
				var c = {
					name: k,
					classes: []
				};
				
				for(var j = 0, l = ocColorSpectrum; j <= l; j++) {
					c.classes.push([k, j].join('-'));
				}
				
				vm.ocColorClasses.push(c);
			});
		}
	}

})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('openIconicIcons')
		.controller('OpenIconicIconsController', OpenIconicIcons);

	/* @ngInject */
	function OpenIconicIcons() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.icons = ['fi-account-login', 'fi-account-logout', 'fi-action-redo', 'fi-action-undo', 'fi-align-center', 'fi-align-left', 'fi-align-right', 'fi-aperture', 'fi-arrow-bottom', 'fi-arrow-circle-bottom', 'fi-arrow-circle-left', 'fi-arrow-circle-right', 'fi-arrow-circle-top', 'fi-arrow-left', 'fi-arrow-right', 'fi-arrow-thick-bottom', 'fi-arrow-thick-left', 'fi-arrow-thick-right', 'fi-arrow-thick-top', 'fi-arrow-top', 'fi-audio-spectrum', 'fi-audio', 'fi-badge', 'fi-ban', 'fi-bar-chart', 'fi-basket', 'fi-battery-empty', 'fi-battery-full', 'fi-beaker', 'fi-bell', 'fi-bluetooth', 'fi-bold', 'fi-bolt', 'fi-book', 'fi-bookmark', 'fi-box', 'fi-briefcase', 'fi-british-pound', 'fi-browser', 'fi-brush', 'fi-bug', 'fi-bullhorn', 'fi-calculator', 'fi-calendar', 'fi-camera-slr', 'fi-caret-bottom', 'fi-caret-left', 'fi-caret-right', 'fi-caret-top', 'fi-cart', 'fi-chat', 'fi-check', 'fi-chevron-bottom', 'fi-chevron-left', 'fi-chevron-right', 'fi-chevron-top', 'fi-circle-check', 'fi-circle-x', 'fi-clipboard', 'fi-clock', 'fi-cloud-download', 'fi-cloud-upload', 'fi-cloud', 'fi-cloudy', 'fi-code', 'fi-cog', 'fi-collapse-down', 'fi-collapse-left', 'fi-collapse-right', 'fi-collapse-up', 'fi-command', 'fi-comment-square', 'fi-compass', 'fi-contrast', 'fi-copywriting', 'fi-credit-card', 'fi-crop', 'fi-dashboard', 'fi-data-transfer-download', 'fi-data-transfer-upload', 'fi-delete', 'fi-dial', 'fi-document', 'fi-dollar', 'fi-double-quote-sans-left', 'fi-double-quote-sans-right', 'fi-double-quote-serif-left', 'fi-double-quote-serif-right', 'fi-droplet', 'fi-eject', 'fi-elevator', 'fi-ellipses', 'fi-envelope-closed', 'fi-envelope-open', 'fi-euro', 'fi-excerpt', 'fi-expand-down', 'fi-expand-left', 'fi-expand-right', 'fi-expand-up', 'fi-external-link', 'fi-eye', 'fi-eyedropper', 'fi-file', 'fi-fire', 'fi-flag', 'fi-flash', 'fi-folder', 'fi-fork', 'fi-fullscreen-enter', 'fi-fullscreen-exit', 'fi-globe', 'fi-graph', 'fi-grid-four-up', 'fi-grid-three-up', 'fi-grid-two-up', 'fi-hard-drive', 'fi-header', 'fi-headphones', 'fi-heart', 'fi-home', 'fi-image', 'fi-inbox', 'fi-infinity', 'fi-info', 'fi-italic', 'fi-justify-center', 'fi-justify-left', 'fi-justify-right', 'fi-key', 'fi-laptop', 'fi-layers', 'fi-lightbulb', 'fi-link-broken', 'fi-link-intact', 'fi-list-rich', 'fi-list', 'fi-location', 'fi-lock-locked', 'fi-lock-unlocked', 'fi-loop-circular', 'fi-loop-square', 'fi-loop', 'fi-magnifying-glass', 'fi-map-marker', 'fi-map', 'fi-media-pause', 'fi-media-play', 'fi-media-record', 'fi-media-skip-backward', 'fi-media-skip-forward', 'fi-media-step-backward', 'fi-media-step-forward', 'fi-media-stop', 'fi-medical-cross', 'fi-menu', 'fi-microphone', 'fi-minus', 'fi-monitor', 'fi-moon', 'fi-move', 'fi-musical-note', 'fi-paperclip', 'fi-pencil', 'fi-people', 'fi-person', 'fi-phone', 'fi-pie-chart', 'fi-pin', 'fi-play-circle', 'fi-plus', 'fi-power-standby', 'fi-print', 'fi-project', 'fi-pulse', 'fi-puzzle-piece', 'fi-question-mark', 'fi-rain', 'fi-random', 'fi-reload', 'fi-resize-both', 'fi-resize-height', 'fi-resize-width', 'fi-rss-alt', 'fi-rss', 'fi-script', 'fi-share-boxed', 'fi-share', 'fi-shield', 'fi-signal', 'fi-signpost', 'fi-sort-ascending', 'fi-sort-descending', 'fi-spreadsheet', 'fi-star', 'fi-sun', 'fi-tablet', 'fi-tag', 'fi-tags', 'fi-target', 'fi-task', 'fi-terminal', 'fi-text', 'fi-thumb-down', 'fi-thumb-up', 'fi-timer', 'fi-transfer', 'fi-trash', 'fi-underline', 'fi-vertical-align-bottom', 'fi-vertical-align-center', 'fi-vertical-align-top', 'fi-video', 'fi-volume-high', 'fi-volume-low', 'fi-volume-off', 'fi-warning', 'fi-wifi', 'fi-wrench', 'fi-x', 'fi-yen', 'fi-zoom-in', 'fi-zoom-out'];
		
		vm.clearColor = function() {
			vm.selectedColor = undefined;
		}
		vm.selectColor = function(color) {
			vm.selectedColor = 'text-color-' + color;
		}
		
		vm.clearModifier = function() {
			vm.selectedModifier = undefined;
		}
		vm.selectModifier = function(modifier) {
			vm.selectedModifier = 'oi-flip-' + modifier;
		}
	}

})();


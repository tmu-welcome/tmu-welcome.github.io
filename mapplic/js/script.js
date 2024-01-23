$(document).ready(function () {
	$(function () {
		var $isScrolling = 0;
		var $timeoutId;

		$(document).on("scroll", function () {
			$isScrolling = 1;

			// スクロールを停止して200ms後に終了とする
			clearTimeout($timeoutId);

			$timeoutId = setTimeout(function () {
				$isScrolling = 0;
			}, 200);
		});
	});

	var clickEventType = ((window.ontouchstart !== null) ? 'click' : 'touchend');
	var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
	var ccl_intro_map = $('#ccl_intro_map').mapplic({
		source: 'ccl_intro_map.json',
		customcss: css,
		sidebar: true,
		sidebartoggle: true,
		alphabetic: true,
		height: 'auto',
		developer: false,
		searchdescription: true,
		searcheverywhere: true,
		animations: true,
		minimap: true,
		marker: 'hidden',
		fillcolor: false,
		fullscreen: false,
		thumbholder: true,
		maxscale: 3
	});

	var self = ccl_intro_map.data('mapplic');

	$(document).on(clickEventType, '#building1', function (e) {
		e.preventDefault();
		self.switchLevel('floor-1-1');
	});

	$(document).on(clickEventType, '#building7', function (e) {
		e.preventDefault();
		self.switchLevel('floor-7-1');
	});

	$(document).on(clickEventType, '#Hall', function (e) {
		e.preventDefault();
		self.switchLevel('hall');
	});

	$(document).on(clickEventType, '#hall-building1', function (e) {
		e.preventDefault();
		self.switchLevel('floor-1-1');
	});
});

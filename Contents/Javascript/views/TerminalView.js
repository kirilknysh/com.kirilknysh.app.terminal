include('Javascript/core/constants.js');
include('Javascript/views/components/TerminalInput.js');

var TerminalView = new MAF.Class({
	ClassName: 'TerminalView',

	Extends: MAF.system.FullscreenView,

	createView: function () {
		var view = this,
			container;
		debugger;
		container = new MAF.element.Container({
			styles: {
				vOffset: Constants.VERTICAL_MARGIN,
				hOffset: Constants.HORIZONTAL_MARGIN,
				width: view.width - Constants.HORIZONTAL_MARGIN * 2,
				height: view.height - Constants.VERTICAL_MARGIN * 2
			},
			ClassName: 'cmd-container normal'
		}).appendTo(view);
	}
});

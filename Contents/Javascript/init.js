include('Javascript/views/TerminalView.js');

MAF.application.init({
	views: [
		{ id: 'view-Terminal', viewClass: TerminalView }
	],
	defaultViewId: 'view-Terminal',
	settingsViewId: 'view-Terminal'
});
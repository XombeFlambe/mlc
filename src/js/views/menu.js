/* Menu Module ***************************************************************************/
$(document).ready(Menu = function() {
	var menu = '.js-menu';
	var trigger = '.js-menu-trigger';
	var content = '.js-menu-content';
	var icon = 'i';

	$(menu).find(trigger).click(function() {
		$(this).next(content).slideToggle(200);
	});

});

module.exports = Menu;
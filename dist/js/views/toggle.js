/* Toggle Module ***************************************************************************/
$(document).ready(Toggle = function() {
	var toggle = '.js-toggle';
	var trigger = '.js-toggle-trigger';
	var content = '.js-toggle-content';

	$(toggle).find(trigger).click(function(g) {
		$(this).parents(toggle).find(content).slideToggle(200);
		$(this).find('span').toggle(0);

		g.preventDefault();
	});

});

module.exports = Toggle;
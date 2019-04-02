/* Dropdown Module ***************************************************************************/
$(document).ready(Dropdown = function() {
	var dropdown = '.js-dropdown';
	var trigger = '.js-dropdown-trigger';
	var content = '.js-dropdown-content';
	var duration = 200;

	$(dropdown).find(trigger).click(function(){
		$(this).next(content).slideToggle(duration);
		$(this).toggleClass('active');
	});

});

module.exports = Dropdown;
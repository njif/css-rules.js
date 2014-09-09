;(function(namespace) {

	var d = document,
	_pivate = {
		styleSheet: null,

		createStyleSheet: function() {
			if (document.createStyleSheet)
				return d.createStyleSheet();
			var style = d.createElement('style');
			d.getElementsByTagName('head')[0].appendChild(style);
			return style.sheet;
		},

		addRule: function(selector, property) {
			return _pivate.styleSheet.addRule(selector, property);
		},

		insertRule: function(selector, property) {
			var rule = selector + '{ ' + property + ' }';
			return _pivate.styleSheet.insertRule(rule, _pivate.styleSheet.cssRules.length);
		},

		removeRule: function(index) {
			return _pivate.styleSheet.removeRule(index);
		},

		deleteRule: function(index) {
			return _pivate.styleSheet.deleteRule(index);
		},

		add: function(selector, property) {
			if (!_pivate.styleSheet)
				_pivate.styleSheet = _pivate.createStyleSheet();

			ns.cssrules.add = _pivate.styleSheet.addRule ? _pivate.addRule : _pivate.insertRule;
			ns.cssrules.add(selector, property);
		},

		remove: function(index) {
			if (!_pivate.styleSheet)
				_pivate.styleSheet = _pivate.createStyleSheet();

			ns.cssrules.remove = _pivate.styleSheet.removeRule ? _pivate.removeRule : _pivate.deleteRule;
			ns.cssrules.remove(index);
		}		
	},

	ns = namespace || window;

	ns.cssrules = {
		add: _pivate.add,
		remove: _pivate.remove
	};

}(window.cssbutton));
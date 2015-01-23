exports.createRealSwitch = function(args) {
	args = args || {};
	
	var RealSwitch = require("com.yydigital.realswitch");
	var realSwitch = RealSwitch.createRealSwitch({
  		value:true
	});

	return realSwitch;
};
var os = require('os');

function liczenie() {
	var czas = os.uptime;
	if (czas < 3600) {
		var minuty = Math.floor(czas / 60);
		var sekundy = czas % 60;
    return "Czas pracy: " + minuty + " min. " + sekundy + " sek.";
	} else {
    var godziny = Math.floor(czas / 3600);
		var minuty = Math.floor((czas % 3600) / 60);
		var sekundy = czas % 60;
    return "Czas pracy: " + godziny + " godz. " + minuty + " min. " + sekundy + " sek.";
	}
};

exports.print = liczenie;
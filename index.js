var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

	console.log("Node wersja: " +process.versions.node);
    console.log("Jezyk systemu: " +process.env.LANG);

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
        	process.stdout.write('Wyjscie!\n');
            process.exit();
            break;
            case '/sayhello':
    		process.stdout.write('hello!\n');
    		break;
			case '/getOSinfo':
    		OSinfo.print();
    		break;
            default:
            process.stderr.write('Zla instrukcja');
        }
        
    }
});

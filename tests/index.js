'use strict';

var PEM = require('../');
//console.log(PEM);

// "Hello, 世界!";
var contents = 'SGVs\nbG8sIOS4\nlueVjCE=';
var pem = '-----BEGIN Type-----\n' + contents + '\n-----END Type-----\n';
var block = PEM.parseBlock(pem);

if (14 !== block.bytes.byteLength) {
	throw new Error('should be 14 bytes');
}

if (0x48 !== block.bytes[0]) {
	throw new Error('first byte should be 0x48 ("H")');
}

if (0x8c !== block.bytes[12]) {
	throw new Error('13th byte should be 0x8c (3rd byte of "界")');
}

console.info("PASS: decodes 'bytes' field correctly");

var pem2 =
	'-----BEGIN Type-----\n' +
	contents.replace(/\n/g, '') +
	'\n-----END Type-----';

block.type = 'Type';
if (pem2 !== PEM.packBlock(block)) {
	console.debug(PEM.packBlock(block));
	throw new Error('should pack PEM correctly');
}

console.info("PASS: encodes 'bytes' and 'type' fields correctly");

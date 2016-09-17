/**
 * Created by arthur on 2016/9/17.
 */

function logMsg(message, indent) {
	var logger = document.getElementById('logger');

	var div = document.createElement('div');
	div.textContent = message;
	if (indent !== undefined && indent > 0) {
		div.setAttribute('style', 'text-indent: ' + indent + 'em;');
	}

	logger.appendChild(div);
}

function logArray(arr, indent) {
	logMsg('[', indent);
	arr.forEach((o) => log(o, indent + 1));
	logMsg(']', indent);
}

function logObject(obj, indent) {
	logMsg('{', indent);
	Object.getOwnPropertyNames(obj).forEach((key) => {
		if (typeof obj[key] !== 'object' && ! Array.isArray(obj[key])) {
			logMsg(key + ': ' + obj[key], indent + 1);
		} else {
			logMsg(key + ': ', indent + 1);
			log(obj[key], indent + 2);
		}
	});
	logMsg('}', indent);
}

function log(obj, indent) {
	if (Array.isArray(obj)) {
		logArray(obj, indent || 0);
		return;
	}

	if (typeof obj === 'object') {
		logObject(obj, indent || 0);
		return;
	}

	logMsg(obj, indent || 0);
}


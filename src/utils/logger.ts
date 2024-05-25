import { getCurrentTime } from './getCurrentTime';

type LoggerType = 'info' | 'warn' | 'error';
const loggerTypeMap = {
	info: '[INFO]',
	warn: '[WARNING]',
	error: '[ERROR]',
};

function isDataObject(data: any): boolean {
	if (typeof window !== 'undefined' && typeof window.document !== 'undefined' && data instanceof Element) {
		return false;
	}

	return typeof data === 'object' && data !== null;
}

/**
 * Logs the provided data with a timestamp and logger type.
 *
 * @param loggerType - The type of logger.
 * @param data - The data to be logged.
 * @returns The formatted log line.
 */
export function logger(loggerType: LoggerType, ...data: any): string {
	const formattedData = data.map((_data: any) => (isDataObject(_data) ? JSON.stringify(_data, null, '\t') : _data));

	const logLinePrefix = `[${getCurrentTime()}] ${loggerTypeMap[loggerType]}`;

	console.log(logLinePrefix, ...formattedData);

	return logLinePrefix + ' ' + formattedData.join(' ');
}

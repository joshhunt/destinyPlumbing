import winston from 'winston';
import chalk from 'chalk';
import {WORKING_DIR} from '../consts';

const COLORS = {
    info: chalk.gray,
    error: chalk.red,
    warn: chalk.yellow,
    debug: chalk.blue,
}

const DISPLAY_NAMES = {
    error: 'errr',
    debug: 'debg',
}

export default new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'warn',
            formatter: (options) => {
                const friendlyLevel = DISPLAY_NAMES[options.level] || options.level
                const logLevel = COLORS[options.level](`[${friendlyLevel}]`);
                const message = (undefined !== options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
                return `${logLevel} ${message}`;
            }
        }),
        new (winston.transports.File)({ filename: 'somefile.log' })
    ]
});
import winston from 'winston';


const logConfiguration = {
    transports: [
        new winston.transports.File({
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD'
                }),
                winston.format.json()
            ),
            filename: 'src/logs/logs.log',
            handleExceptions: true,
            handleRejections: true
        })
    ]
};
const logger = winston.createLogger(logConfiguration);

export default logger;

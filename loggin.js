const pino = require('pino');
const logger = pino({ level: 'info' });

logger.info({ event: 'server_start', port: 3000 }, 'Servidor iniciado');
logger.error({ event: 'db_connection', status: 'failed' }, 'Erro ao conectar ao banco');

const loggerMiddleware = (req, res, next) => {
    const horaAtual =new Date().toLocaleDateString();
    console.log(`[${horaAtual}] Requisição: recebida:
        ${req.method} ${req.url}`);
        next();
};

module.exports = loggerMiddleware;

// Fluxo: [CLIENTE] -> [MIDDLEWARE] -> [ROTA] -> [CLIENTE]

// req -> objeto com dados da REQUISIÇÃO (o que o cliente enviou)
// res -> objeto para montar a RESPOSTA que será enviada ao cliente
// next -> função que chama o PRÓXIMO middleware ou a rota
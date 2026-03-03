const express = require('express');
const app = express();
app.use(express.json());

let produtos = [
    { id: 1, nome: 'Temaki Completo', preco: 35.50, categoria: 'Sushis' },
    { id: 2, nome: 'Combinado 20 Peças', preco: 85.00, categoria: 'Combinados' }
];


app.get('/produtos', (req, res) => {
    res.json(produtos);
});


app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const produto = produtos.find(p => p.id === parseInt(id));

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    res.json(produto);
});


app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        categoria
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});


app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;

    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    produtos[index] = {
        id: parseInt(id),
        nome,
        preco,
        categoria
    };

    res.json(produtos[index]);
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    const listaOriginalLength = produtos.length;
    produtos = produtos.filter(p => p.id !== parseInt(id));

    if (produtos.length === listaOriginalLength) {
        return res.status(404).json({ mensagem: "Produto não encontrado para exclusão." });
    }

    res.status(204).send();
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));

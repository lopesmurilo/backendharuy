let categorias = [
    { id: 1, nome: "Temaki" },
    { id: 1, nome: "Combinado" },
    { id: 1, nome: "Bebidas" },
    { id: 1, nome: "Sobremesas" },
]

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki Completo",
        descricao: "Temaki com salmão, atum, kani, cream cheese e cebola",
        preco: 35.50,
        categorias: "Temaki",
        imagem: "https://cdn.neemo.com.br/uploads/item/photo/2009270/202204141116_Y4RJ_i.webp"
    },
    {
        categoriaId: 2,
        nome: "Combinado 20 peças",
        descricao: "Combinado com 20 peças variadas de sushi e sashimi",
        preco: 85.00,
        categorias: "Combinado",
        imagem: "https://anota.ai/bloganotaai/wp-content/uploads/sites/5/2020/08/Equipamentos-Para-Fazer-Sushi-1.jpg"
    },
    {
        categoriaId: 3,
        nome: "Coca-cola",
        descricao: "Refrigerante Coco-cola 350ml",
        preco: 7.50,
        categorias: "Bebidas",
        imagem: "https://cdn.dooca.store/149445/products/zzkwkuc268r8plq7syaaxcgsn6ljqarw98dy_640x640+fill_ffffff.png?v=1724757760&webp=0"
    }
]

module.exports = {categorias, produtos};
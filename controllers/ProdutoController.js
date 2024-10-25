//ProdutoController.js
const Produto = require('../models/Produto');

exports.createProduto = async (req, res) => {
  const { produto_nome } = req.body;

  try {
    const produto = await Produto.create({ produto_nome });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.updateProduto = async (req, res) => {
  const { produto_id } = req.params;
  const { produto_nome } = req.body;

  try {
    const produto = await Produto.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.produto_nome = produto_nome;
    await produto.save();
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deleteProduto = async (req, res) => {
  const { produto_id } = req.params;

  try {
    const produto = await Produto.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await produto.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};


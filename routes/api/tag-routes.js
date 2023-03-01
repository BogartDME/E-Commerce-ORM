const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      Product
    ]
  }).then(result => {res.status(200).json(result)})
  .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [
      Product
    ],
    where: {
      id: req.params.id
    }
  }).then(result => {res.status(200).json(result)})
  .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
  Tag.create(
    req.body
  ).then(result => {res.status(200).json(result)})
  .catch(err => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Tag.update(
    req.body, {
      where: {
        id: req.params.id
      }
    }
  ).then(result => {res.status(200).json(result)})
  .catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {res.status(200).json(result)})
  .catch(err => res.status(400).json(err));
});

module.exports = router;

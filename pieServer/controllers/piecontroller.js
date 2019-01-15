const router = require('express').Router();
const Pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');

router.get('/', validateSession, (req, res) => {
    Pie.findAll()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/', validateSession, (req, res) => {
    if(!req.errors) {
        const pieFromRequest = {
            nameOfPie: req.body.nameOfPie,
            baseOfPie: req.body.baseOfPie,
            crust: req.body.crust,
            timeToBake: req.body.timeToBake,
            servings: req.body.servings,
            rating: req.body.rating
        }

        Pie.create(pieFromRequest)
            .then(pie => res.status(200).json(pie))
            .catch(err => res.status(500).json({error: err}))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:name/', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.name }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({ error: err}))
  })
  
router.put('/:id', validateSession, (req, res) => {
  if (!req.errors) {
    Pie.update(req.body, { where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
      res.status(500).json(req.errors)
    }
  })
  
router.delete('/:id', validateSession, (req, res) => {
    if(!req.errors) {
      Pie.destroy({ where: { id: req.params.id }})
          .then(pie => res.status(200).json(pie))
          .catch(err => res.status(500).json(req.errors))
      } else {
          res.status(500).json(req.errors)
      }
  });

module.exports = router;
const router = require('express').Router();
const { Apps } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all users apps
router.get ('/', withAuth, async (req, res) => {
    try {
        const appData = await Apps.findAll({
          attributes: ['username', 'password', 'application_name'],
        });
    
        const apps = appData.get({ plain: true });
        res.render('applist', { apps });
      } catch (err) {
        res.status(500).json(err);
      }
});

//GET for single app by id
router.get('/:id', async (req, res) => {
    try {
      const appData = await Apps.findByPk(req.params.id, {
            attributes: ['username', 'password', 'application_name', 'web_address']
      });
  
      const app = appData.get({ plain: true });
      res.render('app-details', { app });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//POST for new app
router.post('/', withAuth, async (req, res) => {
    try {
        const newApp = await Apps.create({
        ...req.body,
        user_id: req.session.user_id,
        });

        res.status(200).json(newApp);
    } catch (err) {
        res.status(400).json(err);
    }
});

//PUT for updating app
router.put('/:id', async (req, res) => {
    try {
      await Apps.update(req.params.id, {
            username: req.body.username,
            password: req.body.password,
            application_name: req.body.application_name,
            web_address: req.body.web_address,
        });
  
      res.status(200).json('Successfully updated');

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//DELETE for deleting app
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const appData = await Apps.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!appData) {
        res.status(404).json({ message: 'No app found with this id!' });
        return;
      }
  
      res.status(200).json(appData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
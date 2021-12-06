const router = require('express').Router();
const { Apps } = require('../../models');
const withAuth = require('../../utils/auth');
const generatePassword = require('../../utils/generatePassword');
// const { encrypt } = require('../../utils/crypto');

//POST for new app
router.post('/', async (req, res) => {
  try {
    const newApp = await Apps.create({
      username: req.body.username,
      password: req.body.password,
      application_name: req.body.application_name,
      web_address: req.body.web_address,
      user_id: req.session.user_id,
    });

    res.status(200).json(newApp);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE for deleting app
router.delete('/:id', async (req, res) => {
  try {
    const appData = await Apps.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!appData) {
      res.status(404).json({ message: 'No app found with this id!' });
      return;
    }

    res.status(200).json({ message: 'App deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET for generating a password
router.get('/password', (req, res) => {
  const newPassword = generatePassword();

  res.status(200).json(newPassword);
});

module.exports = router;

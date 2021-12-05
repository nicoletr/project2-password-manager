const router = require('express').Router();
const { Apps, User } = require('../models');
const withAuth = require('../utils/auth');

//GET all users apps if logged in
router.get('/', withAuth, async (req, res) => {
  try {
    const appsData = await Apps.findAll({
      attributes: ['username', 'password', 'application_name','web_address'],
    });

    const apps = appsData.map((app) => app.get({ plain: true }));

    // res.status(200).json(apps);

    res.render('applist', { apps });

  } catch (err) {
    res.status(500).json(err);
  }
});

//GET for single app by id
// router.get('/:id', async (req, res) => {
//   try {
//     const appData = await Apps.findByPk(req.params.id, {
//       attributes: ['username', 'password', 'application_name','web_address'],
//     });

//     const app = appData.get({ plain: true });

//     // res.status(200).json(app);

//     res.render('app-details', { app });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
  }
  // Otherwise, render the login template
  res.render('login');
});

module.exports = router;

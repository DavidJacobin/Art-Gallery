const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');

router.get('/edit/:id', async (req, res) => {
    const publication = await publicationService.getOne(req.params.id).lean();

    res.render('publications/edit', { ...publication })
});

router.post('/edit/:id', isAuth, async (req, res) => {
    await publicationService.update( req.params.id, req.body);

    res.redirect(`/details/${req.params.id}`)
});


module.exports = router;
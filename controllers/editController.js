const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');
const errorHandler = require('../middlewares/errorHandlerMiddleware')

router.get('/edit/:id', async (req, res) => {
    const publication = await publicationService.getOne(req.params.id).lean();

    res.render('publications/edit', { ...publication })
});

router.post('/edit/:id', isAuth, async (req, res) => {

    try {
        await publicationService.update( req.params.id, req.body);

        res.redirect(`/details/${req.params.id}`)
    } catch (error) {
        res.render('/edit/:id', {...req.body, error: errorHandler(error)})
    }


    
});


module.exports = router;
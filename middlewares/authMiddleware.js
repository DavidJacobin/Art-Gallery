const jwt = require('jsonwebtoken');


exports.auth = (req, res, next) => {
    const token = req.cookies['user'];

    if (token) {
        jwt.verify(token, 'g2734t3eghe8293e', ((err, decodedToken) => {

            if(err){
                res.clearCookie('user')
                return next(err);
            };
            req.user = decodedToken;
            res.locals.user = decodedToken;

            next();
        }));
    } else{
        next();

    };

};
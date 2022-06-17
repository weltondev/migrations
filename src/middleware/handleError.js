const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next)=>{
    if(error instanceof ValidationError){
        return res.status(error.statusCode).json(error);
    };

    res.status(401).json(error);
};
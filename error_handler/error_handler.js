const error_code = require('./error/code');

class ErrorHandler extends Error {
    constructor(status=200, message = '') {
        if(!message) {
            message = error_code[status];
        }

        super(message);
        this.status = status;
        this.error_string = error_code[status];
    }
};

module.exports =  ErrorHandler;
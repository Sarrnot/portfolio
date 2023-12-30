import AbstractHttpException from "./AbstractHttpException";

class BadRequestException extends AbstractHttpException {
    public status = 400;

    constructor(public message = "Bad Request") {
        super();
    }
}

export default BadRequestException;

import AbstractHttpException from "./AbstractHttpException";

class NotFoundException extends AbstractHttpException {
    public status = 404;

    constructor(public message = "Not Found") {
        super();
    }
}

export default NotFoundException;

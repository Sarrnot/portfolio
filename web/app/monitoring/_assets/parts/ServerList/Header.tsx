import Cell from "./Cell";
import Row from "./Row";

const Header = () => {
    return (
        <Row className="text-xl">
            <Cell background="">Server name</Cell>
            <Cell className="hidden md:block" background="">
                IP
            </Cell>
            <Cell className="hidden sm:block" background="">
                Status
            </Cell>
        </Row>
    );
};

export default Header;

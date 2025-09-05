import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav style={{backgroundColor: '#f8f9fa', padding: '10px', width: '100%'}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"} style={{marginLeft: '10px'}}>Products</Link>
            <Link to="/das">Dashboard</Link>
        </nav>
        </>
    );
}

export default Navbar;
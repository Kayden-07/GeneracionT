import { useParams } from "react-router-dom";

function ProductDetail() {

    const { id } = useParams();

    return (
        <>
            <h1>Bienvenido al PRODUCT DETAIL</h1>
            <p>Mostrando detalles para el productocon ID: {id}</p>
        </>
    );
}

export default ProductDetail;
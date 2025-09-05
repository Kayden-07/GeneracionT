import { Link } from "react-router-dom";

function Products() {

    const products = [
        { id: 1, name: 'Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', price: 300 },
    ];

    return (
        <>
            <h1>Bienvenido a PRODUCTS</h1>
            {
                products.map(product => (
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <h2>{product.name}</h2>
                        </Link>
                    </div>
                ))
            }
        </>
    );
}

export default Products;
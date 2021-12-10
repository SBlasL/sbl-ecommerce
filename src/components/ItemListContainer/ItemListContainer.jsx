function ItemListContainer( {greeting, descripcion} ) {
    return (
        <div>
            <section>
            { greeting }
            <h2>Texto de prueba</h2>
            { descripcion }
            <h3>Descripción de prueba</h3>
            </section>
        </div>
    )
}

export default ItemListContainer
import Item from './Item.jsx'

function List(){
    return(
        <>
            <h1>My list</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={2000} />
                <Item marca='Fiat' ano_lancamento={2015} />
                <Item marca='Renault' ano_lancamento={2013} />
                <Item marca='Audi' ano_lancamento={2020} />
            </ul>
        </>
    )
}
export default List
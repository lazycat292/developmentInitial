export function StoreItem({item, handleClick}){
    return (
        <div>
            <img src={item.image} alt="image"/>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick = {() => handleClick(item.name, item.price)}>Add/Remove Favorites</button>
        </div>
    )
}
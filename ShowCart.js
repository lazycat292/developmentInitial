export function ShowCart({cart}){
    return (
            <ol>
                {cart.map(item => (<li key={item}>{item.name}</li>))}
            </ol>
    )
}
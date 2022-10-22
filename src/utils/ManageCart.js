



export const AddToCart = async (Id, price, Image, Tittle) => {
    const Carts = localStorage.getItem("Carts") == null ? [] : JSON.parse(localStorage.getItem("Carts"))
    var makeJSON = {

        Id: Id,
        Tittle: Tittle,
        Image: Image,
        price: price,
        quantity: 1

    };
    Carts.push(makeJSON)
    localStorage.setItem("Carts", JSON.stringify(Carts))
    return Carts 
}
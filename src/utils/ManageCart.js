



export const AddToCart = async (Id, price, Image, Tittle, minimumQuantity) => {
    const Carts = localStorage.getItem("Carts") == null ? [] : JSON.parse(localStorage.getItem("Carts"))
    var makeJSON = {

        Id: Id,
        Tittle: Tittle,
        Image: Image,
        price: price,
        quantity: minimumQuantity,
        TotalPrice: price,
        minimumQuantity: minimumQuantity
    };
    if (Carts?.length == 0) {
        Carts.push(makeJSON)
    }
    if (Carts?.length > 0) {
        const exist = Carts.some((cart) => cart.Id == Id)
        if (!exist) {
            Carts.push(makeJSON)
        }
    }
    localStorage.setItem("Carts", JSON.stringify(Carts))
    return Carts
}


export const UpdateCart = async (Id, updateType, minimumQuantity) => {
    const Carts = localStorage.getItem("Carts") == null ? [] : JSON.parse(localStorage.getItem("Carts"))
    console.log(minimumQuantity)


    for (const cart of Carts) {
        if (cart.Id == Id && updateType == "Increase") {
            cart.quantity = cart.quantity + 1
        }
        if (cart.Id == Id && updateType == "Decrease" && cart.quantity > minimumQuantity) {
            cart.quantity = cart.quantity - 1
        }
    }
    localStorage.setItem("Carts", JSON.stringify(Carts))
    return Carts

}

export const DeleteItem = async (Id) => {
    const Carts = localStorage.getItem("Carts") == null ? [] : JSON.parse(localStorage.getItem("Carts"))
    for (const cart of Carts) {
        if (cart.Id == Id) {
            const index = Carts.indexOf(cart);
            if (index > -1) {
                Carts.splice(index, 1);
            }
        }

    }
    localStorage.setItem("Carts", JSON.stringify(Carts))
    return Carts

}
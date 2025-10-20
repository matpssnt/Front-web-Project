const key = "hotel_cart";

export function setCart(cart) {
    localStorage.setItem(key, JSON.stringify(cart));
}

export function getCart() {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : {status: "draft", item: []};
    }
    catch (error) {
        return {status: "draft", item: []};
    }
}

export function addItemToHotel_Cart(item) {
    const cart = getCart();
    cart.items.push(item);
    setCart(hotel_cart);
    return hotel_cart;
}

export function removeItemFromHotel_Cart(i) {
    const hotel_cart = getCart();
    hotel_cart.items.splice(i, 1);
    setCart(hotel_cart);
    return hotel_cart;
}

export function clearHotel_Cart() {
    setCart({
        status: "draft", 
        items: []
    });
}

export function getTotalItems() {
    const { items } = getCart();
    const total = items.reduce((acc, itm) => acc + Number(itm.subtotal || 0), 0);
    return {
        total,
        qnt_items: items.length
    };
}


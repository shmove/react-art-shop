function errorText(errno) {
    switch(errno) {
        case 1062:
            return "Someone has already ordered this artwork! Unable to place order.";
        default:
            return "An unknown error occurred!";
    }
}

export const OrderResponse = ({ apiJSONRes }) => {

    if (JSON.stringify(apiJSONRes) === "{}") return;

    if (apiJSONRes.error) {
        return (
            <p className="failure">{errorText(apiJSONRes.error.errno)}</p>
        )
    } else {
        return (
            <p className="success">Order successful!</p>
        )
    }

}

export default OrderResponse;
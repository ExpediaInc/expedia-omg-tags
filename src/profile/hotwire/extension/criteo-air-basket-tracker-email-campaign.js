window.criteo_q = window.criteo_q || [];
window.criteo_q.push( {
        event: "setAccount", account: ""},{
        event: "setHashedEmail", email: "" },{
        event: "setData", splitGroup: b.cp.vt_PIX16},{
        event: "setSiteType", type: b["device_type_abbreviated"] },
    { event: "viewBasket" ,
        item: [ { id: b["Tag_Criteo_Air_Airport_Codes_Checkout"], price: b["Tag_Criteo_Flight_Checkout_PricePerSeat"], quantity: b["flight_checkoutPage_numberOfSeats"]}
        ]});
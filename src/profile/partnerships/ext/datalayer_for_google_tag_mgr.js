if (typeof b.utagPageName != "undefined" && b.utagPageName.toLowerCase().indexOf('checkout.confirmation'.toLowerCase()) > -1) {
	window.dataLayer = [{
    'event': 'sendVirtualPageview',
    'vpv': '/booking-engine/confirmation',
    'purchaseDate': b.bookingDateInUTC || "",
    'checkIn': b.checkInDate || "",
    'checkOut': b.checkOutDate || "",
    'leadTime': b.bookingWindow || "",
    'adults': b.adults || "",
    'children': b.children || "",
    'totalGuests': b.numberOfGuests || "",
    'currency': 'USD',
    'transactionId': b['checkout.trl'] || "",
    'transactionTotal': b['checkout.cartTotal.amount'] || "", 
    'transactionTax': b['checkout.cartTotal.taxesAndFees'] || "",
    'transactionCity': b.destination || "",
    'transactionState': b.state || "",
    'transactionCountry': b.pointofsales || ""
}];	
}
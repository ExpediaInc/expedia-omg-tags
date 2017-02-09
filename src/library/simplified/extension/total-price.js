    b['totalPrice'] = '';
    if (utag.isFRateDetails() && b['entity.flight.flight.totalPrice.amount']){
        b['totalPrice'] = b['entity.flight.flight.totalPrice.amount'];
    }

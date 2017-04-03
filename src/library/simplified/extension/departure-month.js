(function () {
    b['departureMonth'] = '';

    if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.checkout.cruise.isoFormatDepartureDate');
    }
    else if (utag.isCruiseSR() && b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate');
    }
    else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.cruise.isoFormatDepartureDate');
    }
    else if (utag.isRailUDP() && b["entity.railSearch.railDetail.isoFormatDepartureDate"] ) {
        b['departureMonth'] = getDepartureMonth('entity.railSearch.railDetail.isoFormatDepartureDate');
    }

    function getDepartureMonth(utagKey) {
        if (utagKey) {
            return new Date(b[utagKey]).getMonth() + 1
        }
        return '';
    }
})();
/** old
 (function () {
    utag_data['departureMonth'] = '';

    if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.isoFormatDepartureDate']) {
        utag_data['departureMonth'] = getDepartureMonth('entity.checkout.cruise.isoFormatDepartureDate');
    }
    else if (utag.isCruiseSR() && utag_data['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate']) {
        utag_data['departureMonth'] = getDepartureMonth('entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate');
    }
    else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && utag_data['entity.cruise.isoFormatDepartureDate']) {
        utag_data['departureMonth'] = getDepartureMonth('entity.cruise.isoFormatDepartureDate');
    }

    function getDepartureMonth(utagKey) {
        if (utagKey) {
            return new Date(utag_data[utagKey]).getMonth() + 1
        }
        return '';
    }
})();
 **/
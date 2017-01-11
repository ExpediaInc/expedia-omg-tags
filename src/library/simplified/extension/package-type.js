b['packageType'] = '';
if (utag.isPSR() || utag.isPIS() || utag.isPCF() || utag.isPRateDetails() || utag.isPCO() || utag.isPPymt())
{
    //FH
    if (b['entity.packageSearch.packageSearchParameters.packageType'])
    {
        b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType']
    }
}
else if (utag.isPCarSearch())
{
    //FHC, HC, FC
    if (b['entity.carSearch.searchCriteria.packageType'])
    {
        b['packageType'] = b['entity.carSearch.searchCriteria.packageType']
    }
}
else if (utag.isMCO())
{
    b['packageType'] = b['entity.checkout.lobType'] //there is no packageType for MCO pages so using lobType
}
else if (b['qp.packageType'])
{
    b['packageType'] = b['qp.packageType']
}
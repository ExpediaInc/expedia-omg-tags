utag_data['ABTestsExpValues'] = '';
var tpid = utag_data['context.site.tpid'];
var eapid = utag_data['context.site.eapid'];
var guid = utag_data['guid'];
var domain_name = utag_data['context.site.siteName'];
var expId = utag_data['marketingABTests'];
var xhttp = new XMLHttpRequest();
xhttp.open('get', 'https://'+domain_name+'/api/bucketing/v1/evaluateExperimentsAndLog?guid='+guid+'&tpid='+tpid+'&eapid='+eapid+'&id='+expId+'', false);
xhttp.send();
var status = xhttp.status;
if (status == 200) {
    var data = JSON.parse(xhttp.responseText);
    if (data.evaluatedExperiments.length > 0) {
            utag_data['ABTestsExpValues'] = data.evaluatedExperiments[0].id + "." + data.evaluatedExperiments[0].value;
   }
 }
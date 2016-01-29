/**
 * Grab a list of the IP address ranges used to AWS and show just the ones
 * for the service and region we're interested in right now
 */
var https = require('https'),
    colors = require('colors'),
    fs = require('fs'),
    region = 'us-east-1',
    service = 'AMAZON',
    count = 0,
    body = '',
    json;

/**
 * Download the file and transform it into JSON so we can work with it
 */
https.get("https://ip-ranges.amazonaws.com/ip-ranges.json", function(res) {
   res.on('data', function(chunk) {
        body += chunk;
    })

    res.on('end', function() {
        // Iterate through the JSON and find the ones we care about
        json = JSON.parse(body).prefixes;
        var len = json.length;

        for (var i = 0; i < len; i++) {
            if (json[i].region == region && json[i].service == service) {
                count++;
                console.log(json[i].ip_prefix.dim);
            }
        }
        console.log('Found ' + count.toString().bold.green + ' IP ranges for the ' + service.toString().bold.green + ' service in the ' + region.toString().bold.green + ' region');
    })
})
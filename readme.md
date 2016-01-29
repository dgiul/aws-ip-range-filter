# AWS IP Range Filter

At one point I needed to take the list of IP ranges that Amazon uses with AWS and filter it to just show the ones I cared about, which at the time was to see what uses the service "AMAZON" in the region "us-east-1".

This is a Node.js implementation that accomplishes that task.

## Install dependancies
Install the dependancies by running `npm install`.

## Set what you're filtering by
Modify the index.js file and set the `region` to be the region you want to filter by, and `service` to be the service you want to filter by.

By default it will filter the list to the service "AMAZON" in the region "us-east-1". If that's what you need, move on to the next step. Otherwise, be sure to change those values.

The current list of valid regions include:

```
us-east-1
ap-northeast-1
ap-southeast-1
eu-west-1
us-west-1
us-west-2
eu-central-1
ap-southeast-2
sa-east-1
ap-northeast-2
GLOBAL
us-gov-west-1
cn-north-1
```

The current list of valid services include:

```
AMAZON
EC2
ROUTE53
ROUTE53_HEALTHCHECKS
CLOUDFRONT
```

## Run the script
Execute the following command to run the script and retrieve, then filter the list:

```
node index.js
```

Within a few moments you should see a list that looks something like this:

```
...
205.251.247.0/24
205.251.248.0/24
205.251.255.0/24
207.171.160.0/20
207.171.176.0/20
216.182.224.0/20
Found 76 IP ranges for the AMAZON service in the us-east-1 region
```
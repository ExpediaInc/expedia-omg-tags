# How to contribute

Third-party patches are essential for helping our marketing team to reach their performance metrics. 
We want to keep it as easy as possible to contribute changes that
get things working. There are a few guidelines that we
need contributors to follow so that we can have a chance of keeping on
top of things.

## Overview
Our motivation is to have a tealium javascript extension and/or customized tag template code reviewed before publishing to production.  We also want to be able to easily view history changes. 
This document has been prepared by MTT OMG Team .  As OMG we will continue to iterate and update the content this document as see fit to have a balance in software best practices, quality, and speed in which we deliver tags.
For the remainder of this document the tealium javascript extension or customized tag template will be referred to as javascript code.

## Project Directory Structure

### Library Extensions and Tags
Required extensions are under src/library/required/extension
Simplified extensions are under src/library/simplified/extension
Simplified tags are under src/library/simplified/tag

###Profile Extensions and Tags
Profile extensions should be under src/profile/[profile-name]/extension
Profile Tags tags under src/profile/[profile-name]/tag
Create missing folders as needed.

## General Guidelines

###Naming

Try to keep the name of the tag and extension similar to the javascript file name, i.e. “Check-In Date” extension is stored in checkin-date.js
Tag specific extensions should be prefixed, i.e. “PHG Supplier” / phg-supplier.js

## Custom Tag

For custom tag, ensure you respect the checklist below and provide any extra information.

### Code Review Checklist

| Item   |      Notes |
|----------|:------:|
| Minified |   |
| Compressed (content-encoding:gzip) |   |
| No external javascript libraries|   |
| No console log statement|   |
| All javascript sources originate from a site that uses HTTPS TLS 1.2+|   |
| Compressed script size within limit|   |
| Child script sizes within limit|   |
| Checked for Debugger statement(s)|   |
| Checked for PII - emails, names, etc..|   |
| Checked for Key loggers|   |

### Informational

| Item   |      Notes |
|----------|:------:|
| Uses cookies |   |
| Uses localStorage |   |

## Workflow

Workflow for a new customized tag

1. Developer A initially forks the github repo
2. Developer A makes changes to the repo
3. Developer A creates a pull request
4. Developer B (or more developers) reviews the pull request
5. Developer B merges the pull request
6. Developer B creates a new custom tag and copies the new custom tag code from github
	* Developer B sets the target environment for dev only.
	* Developer B publishes changes to dev.
	* Developer B notifies Tag Owner that changes are in dev.
7. Tag Owner maps tag datasources and apply load rules.
8. Tag Owner publishes changes to dev
9. Tag Owner verifies changes in the trunk.
10. Developer B goes through the custom tag check list; Notifies Developer A and/or Tag Owner for any checklist violation
11. Developer B enables tag for prod and publishes to dev.
12. Tag Owner requests a prod push for the new custom tag
13. IOTA publishes the new custom tag to prod
14. IOTA notifies Tag Owner that the tag is now in prod
15. Tag Owner verifies changes in prod

# Bookstore
Qa automation of a search functionality for the books lists.

To test the backend API we need to install Postman.

INSTALLATION
------------

Go to https://www.postman.com/downloads/ select your configuration and download.

Con

CONFIGURATION
-------------
Step 1

Open postman app and select at the down below skip and go to the app.
Step 2

In the middle at the top select file and the import
Step 3

A new pop up appear in the url bar paste this 
{
	"info": {
		"_postman_id": "2fa807a1-2043-44b2-83fd-1b1f5e7563a0",
		"name": "Bookstore",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "27701618"
	},
	"item": [
		{
			"name": "https://demoqa.com/BookStore/v1/Books",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var search = {",
							"    \"books\": {",
							"        \"type\": \"string\"",
							"    }",
							"};",
							"",
							"var title = [\"Git Pocket Guide\",\"Learning JavaScript Design Patterns\",\"Designing Evolvable Web APIs with ASP.NET\",\"Speaking JavaScript\",\"You Don't Know JS\",\"Programming JavaScript Applications\",\"Eloquent JavaScript, Second Edition\",\"Understanding ECMAScript 6\"];",
							"var author = [\"Richard E. Silverman\",\"Addy Osmani\",\"Glenn Block et al.\",\"Axel Rauschmayer\",\"Kyle Simpson\",\"Eric Elliott\",\"Marijn Haverbeke\",\"Nicholas C. Zakas\" ];",
							"",
							"pm.test('Search is valid', function () {",
							"    pm.expect(tv4.validate(title, search)).to.be.exist;",
							"    pm.expect(tv4.validate(author, search)).to.be.exist;    ",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://demoqa.com/BookStore/v1/Books",
					"protocol": "https",
					"host": [
						"demoqa",
						"com"
					],
					"path": [
						"BookStore",
						"v1",
						"Books"
					]
				},
				"description": "Automate the REST API Books endpoint"
			},
			"response": []
		}
	]
}

Step 4

Click on the dropdown symbol an click on GET, click on Test and down below in test results and click on send button.


To test the front-end we need to install two open-source app Node.js and Cypress.

INSTALLATION
------------
Step 1 Install Node.js

Go to https://nodejs.org/es and download, A executable file will appear follow the steps.
To check installation is succesful in the terminal type /usr/local/bin

Step 2 Install Cypress

Go to https://docs.cypress.io/guides/getting-started/installing-cypress Install Cypress via npm:
1)In the terminal type cd /your/project/path 
2)npm install cypress --save-dev

Step 3 Open Cypress
In the terminal type ./node_modules/.bin/cypress open
A pop-up appear choose a E2E Testing. after that choose any browser and click on Start E2E Testing in chrome.

# Middleware

It is a microservices example, with an API exposed by Kong Gateway https://getkong.org/

#Installing

Step 1

Install kong, https://konghq.com/install/  vagrant is recommended https://getkong.org/install/vagrant/

#initiate

Step 2

Run the example service, in order to run the service go to middleware folder and run these commands

npm install
npm run start

u can check the example service in http://localhost:3000/examples/example
Step 3

Start Kong
https://getkong.org/docs/0.13.x/getting-started/quickstart/

#configure

Step 4

Add service to gateway (kong)
https://getkong.org/docs/0.13.x/getting-started/configuring-a-service/

Or adding a route and the service
https://getkong.org/docs/0.13.x/admin-api/#add-route
add a route in kong
https://getkong.org/docs/0.13.x/admin-api/#add-service
add the service binding

Or execute the commands in the kong.config file in a shell or console
(if you are using vagrant with virtual box, use curl interface, and expose ports or add a bridge).

#test

Step 5

Test the URL of the service through the API Gateway   

http://localhost:8000/apis/example-service

#  Install dependencies
npm install

# Run server
npm run start

# Test Router

get => /
get => /status

# Sample route and send sample data

post => /api/mailer/contact

{
	"name": "example name",
	"email": "example email",
	"company": "example company",
	"message": "example message"
}

response = { response: 'SUCCESS' }

# => Check the results in the api console

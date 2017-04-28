TESTS = test/*.js
merchantSecretKey = dev.pem
enviroment = DEV
merchantId = 219be6b7-b3ca-4bd1-9886-a16d40b0bfe2

test:
	--env merchantSecretKey=$(merchantSecretKey) enviroment=$(enviroment) merchantId=$(merchantId) mocha --timeout 10000 --reporter spec $(TESTS)

.PHONY: test
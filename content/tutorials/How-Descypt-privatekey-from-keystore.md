---
title: "How can I decrypt the private key in my keystore?"
date: "2018-11-03"
author: Josh
---




1. Open [SmartX](http://smartxdebug.ont.io/#/) (Chrome recommended), go to "Tool", and you will find "Decrypt Private Key" at the bottom on the page.  

2. Take the following information from your keystore:

        a) Encrypted private key ( e.g. 6fn6KFrpXTeLQUTus82IW56mOf9zfCzsYenbbtlHGv6GD1y3q5PV3pD2LQRh7iPQ)
        
        b) Address (e.g. AXvprchw69nAgGakuiyM9CUFNdsU3v1bj1)
        
        c) Salt (e.g. YTw33YRjqKvJ51jL6CDwaA==)
        
        d) N (e.g. 4096)

3. Input your password (e.g. 123456).

4. Click "Transform"

5. If your data and password are correct, it will output your private key (e.g. ce2f8b3ad44526a2efc7964a297bb27cb8bf9baa088df0f06fcccf1b67ea39d1)


Wallet keystore example:
```

{
	"defaultOntid": "",
	"defaultAccountAddress": "",
	"createTime": "2018-08-19T00:22:54.761Z",
	"version": "1.0",
	"scrypt": {
		"n": 4096,
		"r": 8,
		"p": 8,
		"dkLen": 64
	},
	"identities": [{
		"ontid": "did:ont:AXvprchw69nAgGakuiyM9CUFNdsU3v1bj1",
		"label": "",
		"lock": false,
		"controls": [{
			"id": "1",
			"algorithm": "ECDSA",
			"parameters": {
				"curve": "secp256r1"
			},
			"key": "6fn6KFrpXTeLQUTus82IW56mOf9zfCzsYenbbtlHGv6GD1y3q5PV3pD2LQRh7iPQ",
			"address": "AXvprchw69nAgGakuiyM9CUFNdsU3v1bj1",
			"salt": "YTw33YRjqKvJ51jL6CDwaA==",
			"enc-alg": "aes-256-gcm"
		}]
	}],
	"accounts": [{
		"address": "AXvprchw69nAgGakuiyM9CUFNdsU3v1bj1",
		"label": "bdc0cdc9",
		"lock": false,
		"algorithm": "ECDSA",
		"parameters": {
			"curve": "secp256r1"
		},
		"key": "cGUHHAFlxtn2BnmuuTabZKs5/3XbC7yMj7tnL6jfVGS1jvRylOyPLwZgx0SlA7Gd",
		"enc-alg": "aes-256-gcm",
		"salt": "cm5CjGKIxROBx672oy39uQ==",
		"isDefault": false,
		"publicKey": "03f216dad83e9fccec68f7ec4417fb58b3faaa7abd427611526b3b981e99c0cf73",
		"signatureScheme": "SHA256withECDSA"
	}],
	"extra": null
}
```



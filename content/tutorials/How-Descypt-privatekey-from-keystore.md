---
title: "How to Decrypt Private Key from keystore?"
date: "2018-11-03"
author: Josh
---




1. Open http://smartxdebug.ont.io/#/ and goto tool,you can found Decrypt Private Key at last.
2. Copy data from identity or account, include Key/Address/Salt/N. as below:

    *  Encrypted Private Key: 6fn6KFrpXTeLQUTus82IW56mOf9zfCzsYenbbtlHGv6GD1y3q5PV3pD2LQRh7iPQ
    
    * Address: AXvprchw69nAgGakuiyM9CUFNdsU3v1bj1
    
    * Salt:  YTw33YRjqKvJ51jL6CDwaA==
    
    * N:  4096

3. Input your passwrod, Password:  123456

4. Click Transform

5. If your data and password is correct,it will output Private Key:
Private Key:  ce2f8b3ad44526a2efc7964a297bb27cb8bf9baa088df0f06fcccf1b67ea39d1  

wallet example:
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



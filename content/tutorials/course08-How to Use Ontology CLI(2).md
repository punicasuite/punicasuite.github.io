---
title: "Course08: How to Use Ontology CLI (2)"
date: "2018-11-13"
author: zhaoyue
---

<h1 align="center">How to Use Ontology CLI (2)</h1>
<p align="center" class="version">Version 0.1</p>

## 1. Query information of the blockchain

Query information command can query information such as blocks, transactions, and transaction executions. You can use the ./Ontology info block --help command to view help information.

Query block information
```
./Ontology info block <height|blockHash>
```

Query transaction information
```
./Ontology info tx <TxHash>
```

Query transaction execution information
```
./Ontology info status <TxHash>
```

result:
```
{
   "TxHash": "4c00674d96b1d3d2c8152b905cae6f87fff0ec8acf28ca3e7465aac59de814a1",
   "State": 1,
   "GasConsumed": 0,
   "Notify": [
      {
         "ContractAddress": "ff00000000000000000000000000000000000001",
         "States": [
            "transfer",
            "TA587BCw7HFwuUuzY1wg2HXCN7cHBPaXSe",
            "TA5gYXCSiUq9ejGCa54M3yoj9kfMv3ir4j",
            10
         ]
      }
   ]
}
```

Among them, State represents the execution result of the transaction. The value of State is 1, indicating that the transaction execution is successful. When the State value is 0, it indicates that the execution failed. GasConsumed indicates the ONG consumed by the transaction execution. Notify represents the Event log output when the transaction is executed. Different transactions may output different event logs.

## 2. Smart contract deployment and invocation

Smart contract operations support the deployment of NeoVM smart contract, and the pre-execution and execution of NeoVM smart contract.

### 2.1 Smart contract deployment

Before smart deployment, you need to compile the NeoVM contract compiler such as [SmartX](http://smartx.ont.io/) and save the compiled code in a local text file.

**Smart contract deployment parameters:**

--wallet, -w The wallet parameter specifies the wallet path of account for deploying smart contracts. Default: "./wallet.dat".

--account, -a The account parameter specifies the account that a contract deploys.

--gasprice The gasprice parameter specifies the gas price of the transfer transaction. 

--gaslimit The gaslimit parameter specifies the gas limit of the transfer transaction. 

For contract deployments, the gaslimit value must be greater than 20000000, and there must be sufficient ONG balance in the account.

--needstore The needstore parameter specifies whether the smart contract needs to use persistent storage. If needed, this parameter is required. The default is not used.

--code The code parameter specifies the code path of a smart contract.

--name The name parameter specifies the name of a smart contract.

--version The version parameter specifies the version number of a smart contract.

--author The author parameter specifies the author information of a smart contract.

--email The email parameter specifies the contact email of a smart contract.

--desc The desc parameter specifies the description of a smart contract.

--prepare, -p The prepare parameter indicates that the current deploy is a pre-deploy contract. 

**Smart contract deployment**
```
./Ontology contract deploy --name=xxx --code=xxx --author=xxx --desc=xxx --email=xxx --needstore --gaslimit=100000000
```

After deployment, the TxHash of the transaction and the contract address will be returned. For example:
```
Deploy contract:
Contract Address:806fbee1fcfb554af47844edd4d4ce2918737747
TxHash:99d719f51837acfa48f9cd2a21983fb993bc8d5a763b497802f7b872be2338fe
```

### 2.2 Smart contract invocation

**Smart contract invocation parameters:**

--wallet, -w The wallet parameter specifies the account wallet path for smart contract execution. Default: "./wallet.dat".

--account, -a The account parameter specifies the account that will execute the contract.

--gasprice The gasprice parameter specifies the gas price of the transfer transaction. 

--gaslimit The gaslimit parameter specifies the gas limit of the transfer transaction. 

--address The address parameter specifies the calling contract address.

--params The params parameter is used to input the parameters of the contract invocation. The input parameters need to be encoded as described above. Params format: `string:method,[string:arg1,int:arg2]`.

--prepare, -p The prepare parameter indicates that the current execution is a pre-executed contract. The transactions executed will not be packaged into blocks, nor will they consume any ONG. Pre-execution will return the contract method's return value, as well as the gas limit required for the current call.

--return The return parameter is used with the --prepare parameter, which parses the return value of the contract by the return type of the --return parameter when the pre-execution is performed.

**Smart contract pre-execution**
```
./Ontology contract invoke --address=XXX --params=XXX --return=XXX --p
```

Return example:
```
Contract invoke successfully
Gas consumed:20000
Return:0
```

**Smart contract execution**
```
./Ontology contract invoke --address=XXX --params=XXX --gaslimit=XXX
```

Before the smart contract is executed, the gas limit required by the current execution can be calculated through pre-execution to avoid execution failure due to insufficient ONG balance.

## 3. Build, sign, and send a transaction

Build transaction command can build transaction raw data, such as transfer transaction, approve tansaction, and so on. Note that before send to Ontology, the transaction after built should be signed by private key.

### 3.1 Build a transaction

**The parameters of building transfer transaction:**

--wallet, -w Wallet specifies the transfer-out account wallet path. The default value is: "./wallet.dat".

--gasprice The gasprice parameter specifies the gas price of the transfer transaction. 

--gaslimit The gaslimit parameter specifies the gas limit of the transfer transaction. 

--asset The asset parameter specifies the asset type of the transfer. Ont indicates the ONT and ong indicates the ONG. The default value is ont.

--from The from parameter specifies the transfer-out account address.

--to The to parameter specifies the transfer-in account address.

--amount The amount parameter specifies the transfer amount. 

--payer payer parameter specifies the transaction fee payer. If don't specifies, using signer account default.

**Build a transaction**
```
./ontology buildtx transfer --from=ARVVxBPGySL56CvSSWfjRVVyZYpNZ7zp48 --to=AaCe8nVkMRABnp5YgEjYZ9E5KYCxks2uce --amount=10
```

Return example:
```
Transfer raw tx:
00d1d376865bf401000000000000204e0000000000006a987e044e01e3b71f9bb60df57ab0458215ef0f6e00c66b6a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a14ca216237583e7c32ba82ca352ecc30782f5a902dc86a5ac86c51c1087472616e736665721400000000000000000000000000000000000000010068164f6e746f6c6f67792e4e61746976652e496e766f6b650000
```

### 3.2 Sign a transaction

The transaction build by buildtx command, should be signed before send to Ontology. Note that if transction fee payer is different with transfer from, both account should sign to the transaction.

**The parameters of signing a transaction**

--wallet, -w Wallet specifies the wallet path of authorized account. The default value is: "./wallet.dat".

--account, a account parameter specifies signature account, if not specified, the default account of wallet will be used.

--send --send parameter specifies whether send transaction to Ontology after signed.

--prepare prepare parameter specifies whether prepare execute transaction, without send to Ontology.

--rpcport The rpcport parameter specifies the port number to which the RPC server is bound. The default is 20336.

**Sign a transaction**
```
./ontology sigtx --account=ARVVxBPGySL56CvSSWfjRVVyZYpNZ7zp48 00d11b56875bf401000000000000204e0000000000006a987e044e01e3b71f9bb60df57ab0458215ef0f8e00c66b6a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a140000000000000000000000000000000000000001c86a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a071f57ad26643f08c86c0c7472616e7366657246726f6d1400000000000000000000000000000000000000020068164f6e746f6c6f67792e4e61746976652e496e766f6b650000
```

**Return example**
```
RawTx after signed:
00d11b56875bf401000000000000204e0000000000006a987e044e01e3b71f9bb60df57ab0458215ef0f8e00c66b6a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a140000000000000000000000000000000000000001c86a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a071f57ad26643f08c86c0c7472616e7366657246726f6d1400000000000000000000000000000000000000020068164f6e746f6c6f67792e4e61746976652e496e766f6b65000141407331b7ba2a7708187ad4cb14146d2080185e42f0a39d572f58d25fa2e20f3066711b64f2b91d958683f7bfb904badeb0d6bc733506e665028a2c2968b77d5958232103c0c30f11c7fc1396e8595bf2e339d553d728ea6f21ae831e8ab704ca14fe8a56ac
```

### 3.3 Send a transaction

The transaction after being signed can be sent to Ontology via sendtx command.

**Send a transaction**
```
./ontology sendtx 00d17c61875bf401000000000000204e0000000000006a987e044e01e3b71f9bb60df57ab0458215ef0f6e00c66b6a146a987e044e01e3b71f9bb60df57ab0458215ef0fc86a14ca216237583e7c32ba82ca352ecc30782f5a902dc86a5ac86c51c1087472616e736665721400000000000000000000000000000000000000010068164f6e746f6c6f67792e4e61746976652e496e766f6b65000141409f32f1fd170d174959da26cb9df8f4a15049d255ed3953d92870d5739c4e8b8158ec3bde1e9ae9b4d9621b09311b5e49ed91dcbc64d3b5f74cf011eaa616c403232103c0c30f11c7fc1396e8595bf2e339d553d728ea6f21ae831e8ab704ca14fe8a56ac
```

Return example:
```
TxHash:f8ea91da985af249e808913b6398150079cdfb02273146e4eb69c43947a42db2

Tip:
Using './ontology info status f8ea91da985af249e808913b6398150079cdfb02273146e4eb69c43947a42db2' to query transaction status.
```

### 3.4 Display transaction information 

The information of transaction field can be show via showtx command.

```
./ontology showtx 00d1045f875bf401000000000000204e000000000000f47d92d27d02b93d21f8af16c9f05a99d128dd5a6e00c66b6a14f47d92d27d02b93d21f8af16c9f05a99d128dd5ac86a14ca216237583e7c32ba82ca352ecc30782f5a902dc86a5ac86c51c1087472616e736665721400000000000000000000000000000000000000010068164f6e746f6c6f67792e4e61746976652e496e766f6b65000141409dd2a46277f96566b9e9b4fc354be90b61776c58125cfbf36e770b1b1d50a16febad4bfadfc966fa575e90acf3b8308d7a0f637260b31321cb7ef6f741364d0e47512102b2b9fb60a0add9ef6715ffbac8bc7e81cb47cd06c157c19e6a858859c01582312103c0c30f11c7fc1396e8595bf2e339d553d728ea6f21ae831e8ab704ca14fe8a5652ae
```

Return example:
```
{
"Version": 0,
"Nonce": 1535598340,
"GasPrice": 500,
"GasLimit": 20000,
"Payer": "Ae4cxJiubmgueAVtNbjpmm2AGNgdKP6Ea7",
"TxType": 209,
"Payload": {
"Code": "00c66b6a14f47d92d27d02b93d21f8af16c9f05a99d128dd5ac86a14ca216237583e7c32ba82ca352ecc30782f5a902dc86a5ac86c51c1087472616e736665721400000000000000000000000000000000000000010068164f6e746f6c6f67792e4e61746976652e496e766f6b65",
"GasLimit": 0
},
"Attributes": [],
"Sigs": [
{
"PubKeys": [
"02b2b9fb60a0add9ef6715ffbac8bc7e81cb47cd06c157c19e6a858859c0158231",
"03c0c30f11c7fc1396e8595bf2e339d553d728ea6f21ae831e8ab704ca14fe8a56"
],
"M": 1,
"SigData": [
"9dd2a46277f96566b9e9b4fc354be90b61776c58125cfbf36e770b1b1d50a16febad4bfadfc966fa575e90acf3b8308d7a0f637260b31321cb7ef6f741364d0e"
]
}
],
"Hash": "34559b63187d7ddf5a17ac7a2dabb8fcaa1bea6676eba78a174d038ff3c66f15",
"Height": 0
}
```

```
Please feel free to give any suggestion
Contact: Yue Zhao 
Wechat: 16621171248
Email: messixaviinsta0303@163.com
```

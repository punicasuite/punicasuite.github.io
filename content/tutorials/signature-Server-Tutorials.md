---
title: "Signature Server Tutorials"
date: "2018-11-02"
author: Josh
---




> Note: **This** document from [sigsvr](https://github.com/ontio/ontology/blob/master/docs/specifications/sigsvr.md).





Ontology Signature Server - sigsvr is a rpc server for signing transactions.

* [Ontology Signature Server Tutorials](#ontology-signature-server-tutorials)
	* [1. Signature Service Startup](#1-signature-service-startup)
		* [1.1 The Parameters of Signature Service Startup](#11-the-parameters-of-signature-service-startup)
		* [1.2 Import wallet account](#12-import-wallet-account)
			* [1.2.1 Import wallet account parameters](#121-import-wallet-account-parameters)
		* [1.3 Startup](#13-startup)
	* [2. Signature Service Method](#2-signature-service-method)
		* [2.1  Signature Service Calling Method](#21-signature-service-calling-method)
		* [2.2 Signature for Data](#22-signature-for-data)
		* [2.3 Signature for Raw Transactions](#23-signature-for-raw-transactions)
		* [2.4 Multiple Signature for Raw Transactions](#24-multiple-signature-for-raw-transactions)
		* [2.5 Signature of Transfer Transaction](#25-signature-of-transfer-transaction)
		* [2.6 Native Contract Invokes Signature](#26-native-contract-invokes-signature)
			* [Example1:  Constructing  transfer transaction](#example1-constructing-transfer-transaction)
			* [Example2: Constructing  withdraw ONG transaction](#example2-constructing-withdraw-ong-transaction)
		* [2.7 NeoVM Contract Invokes Signature](#27-neovm-contract-invokes-signature)
		* [2.8 NeoVM Contract Invokes By ABI Signature](#28-neovm-contract-invokes-by-abi-signature)
		* [2.9 Create Account](#29-create-account)
		* [2.10 ExportAccount](#210-exportaccount)




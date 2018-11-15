---
title: "Punica"
name: "Punica"
index: 1
---


<div align="center">
  <img src="https://raw.githubusercontent.com/punicasuite/punica-python/master/punica.png" height="200" width="200">
  <h2 class="doc-title">Punica</h2>
</div>


# Punica python

[English](./README.md)|[中文版](./README_CN.md)

- [1. Overview](#1-overview)
- [2. Installation](#2-installation)
- [3. Quickstart](#3-quickstart)
- [4. Getting started](#4-getting-started)
    - [4.1. Create a Project](#41-create-a-project)
        - [4.1.1. Initializing a New Project](#411-initializing-a-new-project)
	- [4.1.2. Creating a Box Project](#412-creating-a-box-project)
    - [4.2. Compiling](#42-compiling)
    - [4.3. Deployment](#43-deployment)
    - [4.4. Invocation](#44-invocation)
    - [4.5. Node](#45-node)
    - [4.6. Scpm](#46-scpm)
    - [4.7  Smartx](#47-smartx)
    - [4.8  Test](#48-test)
    - [4.9  Wallet](#49-wallet)

<!-- /TOC -->



## 1. Overview

Welcome to Punica! Punica has (almost) everything you need for Ontology DApp development.

### Features
* Punica-Cli supports smart contract compilation, deployment, invocation, testing, and one line commands.
* Punica-Cli implements both Python and TypeScript versions for different language developers.
* The Punica website offers a wealth of documentation and contract templates.
* Solo chain has a UI test node for easy viewing of blocks, transactions, contracts, contract notify, and more.
* Automatically generate dApp project directory, provide various types of boxes, easily develop dApps based on Punica-Boxes.
* The contract test configuration and test function in SmartX use the same standard.
* Smart contract package management tools provided.



## 2. Installation

### Setting up the development environment

There are a few technical requirements before we start. Please install the following:

- [Python 3.7](https://www.python.org/downloads/release/python-370/)
- [Git](https://git-scm.com/)




### Install punica

```shell
pip install punica
```
or 

```shell
python setup.py install
```

## 3. Quickstart

To use most Punica commands, you need to run them against an existing Punica project. So the first step is to create a Punica project.

```shell
punica
Usage: punica [OPTIONS] COMMAND [ARGS]...

Options:
  -p, --project PATH  Specify a punica project directory.
  -v, --version       Show the version and exit.
  -h, --help          Show this message and exit.

Commands:
  compile  Compile the specified contracts to avm and...
  deploy   Deploys the specified contracts to specified...
  init     Initialize new and empty Ontology DApp...
  invoke   Invoke the function list in default-config or...
  node     Ontology Blockchain private net in test mode.
  scpm     Smart contract package manager，support...
  smartx   Ontology smart contract IDE,SmartX...
  test     Unit test with specified smart contract
  unbox    Download a Punica Box, a pre-built Ontology...
  wallet   Manager your ontid, account, asset.
```
You can create a bare Punica project with no smart contracts included, use `punica init` command.

Once this operation is completed, you'll now have a project structure with the following items:

- `contracts/`: Directory for Ontology smart contracts.
- `src/`: Directory for DApp source file.
- `test/`: Directory for test files for testing your application and contracts.
- `wallet/`: Directory for save Ontology wallet file.

## 4. Getting started

To use most Punica commands, you need to run them against an existing Punica project. So the first step is to create a Punica project.

### 4.1. Create a Project

#### 4.1.1. Initializing a New Project

You can create a bare Punica project with no smart contracts included, use `punica init` command.

Once this operation is completed, you'll now have a project structure with the following items:

- `contracts/`: Directory for Ontology smart contracts.
- `src/`: Directory for DApp source file.
- `test/`: Directory for test files for testing your application and contracts.
- `wallet/`: Directory for save Ontology wallet file.

```shell
punica init --help
Usage: punica init [OPTIONS]

  Initialize new and empty Ontology DApp project.

Options:
  -h, --help  Show this message and exit.
```

**Note**: If you not run punica cli in you project root directory, you need to use `-p` or `--project` option to specify your DApp project's path.

#### 4.1.2. Creating a Box Project

You can create a bare project template, but for those just getting started, you can use Punica Boxes, which are example applications and project templates.

We'll use the [ontology-tutorialtoken box](https://github.com/wdx7266/ontology-tutorialtoken), which creates a OEP4 token that can be transferred between accounts:

- Create a new directory for your Punica project:

```shell
mkdir tutorialtoken
cd tutorialtoken
```

- Download ("unbox") the MetaCoin box:

```shell
punica unbox tutorialtoken
```

```shell
punica unbox --help
Usage: punica unbox [OPTIONS] BOX_NAME

  Download a Punica Box, a pre-built Ontology DApp project.

Options:
  -h, --help  Show this message and exit.
```

**Note**:

- You can use the `punica unbox <box-name>` command to download any of the other Punica Boxes.
- If you not run punica cli in you project root directory, you need to use `-p` or `--project` option to specify your DApp project's path.



### 4.2. Compiling

You can use the following command to compile your Ontology smart contracts:

```shell
punica compile
```

If everything goes smoothly, you can find the `avm` and `abi` file in `contracts/build` folder.

```shell
contacts
    ├─build
    │      contract.avm
    │      contract_abi.json
```

For more usage, you can use `punica compile --help` command.

```shell
$ punica compile --help
Usage: punica compile [OPTIONS] CONTRACT_NAME

  Compile the specified contracts to avm and abi file.

Options:
  --contracts TEXT  Compile specified contracts files in contracts dir.
  --local BOOLEAN   Use local compiler.
  -h, --help        Show this message and exit.
```

**Note**: If you not run punica cli in you project root directory, you need to use `-p` or `--project` option to specify your DApp project's path.

### 4.3. Deployment

Before deploying, you need to refine both configuration files. One configuration is punica-config.json in which we configure the
blockchain network we use, another is default-config.json in which we configure the contract information.

To deploy your contract, run the following:

```shell
$ punica deploy
```

This will deploy your smart contract to blockchain.

A simple deployment process looks like this:

```shell
Using network 'privateNet'.

Use the default wallet file: wallet.json
Running deployment: hello_ontology.avm
	Deploying...
	Deploy to: cb9f3b7c6fb1cf2c13a40637c189bdd066a272b4
Deploy successful to network...
	 Contract address is cb9f3b7c6fb1cf2c13a40637c189bdd066a272b4
	 Txhash is 6ad673d77fee33829240ab1f197c0b7109d4fe44b6a8e46fc3d5dca93b7b289d
```

For more usage, you can use `punica deploy --help` command.

```shell
$ punica deploy --help
Usage: punica deploy [OPTIONS]

  Deploys the specified contracts to specified chain.

Options:
  --network TEXT  Specify which network the contracts will be deployed.
  --avm TEXT      Specify which avm file will be deployed.
  --wallet TEXT   Specify which wallet file will be used.
  --config TEXT   Specify which deploy config file will be used.
  -h, --help      Show this message and exit.
```

**Note**:

- If you not run punica cli in you project root directory, you need to use `-p` or `--project` option to specify your DApp project's path.
- If multi `avm` file exist in your `bin` directory, you need to use `--avm` option to specify which contract you want to deploy.
- If multi wallet file exist in your `wallet` directory, you may need to use `--wallet` option to specify which wallet you want to use. otherwise, a random wallet file in `wallet` directory will be used.

### 4.4. Invocation

If you want to invoke a list of function in your deployed smart contract, a convenience way is to use `Invoke` command.
before we invoke , we should first configure the default-config.json.

Support we have an invoke config in our `default-config.json`:

```json
"abi": "hello_ontology_abi.json",
        "defaultPayer": "AUr5QUfeBADq6BMY6Tp5yuMsUNGpsD7nLZ",
        "gasPrice": 0,
        "gasLimit": 20000,
        "functions": [
            {
                "name": "hello",
                "params": {
                    "msg": "Address:AUr5QUfeBADq6BMY6Tp5yuMsUNGpsD7nLZ"
                },
                "signers": {
                    "m": 1,
                    "signer": [
                        "AUr5QUfeBADq6BMY6Tp5yuMsUNGpsD7nLZ"
                    ]
                },
                "preExec": true
            },
            {
                "name": "testListNum",
                "params": {
                    "msg": [1,2,3,4,5]
                },
                "signers": {},
                "preExec": true
            },
            {
                "name": "testListNum2",
                "params": {
                    "msgList": [1,2,3,4,5],
                    "msg": "String:test"
                },
                "signers": {},
                "preExec": true
            },
            {
                "name": "testListStr",
                "params": {
                    "msgList": [
                        "String:hello",
                        "String:world"
                    ],
                    "msg":"String:test"
                },
                "signers": {},
                "preExec": true
            },
            {
                "name": "testListByteArray",
                "params": {
                    "msgList": [
                        "ByteArray:Hello",
                        "ByteArray:world"
                    ],
                    "msg": "String:hello"
                },
                "signers": {},
                "preExec": true
            },
            {
                "name": "testListStruct",
                "params": {
                    "msgList": [
                        {
                            "name": "String:hello",
                            "age": 1
                        },
                        {
                            "name": "String:hello2",
                            "age": 2
                        }
                    ],
                    "msg": "String:test"
                },
                "signers": {},
                "preExec": true
            }
        ]
    }
```
View the functions that can be called

```shell
punica invoke list
```

The following output we will get:
```shell
All Functions:
	 hello
	 testListNum
	 testListNum2
	 testListStr
	 testListByteArray
	 testListStruct
```

To run our invoke function list, run the following:

`punica invoke`

The following output we will get:

```shell
$ punica invoke
Using network 'privateNet'.

Running invocation: hello_ontology_abi.json
Unlock default payer account...
Invoking  hello
Invoke successful
Invoke result: ['8f651d459b4f146380dab28e7cfb9d4bb9c3fcd1']
Invoking  testListNum
Invoke successful
Invoke result: [['01', '02', '03', '04', '05']]
Invoking  testListNum2
Invoke successful
Invoke result: [['01', '02', '03', '04', '05'], '74657374']
Invoking  testListStr
Invoke successful
Invoke result: [['68656c6c6f', '776f726c64'], '74657374']
Invoking  testListByteArray
Invoke successful
Invoke result: [['48656c6c6f', '776f726c64'], '68656c6c6f']
Invoking  testListStruct
Invoke successful
Invoke result: [['68656c6c6f', '01'], ['68656c6c6f32', '02'], '74657374']
	
```

For more usage, you can use `punica invoke --help` command.

```shell
$ punica invoke --help
Usage: punica invoke [OPTIONS] COMMAND [ARGS]...

  Invoke the function list in default-config or specify config.

Options:
  --network TEXT    Specify which network the contracts will be deployed.
  --wallet TEXT     Specify which wallet file will be used.
  --functions TEXT  Specify which function will be executed.
  --config TEXT     Specify which config file will be used.
  --preexec TEXT    preExec the function.
  -h, --help        Show this message and exit.

Commands:
  list  List all the function in default-config or...
```

**Note**:

- If you not run punica cli in you project root directory, you need to use `-p` or `--project` option to specify your DApp project's path.
- If multi wallet file exist in your `wallet` directory, you may need to use `--wallet` option to specify which wallet you want to use. otherwise, a random wallet file in `wallet` directory will be used.

### 4.5 Node

```shell
$ punica node
Usage: punica node [OPTIONS]

   Ontology Blockchain private net in test mode. please download from
   https://github.com/punicasuite/solo-chain/releases

Options:
   -h, --help  Show this message and exit.
```

### 4.6. Scpm

```shell
$ punica scpm
Usage: punica scpm [OPTIONS]

   smart contract package manager，support download and publish.

Options:
   -h, --help  Show this message and exit.

```
### 4.7  Smartx

```shell
$ punica smartx

Please go to Smartx for debugging smart contracts:
http://smartx.ont.io/#/
```
### 4.8  Test

```shell
$ punica test -h
Usage: punica test [OPTIONS] COMMAND [ARGS]...

  Unit test with specified smart contract

Options:
  --file TEXT  Specify which test file will be used.
  -h, --help   Show this message and exit.

Commands:
  template  generate test template file
```
### 4.9  Wallet

```shell
$ punica wallet
Usage: punica wallet [OPTIONS] COMMAND [ARGS]...

   Manager your asset, ontid, account.

Options:
   -h, --help  Show this message and exit.

Commands:
   account  Manager your account.
   asset    Manager your asset, transfer, balance,...
   ontid    Manager your ont_id, list or add.

```


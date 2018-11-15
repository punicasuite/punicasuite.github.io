---
title: "Punica"
name: "Punica"
index: 1
---


<div align="center">
  <img src="https://raw.githubusercontent.com/punicasuite/punica-python/master/punica.png" height="200" width="200"><br>
</div>

Welcome to Punica! Punica has (almost) everything you need for Ontology DApp development.Please see the more detailed documentation.[Here](http://dev-docs.ont.io/#/docs-en/Punica/punica)

### Features

* Punica-Cli supports smart contract compilation, deployment, invocation, testing, and one line commands.
* Punica-Cli implements both Python and TypeScript versions for different language developers.
* The Punica website offers a wealth of documentation and contract templates.
* Solo chain has a UI test node for easy viewing of blocks, transactions, contracts, contract notify, and more.
* Automatically generate dApp project directory, provide various types of boxes, easily develop dApps based on Punica-Boxes.
* The contract test configuration and test function in SmartX use the same standard.
* Smart contract package management tools provided.

### Quickstart

This page will take you through the basics of creating a Punica project and how to use punica command line.

**Note**: Before you begin, make sure that you read our [Ontology](https://ont.io/) website.


#### Punica Python Cli

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


#### 1. Create a Project

```shell
mkdir tutorialtoken
cd tutorialtoken
```

##### 1.1 Initializing a New Project

You can create a bare Punica project with no smart contracts included, use `punica init` command.

```shell
punica init
```

Once this operation is completed, you'll now have a project structure with the following items:

- `contracts/`: Directory for Ontology smart contracts.
- `src/`: Directory for DApp source file.
- `test/`: Directory for test files for testing your application and contracts.
- `wallet/`: Directory for save Ontology wallet file.

##### 1.2 Creating a Box Project

- Create a new directory for your Punica project:



- Download ("unbox") the MetaCoin box:

```shell
punica unbox tutorialtoken
```

#### 2. Compiling


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
#### 3. Deployment

To deploy your contract, run the following:

```shell
punica deploy
```

#### 4. Invocation

If you want to invoke a list of function in your deployed smart contract, a convenience way is to use `Invoke` command.

```shell
punica invoke
```

We have an invoke config in our `default-config.json`.

View the functions that can be called.

```shell
punica list
```

#### 5. Test

```shell
sss:test sss$ punica test -h
Usage: punica test [OPTIONS] COMMAND [ARGS]...

  Unit test with specified smart contract

Options:
  --file TEXT  Specify which test file will be used.
  -h, --help   Show this message and exit.

Commands:
  template  generate test template file
```

#### 6. Wallet

```shell
sss:test sss$ punica wallet
Usage: punica wallet [OPTIONS] COMMAND [ARGS]...

   Manager your asset, ontid, account.

Options:
   -h, --help  Show this message and exit.

Commands:
   account  Manager your account.
   asset    Manager your asset, transfer, balance,...
   ontid    Manager your ont_id, list or add.

```
---
title: "Learning SmartX: Smart Contract Development "
date: "2018-10-26"
author: Josh Chow
---


## Smart Contract Development

This tutorial will guide you through the process of creating a smart contract, deploying it to your private-net, testing and finally deploying it to the Ontology Mainnet. 

The steps used will be:

1. Create/edit smartcontract in SmartX (**do not deploy at this step**)
2. Download and install solo-chain
3. Install Cynao in chrome and use private net which will connnect to solo-chain
4. Deploy smartcontract in SmartX which will use cynao to deploy to solo-chain
5. Check the smartcontract has deployed successfully on the solo-chain
6. Invoke smartcontract in SmartX  which will use cynao to invoke on solo-chain
7. Check transction on solo-chain
8. Deploy/Invoke to Mainnet using SmartX and Cyano (**only do this when you have completed development**)


The following tools will be needed:

* [SmartX](https://smartx.ont.io/) - our online smart contract IDE and debugger
* [Solo-chain](https://github.com/punicasuite/solo-chain/releases) - a prebuilt private-net for development
* [Cyano wallet](https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm?utm_source=chrome-ntp-icon) - an Ontology chrome extension wallet
<p><br>


### Create and compile your smart contract in SmartX

We will develop, compile and test our smart contract using the [SmartX](https://smartx.ont.io/) tool. If you are new to SmartX, please read over the [SmartX Tutorial](https://ontio.github.io/documentation/SmartX_Tutorial_en.html) which will guide you thorugh the process of using the tool.

Create a new project in the language of your choice and use one of the templates to work with if you don't have your own smart contract. 

Compile your smart contract but **do not deploy it yet**.

![Compile](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/SmartX_compile.jpg)


<p><br>

### Download and install solo-chain

Solo-chain is a pre-built Ontology private-net which includes a number of tools to interact with and monitor the network.

Download and install [Solo-chain](https://github.com/punicasuite/solo-chain/releases) and verify it is working as expected.  You can do this by checking that blocks are being generated and/or initiating a transaction.  

Please make note of the IP address shown in the dashboard for later use.

![Solo-chain dashboard](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/solo-chain_interface.jpg)

<p><br>

### Install Cyano

Cyano wallet is a Google Chrome extension that is integrated with SmartX and allows developers to deploy/invoke smart contracts either on a private-net or the Ontology mainnet.

Install [Cyano wallet](https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm?utm_source=chrome-ntp-icon) and click on the setting cog in the top right hand corner of the first screen.

![Cyano settings cog](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/Cyano_settings_cog.jpg)

Change the network to **Private-Net** and put the IP address shown in the solo-chain interface in Cyano (typically 127.0.0.1).

![Cyano settings page](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/Cyano_settings_page.jpg)

Once Cyano is successfully connected to your private-net, the connection icon in the bottom right hand side of the screen will show a connected icon (as above).

Next, import the private key of the main address from your solo-chain into Cyano.

Finally, initiate a transaction and claim your ONG which will be used to pay for transaction fees during deployment/invocation.
<p><br>

### Deploy smart contract in SmartX

Once you are satisfied with your smart contract, you can use SmartX to deploy it to your private-net.  SmartX will interact with Cyano wallet in order to deploy and pay the transaction fee(s).

Select Deploy in SmartX and enter the appropriate details in the Information fields (Name, Author, etc).  Once this has been done, select deploy.

![SmartX deploy](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/SmartX_deploy.jpg)

<p>
Cyano wallet will be launched and the smart contract deploy screen will be shown.  Ensure the details are correct and select confirm.  

![Cyano SC deploy](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/Cyano_SC_deploy.jpg)

Enter your Cyano wallet password to deploy your smart contract.

You can verify the smart contract has been deployed correctly by clicking the Smart Contract icon in solo-chain which will show you the contract hash and information you entered in SmartX.

![Solo-chain SC list](https://raw.githubusercontent.com/panther142/documentation/master/docs/lib/images/solo-chain_SC_list.jpg)


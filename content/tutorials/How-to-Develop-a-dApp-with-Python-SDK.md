<h1 align="center">Learning SmartX: How to Develop a DApp with Python SDK</h1>
<p align="center" class="version">Version 0.1</p>

## Test a smart contract on Ontology private net

### 1. Install the Solo-Chain

Step1 - Install the Solo-Chain as [Solo-Chain documentation](https://github.com/punicasuite/solo-chain) instructs. Here is [release address](https://github.com/punicasuite/solo-chain/releases).

Step2 - Run the Solo-Chain.

![solo-chain](https://upload-images.jianshu.io/upload_images/150344-d6985a21a09649f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. Create a python project

Step1 - Open [SmartX](https://smartx.ont.io) and select the python language and blank template. Copy the code in [OEP4Sample.py](https://github.com/tonyclarking/python-template/blob/master/OEP4Sample/OEP4Sample.py](https://github.com/tonyclarking/python-template/blob/master/OEP4Sample/OEP4Sample.py)
) to editor.


### 3. Compile and deploy

Step1 - Clicking the "Compile" button to compile the smart contract. ABI and AVM will be generated and Opcode will be displayed at the bottom.

Step2 - Deploy the contract

Input basic information and click the "Deploy" button.

![info](https://upload-images.jianshu.io/upload_images/150344-3a034864ce002d45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

The Chrome browser will open Cyano wallet automatically and a confirmation of  deployment is required .

Note: You can click setting icon in the upper right corner to open setting and then select the **Private-Net**. Your account needs to have enough balance to execute the deployment. 

![wallet](https://upload-images.jianshu.io/upload_images/150344-da73fd59ddda019a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

After the success of deployment, a contract hash will be generated.

![contract hash](https://upload-images.jianshu.io/upload_images/150344-4da9a4356ed39f08.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4. Test a smart contract on private net

Step1 - Add an account

Input your account private key (hex string) and click the "OK" button.

![UI](https://upload-images.jianshu.io/upload_images/150344-316134e08f8d714d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![add account](https://upload-images.jianshu.io/upload_images/150344-d98a51d38719cfca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Step2 - Select the function you want to invoke and run

![test](https://upload-images.jianshu.io/upload_images/150344-2fb5ed14a314dfed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

The log result for successful invocation

![log result](https://upload-images.jianshu.io/upload_images/150344-bff2cb2082eec6ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## Develop a DApp with Python SDK

### 1. Install punica

```
pip install punica
```

We use tutorial-token as an example. Now we install tutorialtoken-box

```
mkdir tutorialtoken
cd tutorialtoken
punica unbox tutorialtoken
```

### 2. Compile ,deploy and invoke

Note: Before compilation, you can modify the code if you want to. The contract ope4_token.py locates under /tutorialtoken/contracts. 

#### 2.1 Compile

```
punica compile
```

The result:

```
Compile
Compile oep4_token.py
compiled, Thank you
```

#### 2.2 Deploy

```
punica deploy
```

The result:

```
Using network 'testNet'.

Deploy failed...
Contract has been deployed...
Contract address is 0xd7b6a47966770c1545bf74c16426b26c0a238b16...
```

Note: The reason why the result occurs "Deploy failed..." is that the contract has already been deployed.

#### 2.3 Invoke

```
punica invoke
```

```
Using network 'testNet'.

Running invocation: oep4_token_abi.json
Unlock default payer account...
Invoking  init
Invoke successful
Invoke result: 0x00
Invoking  name
Invoke successful
Invoke result: 0x4458546f6b656e
Invoking  symbol
Invoke successful
Invoke result: 0x4458
Invoking  decimals
Invoke successful
Invoke result: 0x0a
Invoking  totalSupply
Invoke successful
Invoke result: 0x0000e8890423c78a00
Invoking  balanceOf
Invoke successful
Invoke result: 0x
Invoking  transfer
Unlock signers account...
Invoke failed, Please input gasLimit >= 20000 and gasPrice >= 500
Invoking  transferMulti
Unlock signers account...
Invoke failed, [NeoVmService] vm execute state fault!
Invoking  allowance
Unlock signers account...
Invoke failed, Please input gasLimit >= 20000 and gasPrice >= 500
Invoking  transferFrom
Unlock signers account...
Invoke failed, Please input gasLimit >= 20000 and gasPrice >= 500
Invoking  approve
Invoke successful
Invoke result: 0x00
```






---
title: "Learning SmartX: How to Test a Smart Contract"
date: "2018-11-03"
author: Yue Zhao
---

<h1 align="center">Learning SmartX: How to Test a Smart Contract</h1>
<p align="center" class="version">Version 0.1</p>

### 1. Create a python project

Select the python language and blank template. Copy the code in [OEP4Sample.py](https://github.com/tonyclarking/python-template/blob/master/OEP4Sample/OEP4Sample.py](https://github.com/tonyclarking/python-template/blob/master/OEP4Sample/OEP4Sample.py)
) to editor.

![step 1.png](https://upload-images.jianshu.io/upload_images/150344-cc24c675bc9a3267.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![step 1.png](https://upload-images.jianshu.io/upload_images/150344-cdb9c5585a074881.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. Compile and deploy

Step1 - Clicking the "Compile" button to compile the smart contract. ABI and AVM will be generated and Opcode will be displayed at the bottom.

![compile.png](https://upload-images.jianshu.io/upload_images/150344-807d1c9add5be98f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Step2 - deploy the contract

Input basic information and click the "Deploy" button.

![info](https://upload-images.jianshu.io/upload_images/150344-3a034864ce002d45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

The Chrome browser will open Cyano wallet automatically and a confirmation of  deployment is required .

Note: You can click setting icon in the upper right corner to open setting and then select the network (Main-Net, Test-Net, Private-Net).

![wallet](https://upload-images.jianshu.io/upload_images/150344-da73fd59ddda019a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 3. Add an account

Input your account private key (hex string) and click the "OK" button.

![UI](https://upload-images.jianshu.io/upload_images/150344-316134e08f8d714d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![add account](https://upload-images.jianshu.io/upload_images/150344-d98a51d38719cfca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### How to obtain a hex private key

Step1 - copy key, address, salt from .keystore file you download from SmartX

Step2 - use Tool panel to decrypt private key

![decrypt private key](https://upload-images.jianshu.io/upload_images/150344-f2c8b07b1dfeffbd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 4. Test function

Step1 - select network and contract hash

Note: You can also select "other" option and input an existing contract hash.

Step2- select functions, run type, and sign account

Note: your account should have enough balance to guarantee the contract execution.

![test UI](https://upload-images.jianshu.io/upload_images/150344-56d982000793c5c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Step3 -run

Execution result will be printed in logs. 

Successful execution:

![result](https://upload-images.jianshu.io/upload_images/150344-6e674c2ddac4cf83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



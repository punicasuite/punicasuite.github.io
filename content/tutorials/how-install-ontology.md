---
title: "How install Ontology?"
date: "2018-11-02"
author: Josh
---




> Note: **This** document from [Ontology](https://ontio.github.io/documentation/install_en.html).





### One click blockchain
 [solo chain](https://github.com/punicasuite/solo-chain/) 

### Get from release
- You can download the latest Ontology binary file with ` curl https://dev.ont.io/ontology_install | sh `.

- You can download other versions at [release page](https://github.com/ontio/ontology/releases).

### Get from source code

Clone the Ontology repository into the appropriate $GOPATH/src/github.com/ontio directory.

```
$ git clone https://github.com/ontio/ontology.git
```
or
```
$ go get github.com/ontio/ontology
```
Fetch the dependent third party packages with glide.

```
$ cd $GOPATH/src/github.com/ontio/ontology
$ glide install
```

Build the source code with make.

```
$ make all
```
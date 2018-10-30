---
title: "Ontology CLI"
date: "2018-11-03"
author: Josh
---




> Note: **This** document from [Ontology CLI](https://github.com/ontio/ontology/blob/master/docs/specifications/cli_user_guide.md).





NAME:
  ont5.exe - Ontology CLI

        Ontology CLI is an Ontology node command line Client for starting and managing Ontology nodes,
        managing user wallets, sending transactions, deploying and invoking contract, and so on.

USAGE:
  ont5.exe [options] command [command options] [arguments...]

COMMANDS:
  account       Manage accounts
  info          Display information about the chain
  asset         Handle assets
  contract      Deploy or invoke smart contract
  import        Import blocks to DB from a file
  export        Export blocks in DB to a file
  buildtx       Build transaction
  sigtx         Sign to transaction
  multisigaddr  Generate multi-signature address
  multisigtx    Sign to multi-signature transaction
  sendtx        Send raw transaction to Ontology
  showtx        Show info of raw transaction.
  help, h       Shows a list of commands or help for one command

ONTOLOGY OPTIONS:
  --config <file>                          Genesis block config <file>. If doesn't specifies, use main net config as default.
  --loglevel <level>                       Set the log level to <level> (0~6). 0:Trace 1:Debug 2:Info 3:Warn 4:Error 5:Fatal 6:MaxLevel (default: 2)
  --disable-event-log                      Discard event log output by smart contract execution
  --data-dir <path>                        Block data storage <path> (default: "./Chain")

ACCOUNT OPTIONS:
  --wallet <file>, -w <file>               Wallet <file> (default: "./wallet.dat")
  --account <address>, -a <address>        Account <address> when the Ontology node starts. If not specific, using default account instead
  --password <password>, -p <password>     Account <password> when Ontology node starts.

CONSENSUS OPTIONS:
  --enable-consensus                       Start consensus module
  --max-tx-in-block <number>               Max transaction <number> in block (default: 60000)

TXPOOL OPTIONS:
  --gasprice <value>                       Min gas price <value> of transaction to be accepted by tx pool. (default: 500)
  --gaslimit <value>                       Min gas limit <value> of transaction to be accepted by tx pool. (default: 20000)
  --disable-tx-pool-pre-exec               Disable preExecute in tx pool
  --disable-sync-verify-tx                 Disable sync verify transaction in interface
  --disable-broadcast-net-tx               Disable broadcast tx from network in tx pool

P2P NODE OPTIONS:
  --reserved-only <address>                Connect reserved peers <address> only
  --reserved-file <file>                   Reserved peers <file> (default: "./peers.rsv")
  --networkid <number>                     Network id <number>. 1=ontology main net, 2=polaris test net, 3=testmode, and other for custom network (default: 1)
  --nodeport <number>                      P2P network port <number> (default: 20338)
  --consensus-port <number>                Consensus network port <number>. Effectively after set --dual-port parameter (default: 20339)
  --dual-port                              Enable a dual network, P2P network for transaction messages and for consensus messages.
  --max-conn-in-bound <number>             Max connection <number> in bound (default: 1024)
  --max-conn-out-bound <number>            Max connection <number> out bound (default: 1024)
  --max-conn-in-bound-single-ip <number>   Max connection <number> in bound for single ip (default: 16)

RPC OPTIONS:
  --disable-rpc                            Shut down the rpc server.
  --rpcport <number>                       Json rpc server listening port <number> (default: 20336)
  --localrpc                               Enable local rpc server
  --localrpcport <number>                  Json rpc local server listening port <number> (default: 20337)

RESTFUL OPTIONS:
  --rest                                   Enable restful api server
  --restport <number>                      Restful server listening port <number> (default: 20334)

WEB SOCKET OPTIONS:
  --ws                                     Enable web socket server
  --wsport <number>                        Ws server listening port <number> (default: 20335)

TEST MODE OPTIONS:
  --testmode                               Single node network for testing. In test mode, will start rpc, rest, web socket server, and set default gasprice to 0
  --testmode-gen-block-time <time>         Block-out <time>(s) in test mode. (default: 6)

MISC OPTIONS:
  --help, -h                               show help
  --version, -v                            print the version





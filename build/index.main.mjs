// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v73 = stdlib.protect(ctc0, await interact.wantsTokens(), {
    at: './index.rsh:28:57:application',
    fs: ['at ./index.rsh:25:13:application call to [unknown function] (defined at: ./index.rsh:25:17:function exp)'],
    msg: 'wantsTokens',
    who: 'Buyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v73],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75], secs: v77, time: v76, didSend: v27, from: v74 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v27, from: v74 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v83, v84], secs: v86, time: v85, didSend: v38, from: v82 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptTokenCost(v83), {
    at: './index.rsh:43:40:application',
    fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
    msg: 'acceptTokenCost',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v74, v82, v83],
    evt_cnt: 0,
    funcNum: 2,
    lct: v85,
    onlyIf: true,
    out_tys: [],
    pay: [v83, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v91, time: v90, didSend: v48, from: v89 } = txn3;
      
      sim_r.txns.push({
        amt: v83,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v82,
        tok: undefined /* Nothing */
        });
      const v99 = stdlib.safeMul(v75, v83);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v91, time: v90, didSend: v48, from: v89 } = txn3;
  ;
  const v94 = stdlib.addressEq(v74, v89);
  stdlib.assert(v94, {
    at: './index.rsh:45:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  ;
  const v99 = stdlib.safeMul(v75, v83);
  stdlib.protect(ctc1, await interact.getReceipt(v99), {
    at: './index.rsh:59:24:application',
    fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:18:function exp)'],
    msg: 'getReceipt',
    who: 'Buyer'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v27, from: v74 } = txn1;
  ;
  const v80 = stdlib.protect(ctc0, await interact.hasTokens(), {
    at: './index.rsh:35:55:application',
    fs: ['at ./index.rsh:34:14:application call to [unknown function] (defined at: ./index.rsh:34:18:function exp)'],
    msg: 'hasTokens',
    who: 'Seller'
    });
  const v81 = stdlib.protect(ctc0, await interact.currTokenCost(), {
    at: './index.rsh:36:60:application',
    fs: ['at ./index.rsh:34:14:application call to [unknown function] (defined at: ./index.rsh:34:18:function exp)'],
    msg: 'currTokenCost',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v74, v81, v80],
    evt_cnt: 2,
    funcNum: 1,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v83, v84], secs: v86, time: v85, didSend: v38, from: v82 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v83, v84], secs: v86, time: v85, didSend: v38, from: v82 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v91, time: v90, didSend: v48, from: v89 } = txn3;
  ;
  const v94 = stdlib.addressEq(v74, v89);
  stdlib.assert(v94, {
    at: './index.rsh:45:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  ;
  const v100 = stdlib.safeSub(v84, v75);
  stdlib.protect(ctc1, await interact.confirmInventory(v100), {
    at: './index.rsh:63:30:application',
    fs: ['at ./index.rsh:62:14:application call to [unknown function] (defined at: ./index.rsh:62:18:function exp)'],
    msg: 'confirmInventory',
    who: 'Seller'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECCCYCAQAAIjUAMRhBAVYpZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAJxJJAxAAEgkEkQkNAESRDQESSISTDQCEhFEKGRJNQOBQFs1/4AEQbFATbA0/4gBFzQDVwAgMQASRLEisgE0/7III7IQNANXICCyB7NCAItIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQVJIls1/iVbNf2ABMe2CtU0/hZQNP0WULA0/zEAUDT+FlAoSwFXAEhnSCQ1ATIGNQJCAFlIgaCNBogAoiI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a30380380610a308339810160408190526100229161018c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ca565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c29291906100f3565b505050610265565b816100ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ff9061022a565b90600052602060002090601f0160209004810192826101215760008555610167565b82601f1061013a57805160ff1916838001178555610167565b82800160010185558215610167579182015b8281111561016757825182559160200191906001019061014c565b50610173929150610177565b5090565b5b808211156101735760008155600101610178565b60008183036040808212156101a057600080fd5b80518082016001600160401b0380821183831017156101cf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101e857600080fd5b83519450602085019150848210818311171561021457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061023e57607f821691505b6020821081141561025f57634e487b7160e01b600052602260045260246000fd5b50919050565b6107bc806102746000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105a3565b6100d6565b6100526100993660046105bb565b61027e565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c861040b565b60405161006f9291906105cd565b6100e660016000541460096104a8565b610100813515806100f957506001548235145b600a6104a8565b6000808055600280546101129061062a565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061062a565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061067b565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a1610201341560086104a8565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088523384528a850135835260029586905543600155885180860191909152925116828801525181850152855180820390940184526080019094528151929361027893919201906104cd565b50505050565b61028e600260005414600d6104a8565b6102a8813515806102a157506001548235145b600e6104a8565b6000808055600280546102ba9061062a565b80601f01602080910402602001604051908101604052809291908181526020018280546102e69061062a565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b505050505080602001905181019061034b91906106d3565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161037e929190610749565b60405180910390a161039781604001513414600b6104a8565b80516103af906001600160a01b03163314600c6104a8565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156103f0573d6000803e3d6000fd5b506000808055600181905561040790600290610551565b5050565b6000606060005460028080546104209061062a565b80601f016020809104026020016040519081016040528092919081815260200182805461044c9061062a565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050509050915091509091565b816104075760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104d99061062a565b90600052602060002090601f0160209004810192826104fb5760008555610541565b82601f1061051457805160ff1916838001178555610541565b82800160010185558215610541579182015b82811115610541578251825591602001919060010190610526565b5061054d92915061058e565b5090565b50805461055d9061062a565b6000825580601f1061056d575050565b601f01602090049060005260206000209081019061058b919061058e565b50565b5b8082111561054d576000815560010161058f565b6000606082840312156105b557600080fd5b50919050565b6000604082840312156105b557600080fd5b82815260006020604081840152835180604085015260005b81811015610601578581018301518582016060015282016105e5565b81811115610613576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061063e57607f821691505b602082108114156105b557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461067657600080fd5b919050565b60006020828403121561068d57600080fd5b6040516020810181811067ffffffffffffffff821117156106be57634e487b7160e01b600052604160045260246000fd5b6040526106ca8361065f565b81529392505050565b6000606082840312156106e557600080fd5b6040516060810181811067ffffffffffffffff8211171561071657634e487b7160e01b600052604160045260246000fd5b6040526107228361065f565b81526107306020840161065f565b6020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461077757600080fd5b8060408501525050939250505056fea26469706673582212203c274d30841dacc3665220b312ac768a21f2d298502361a28ad01a3173e9217664736f6c634300080c0033`,
  BytecodeLen: 2608,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };

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
  
  
  const v71 = stdlib.protect(ctc0, await interact.wantsRSVP(), {
    at: './index.rsh:28:53:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'wantsRSVP',
    who: 'Buyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v71],
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
      
      
      const {data: [v73], secs: v75, time: v74, didSend: v27, from: v72 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v27, from: v72 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v36, from: v79 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptRSVPCost(v80), {
    at: './index.rsh:48:39:application',
    fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'acceptRSVPCost',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v72, v79, v80],
    evt_cnt: 0,
    funcNum: 2,
    lct: v81,
    onlyIf: true,
    out_tys: [],
    pay: [v80, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
      
      sim_r.txns.push({
        amt: v80,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v79,
        tok: undefined /* Nothing */
        });
      const v95 = stdlib.safeMul(v73, v80);
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
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v90 = stdlib.addressEq(v72, v85);
  stdlib.assert(v90, {
    at: './index.rsh:50:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  ;
  const v95 = stdlib.safeMul(v73, v80);
  const v100 = [v95, v73];
  stdlib.protect(ctc1, await interact.getReceipt(v100), {
    at: './index.rsh:64:24:application',
    fs: ['at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
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
  const {data: [v73], secs: v75, time: v74, didSend: v27, from: v72 } = txn1;
  ;
  const v78 = stdlib.protect(ctc0, await interact.RSVPCost(), {
    at: './index.rsh:39:55:application',
    fs: ['at ./index.rsh:38:14:application call to [unknown function] (defined at: ./index.rsh:38:18:function exp)'],
    msg: 'RSVPCost',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v72, v78],
    evt_cnt: 1,
    funcNum: 1,
    lct: v74,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v36, from: v79 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v36, from: v79 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v90 = stdlib.addressEq(v72, v85);
  stdlib.assert(v90, {
    at: './index.rsh:50:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  ;
  stdlib.protect(ctc1, await interact.confirmInventory(v80), {
    at: './index.rsh:68:30:application',
    fs: ['at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:18:function exp)'],
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
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBTSlkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAJJJJAxAAEgkEkQkNAESRDQESSISTDQCEhFEKGRJNQOBQFs1/4AEQbFATbA0/4gBDTQDVwAgMQASRLEisgE0/7III7IQNANXICCyB7NCAIFIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABNUVGRQ0/hZQsDT/MQBQNP4WUChLAVcASGdIJDUBMgY1AkIAWUiBoI0GiACiIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQAoSwFXACBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v73",
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
                "name": "v73",
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
                "name": "v80",
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
                "name": "v80",
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
  Bytecode: `0x6080604052604051610a38380380610a388339810160408190526100229161018c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ca565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c29291906100f3565b505050610265565b816100ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ff9061022a565b90600052602060002090601f0160209004810192826101215760008555610167565b82601f1061013a57805160ff1916838001178555610167565b82800160010185558215610167579182015b8281111561016757825182559160200191906001019061014c565b50610173929150610177565b5090565b5b808211156101735760008155600101610178565b60008183036040808212156101a057600080fd5b80518082016001600160401b0380821183831017156101cf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101e857600080fd5b83519450602085019150848210818311171561021457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061023e57607f821691505b6020821081141561025f57634e487b7160e01b600052602260045260246000fd5b50919050565b6107c4806102746000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780637eea518c14610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105b2565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105b2565b610263565b3480156100bf57600080fd5b506100c8610402565b60405161006f9291906105d5565b6100e6600260005414600d61049f565b610100813515806100f957506001548235145b600e61049f565b60008080556002805461011290610632565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610632565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610683565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516101d69291906106f9565b60405180910390a16101ef81604001513414600b61049f565b8051610207906001600160a01b03163314600c61049f565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610248573d6000803e3d6000fd5b506000808055600181905561025f906002906104c4565b5050565b610273600160005414600961049f565b61028d8135158061028657506001548235145b600a61049f565b60008080556002805461029f90610632565b80601f01602080910402602001604051908101604052809291908181526020018280546102cb90610632565b80156103185780601f106102ed57610100808354040283529160200191610318565b820191906000526020600020905b8154815290600101906020018083116102fb57829003601f168201915b50505050508060200190518101906103309190610736565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16103853415600861049f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088523384528a85013583526002958690554360015588518086019190915292511682880152518185015285518082039094018452608001909452815192936103fc9391920190610501565b50505050565b60006060600054600280805461041790610632565b80601f016020809104026020016040519081016040528092919081815260200182805461044390610632565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b50505050509050915091509091565b8161025f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104d090610632565b6000825580601f106104e0575050565b601f0160209004906000526020600020908101906104fe9190610585565b50565b82805461050d90610632565b90600052602060002090601f01602090048101928261052f5760008555610575565b82601f1061054857805160ff1916838001178555610575565b82800160010185558215610575579182015b8281111561057557825182559160200191906001019061055a565b50610581929150610585565b5090565b5b808211156105815760008155600101610586565b6000604082840312156105ac57600080fd5b50919050565b6000604082840312156105c457600080fd5b6105ce838361059a565b9392505050565b82815260006020604081840152835180604085015260005b81811015610609578581018301518582016060015282016105ed565b8181111561061b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061064657607f821691505b602082108114156105ac57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461067e57600080fd5b919050565b60006060828403121561069557600080fd5b6040516060810181811067ffffffffffffffff821117156106c657634e487b7160e01b600052604160045260246000fd5b6040526106d283610667565b81526106e060208401610667565b6020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461072757600080fd5b80604085015250509392505050565b60006020828403121561074857600080fd5b6040516020810181811067ffffffffffffffff8211171561077957634e487b7160e01b600052604160045260246000fd5b60405261078583610667565b8152939250505056fea26469706673582212202ead6b7e767d323dc4fd155edacf19b3448a8e783cff0b46213bab5fae17ba7264736f6c634300080c0033`,
  BytecodeLen: 2616,
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
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:57:11:after expr stmt semicolon',
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

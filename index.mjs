import { loadStdlib } from '@reach-sh/stdlib'; //import standard library
import * as backend from './build/index.main.mjs'; //import reach backend
const stdlib = loadStdlib();  //load stdlib dynamically

const startingBalance = stdlib.parseCurrency(100);  //define token amount for all test accounts

//create accounts for Buyer & Seller with init Balances.
const accBuyer = await stdlib.newTestAccount(startingBalance);
const accSeller = await stdlib.newTestAccount(startingBalance);

//define count of available tokens for distribution
// TODO : link token amounts to Seller
const totalRSVPs = 10;

//seller deploys the application & Buyer attaches to it.
const ctcSeller = accSeller.contract(backend);
const ctcBuyer = accBuyer.contract(backend, ctcSeller.getInfo());


const TOKEN_COUNT = [3,4,5,2,1,7];
const WANTED_TOKENS = [3,4,5,2,1,7];

const RSVPParticipant = (Who) => ({
  hasTokens: () => {
    const tokens = Math.floor(Math.random() * 3);
    console.log(`${Who} has this many ${TOKEN_COUNT[tokens]}`);
    return tokens;
  },
  wantsTokens: () => {
    const tokens = Math.floor(Math.random() * 3);
    console.log(`${Who} wants this many ${TOKEN_COUNT[tokens]} tokens`);
    return tokens;
  },
  getReceipt: (remTokens) => {
    console.log(`Purchase processed. Remaining tokens ${remTokens}`);

  }

});


await Promise.all([
  ctcBuyer.p.Buyer({
    ...RSVPParticipant('Buyer'),
    acceptTokenCost: (amt) => {
    console.log(`Buyer1 accepts the cost of ${fmt(amt)}.`)
    }
  }),
  
  ctcSeller.p.Seller({
    ...RSVPParticipant('Seller'),
    tokenCost: stdlib.parseCurrency(10)
  

  })
]);

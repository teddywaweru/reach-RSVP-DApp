import { loadStdlib, ask } from '@reach-sh/stdlib'; //import standard library
import * as backend from './build/index.main.mjs'; //import reach backend
import { RSVPs } from './front-end/views/RSVPTickets.js'
const stdlib = loadStdlib();  //load stdlib dynamically



const startingBalance = stdlib.parseCurrency(100);  //define token amount for all test accounts

//create accounts for Buyer & Seller with init Balances.
const accBuyer = await stdlib.newTestAccount(startingBalance);
const accSeller = await stdlib.newTestAccount(startingBalance);


//seller deploys the application & Buyer attaches to it.
const ctcBuyer = accBuyer.contract(backend);
const ctcSeller = accSeller.contract(backend, ctcBuyer.getInfo());

const fmt = (x) => stdlib.formatCurrency(x,4);
const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));

const TOKEN_COUNT = [3,4,5,2,1,7];
const WANTED_TOKENS = [3,4,5,2,1,7];

const RSVPParticipant = (Who) => ({
  confirmPurchase: (remTokens) => {
    console.log(`Purchase processed.`);
  }
  
});


// await Promise.all([
  ctcBuyer.p.Buyer({
    ...RSVPParticipant('Buyer'),
    wantsTokens: () => {
      const tokens = Math.floor(Math.random() * 3);
      console.log(`Buyer wants this many ${TOKEN_COUNT[tokens]} tokens`);
      return TOKEN_COUNT[tokens];
    },
    acceptTokenCost: async (amt) => {
      const buyerBalance = await getBalance(accBuyer);
      const accCost = await ask.ask(
        `Do you accept the Token Cost of ${fmt(amt)}?
        Current account balance: ${buyerBalance}`,
        ask.yesno
        )
        console.log(`Buyer accepts the cost of ${fmt(amt)}.`);
      },
      getReceipt: async (totalTokenCost) => {
      const buyerBalance = await getBalance(accBuyer);
      console.log(`Buyer's balance: ${buyerBalance}`)
      console.log(`Total cost of tokens ${totalTokenCost}`)
      
    }
  }),
  
  ctcSeller.p.Seller({
    ...RSVPParticipant('Seller'),
    hasTokens: () => {
      const tokens = RSVPs.length;
      console.log(`Seller has this many ${tokens}`);
      return tokens;
    },
    currTokenCost: () => {
      // const tokenCost = ask.ask(
        //   `Current cost of Tokens?`,
        //   stdlib.parseCurrency
        // );
        const tokenCost = stdlib.parseCurrency(50);
        return tokenCost;
      },
      confirmInventory: async (remTokens) => {
        const sellerBalance = await getBalance(accSeller);
        console.log(`Buyer's balance: ${sellerBalance}`)
      console.log(`Remaining Tokens: ${remTokens}`);
      process.exit(1);
    },
    

  })
// ]);

'reach 0.1';

// define Participant
const RSVPParticipant = {
  getReceipt: Fun([UInt], Null),
};

// define main function
export const main = Reach.App(() => {
  const Buyer = Participant('Buyer',{
    ...RSVPParticipant,
    wantsTokens: Fun([],UInt),
    acceptTokenCost: Fun([UInt],Null)
  });
  
  const Seller = Participant('Seller', {
    ...RSVPParticipant,
    hasTokens: Fun([], UInt),
    currTokenCost: Fun([], UInt),
    confirmInventory: Fun([UInt],Null)
  });
  init();

  Buyer.only(() => {
    const wantedTokens = declassify(interact.wantsTokens());
  });
  Buyer.publish(wantedTokens);

  commit();

  Seller.only(() => {
    const sellerTokens = declassify(interact.hasTokens());
    const currTokenCost = declassify(interact.currTokenCost());
  });
  Seller.publish(currTokenCost,sellerTokens);

  commit();

  Buyer.only(() => {
    declassify(interact.acceptTokenCost(currTokenCost));
  });
  Buyer.pay(currTokenCost);

  transfer(currTokenCost).to(Seller);
  commit();

        
  const totalTokenCost = wantedTokens * currTokenCost;
  const remTokens = sellerTokens - wantedTokens;

  Buyer.only( () => {
    interact.getReceipt(totalTokenCost);
  })

  Seller.only(() => {
    interact.confirmInventory(remTokens);
  })

});



// define actions for Alice

// Define responses from back-end
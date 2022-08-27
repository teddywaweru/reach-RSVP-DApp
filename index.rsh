'reach 0.1';

// define Participant
const RSVPParticipant = {
  getReceipt: Fun([UInt], Null),
  wantsRSVPecho: Fun([UInt],UInt)
  // ...hasConsoleLogger
};

// define main function
export const main = Reach.App(() => {
  const Buyer = Participant('Buyer',{
    ...RSVPParticipant,
    wantsRSVP: Fun([],UInt),
    acceptRSVPCost: Fun([UInt],Null)
  });
  
  const Seller = Participant('Seller', {
    ...RSVPParticipant,
    tokenCost: Fun([], UInt),
    currTokenCost: Fun([], UInt),
    confirmInventory: Fun([UInt],Null)
  });
  init();

  Buyer.only(() => {

    const wantedRSVP = declassify(interact.wantsRSVP());
  });
  Buyer.publish(wantedRSVP);

  commit();

  // each([Buyer, Seller], () => {
  //   const x = declassify(interact.wantsRSVPecho(wantedRSVP))
  // })

  Seller.only(() => {
    const currTokenCost = declassify(interact.tokenCost());
  });
  Seller.publish(currTokenCost);

  commit();



  Buyer.only(() => {
    declassify(interact.acceptRSVPCost(currTokenCost));
  });
  Buyer.pay(currTokenCost);

  // the seller places commitment
  // confirm the token/ticket during event
  // transfer payment.

  transfer(currTokenCost).to(Seller);
  commit();

        
  const totalTokenCost = wantedRSVP * currTokenCost;
  // const remTokens = sellerTokens - wantedRSVP;

  Buyer.only( () => {
    interact.getReceipt(totalTokenCost);
  })

  Seller.only(() => {
    interact.confirmInventory(currTokenCost);
  })

});


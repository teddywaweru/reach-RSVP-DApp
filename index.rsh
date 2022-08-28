'reach 0.1';

// define Participant
const RSVPParticipant = {
  getReceipt: Fun([Tuple(UInt,UInt)], Null),
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
    RSVPCost: Fun([], UInt),
    currRSVPCost: Fun([], UInt),
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
    const currRSVPCost = declassify(interact.RSVPCost());
  });
  Seller.publish(currRSVPCost);

  commit();



  Buyer.only(() => {
    declassify(interact.acceptRSVPCost(currRSVPCost));
  });
  Buyer.pay(currRSVPCost);

  // the seller places commitment
  // confirm the token/ticket during event
  // transfer payment.

  transfer(currRSVPCost).to(Seller);
  commit();

        
  const totalTokenCost = wantedRSVP * currRSVPCost;
  // const remTokens = sellerTokens - wantedRSVP;

  Buyer.only( () => {
    interact.getReceipt([totalTokenCost, wantedRSVP]);
  })

  Seller.only(() => {
    interact.confirmInventory(currRSVPCost);
  })

});
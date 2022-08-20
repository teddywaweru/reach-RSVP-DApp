'reach 0.1';

// define Participant
const RSVPParticipant = {
  hasTokens: Fun([], UInt),
  wantsTokens: Fun([],UInt),
  getReceipt: Fun([UInt], Null)
};

// define main function
export const main = Reach.App(() => {
  const Buyer = Participant('Buyer',{
    ...RSVPParticipant
  });

  const Seller = Participant('Seller', {
    ...RSVPParticipant,
  });
  init();

  Seller.only(() => {
    const sellerTokens = declassify(interact.hasTokens())
  });
  Seller.publish(sellerTokens);

  commit();

  Buyer.only(() => {
    const buyerTokens = declassify(interact.wantsTokens());
  });
  Buyer.publish(buyerTokens);

  const remTokens = sellerTokens - buyerTokens;

  commit();

  each([Buyer, Seller], () => {
    interact.getReceipt(remTokens);
  })



});



// define actions for Alice

// Define responses from back-end
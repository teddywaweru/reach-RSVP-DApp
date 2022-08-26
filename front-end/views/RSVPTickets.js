function Tickets(
  ticketID, eventName, eventmotto, isTaken
) {
  this.ticketID = ticketID;
  this.eventName = eventName;
  this.eventmotto = eventmotto;
  this.isTaken = isTaken;
  this.token = null;
}

export const RSVPs = [
  new Tickets("001", "Inaugural Ball", "Official Meeting", false),
  new Tickets("002", "Inaugural Ball", "Official Meeting", false),
  new Tickets("003", "Inaugural Ball", "Official Meeting", true),
  new Tickets("004", "Inaugural Ball", "Official Meeting", false),
  new Tickets("001", "Louvre Art Display", "Art is Fart", true),
  new Tickets("002", "Louvre Art Display", "Art is Fart", false),
  new Tickets("003", "Louvre Art Display", "Art is Fart", false),
  new Tickets("004", "Louvre Art Display", "Art is Fart", false),
  new Tickets("001", "Summer Party", "Where's yo Bikini??", false),
  new Tickets("002", "Summer Party", "Where's yo Bikini??", true),
  new Tickets("003", "Summer Party", "Where's yo Bikini??", false),
  new Tickets("004", "Summer Party", "Where's yo Bikini??", false),
  new Tickets("001", "Political Meet", "Elections are neigh", false),
];

// exports.tickets = tickets;

// export default tickets
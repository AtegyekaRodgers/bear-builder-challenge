'reach 0.1';

export const main = Reach.App(() => {
    const Deployer = Participant('Deployer', {
        ...hasRandom,
        ...hasConsoleLogger,
        launchTipBoard: Fun([], Object({
          nftId: Token,
          nftValue: UInt,
          numberOfTickets: UInt,
          priceOfOneTicket: UInt,
        })),
        computeWinningNumber: Fun([], UInt),
        showTicketPrice: Fun([UInt], Null),
        showOutcome: Fun([Address, UInt], Null),
        seeTicketSale: Fun([Address, UInt], Null),
        log: Fun(true, Null),
    });
    const Bob = API('Bob', {
        // buy a ticket and receive your ticket number back, 
        // later we'll see if it's the winning number.
        buyTicket: Fun([], Bool),
    });
    init();

    Deployer.only(() => {
        const {nftId, nftValue, numberOfTickets, priceOfOneTicket} = declassify(interact.launchTipBoard());
        const _winningNumber = interact.computeWinningNumber();
        const [_winningNumCommitment, _winNumSalt] = makeCommitment(interact, _winningNumber);
        const winningNumHash = declassify(_winningNumCommitment);
    });
    
    Deployer.publish(nftId, nftValue, numberOfTickets, priceOfOneTicket, winningNumHash);
    commit();
    
    unknowable(Bob, Deployer(_winningNumber, _winNumSalt));
    Deployer.pay([[nftValue, nftId]]);
    
    Deployer.interact.showTicketPrice(priceOfOneTicket);
    Deployer.interact.log(winningNumHash);
    
    assert(balance(nftId) >= nftValue, "balance of BTC Raffle NFT is wrong");
    const end = lastConsensusTime() + 100;
    
    // have the gamers (Bobs) buy tickets by calling the API until all available tickets are over,
    //const paidTickets = Array(Address, numberOfTickets);
    const paidTickets = array(Address, [Deployer, Deployer, Deployer, Deployer, Deployer, Deployer, Deployer, Deployer]);
    const [
        ticketsRemaining,
    ] = parallelReduce([numberOfTickets])
        .invariant(balance(nftId) >= nftValue)
        .while(ticketsRemaining > 0)
        .api(Bob.buyTicket,
            (_) => { const _ = true; },
            (_) => priceOfOneTicket,
            (ticketNumber, respond) => {
                respond(true);
                
                const who = this;
                //write this Address to the array of bought tickets
                if(ticketNumber > 0){
                  paidTickets.set(ticketNumber, who);
                }
                
                Deployer.interact.seeTicketSale(who, ticketNumber);
                return [ticketsRemaining - 1];
            }
        ).timeout(absoluteTime(end), () => {
            Deployer.publish();
            return [ ticketsRemaining ];
        });
        
        Deployer.only(() => {
          const winningNumSalt = declassify(_winNumSalt);
          const winningNumber = declassify(_winningNumber);
        });
        
        //reveal the secrets now
        Deployer.publish(winningNumSalt, winningNumber);
        checkCommitment(winningNumHash, winningNumSalt, winningNumber);

        //retrieve the winner from a array
        const winner = paidTickets[winningNumber];
        
        if (winner != Deployer) {
           transfer(nftValue, nftId).to(winner);
           //declare the winner
           Deployer.interact.showOutcome(winner, winningNumber);
        }else{
           //looks like the contract timed out before the winning ticket was bought
           transfer(nftValue, nftId).to(Deployer);
        }
        
        //TODO: destroy any unused tbcNFT balance
        
    commit();
    
    exit();
});

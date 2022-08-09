import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating Deployer's test account ...`);
const accA = await stdlib.newTestAccount(startingBalance);

console.log(`Creating the TBR Raffle NFT ...`);
const tbcNFT = await stdlib.launchToken(accA, "tbcraffle", "TBR", { supply: 4 });
const nftId = tbcNFT.id;
const nftValue = stdlib.parseCurrency(4);
const numberOfTickets = 8;
const priceOfOneTicket = 1;
const params = { nftId, nftValue, numberOfTickets, priceOfOneTicket };

let done = false;
let gamers = [];
let ticketsForSale = [1,2,3,4,5,6,7,8];

const computeRandomTicketNumber = () => {
    if(!ticketsForSale.some(n => n > 0)){
        return 0;
    }
    if(ticketsForSale.filter(n => n > 0).length === 1){
        const oneLeft = ticketsForSale.find(n => n > 0);
        ticketsForSale[oneLeft-1] = 0;
        return oneLeft
    } 
    let found = false;
    while(!found){
      const randomNum = Math.floor(Math.random() * 8) + 1;
      if(ticketsForSale[randomNum-1]){
        found = true;
        ticketsForSale[randomNum-1] = 0;
        return randomNum;
      }
    }
}

const startGamers = async () => {
    const runGamer = async (who) => {
        const accB = await stdlib.newTestAccount(startingBalance);
        accB.setDebugLabel(who);
        await accB.tokenAccept(nftId);
        gamers.push([who, accB]);
        const ctcB = accB.contract(backend, ctcA.getInfo());

        try {
            const ticketNum = computeRandomTicketNumber();
            const ok = await ctcB.apis.Bob.buyTicket();
            console.log(`Gamer: ${who} just purchased ticket number ${ticketNum}.`);
        } catch (e) {
            console.log(`Gamer: ${who} failed to buy a ticket`);
        }
    };

    await runGamer('Robert');
    await runGamer('Gedion');
    await runGamer('Nelson');
    await runGamer('Kelen');
    await runGamer('Aaron');
    await runGamer('Zeporah');
    await runGamer('Brian');
    await runGamer('Timothy');
    await runGamer('Osbert');
    while ( !done ) {
        await stdlib.wait(1);
    }
};

const ctcA = accA.contract(backend);

await ctcA.p.Deployer({
    ...stdlib.hasRandom, 
    ...stdlib.hasConsoleLogger,
    launchTipBoard: () => ({nftId, nftValue, numberOfTickets, priceOfOneTicket}),
    showTicketPrice: () => {
        console.log(`The price of each ticket is set to ${priceOfOneTicket}`);
    },
    computeWinningNumber: () => {
        return Math.floor(Math.random() * 8) + 1;
    },
    seeTicketSale: (address, ticketNumber) => {
       console.log(`Ticket number ${ticketNumber} sold to ${address}`);
    },
    log: (data)=> {
        stdlib.hasConsoleLogger.log(data);
    },
    showOutcome: (winner, ticketNumber) => {
        console.log(`Deployer saw that ${stdlib.formatAddress(winner)} won with ticket number ${ticketNumber}`);
    },
});

done = true;

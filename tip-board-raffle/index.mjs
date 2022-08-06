import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating Deployer's test account ...`);
const accA = await stdlib.newTestAccount(startingBalance);

console.log(`Creating the TBR Raffle NFT ...`);
const tbcNFT = await stdlib.launchToken(accA, "tbcraffle", "TBR", { supply: 10 });
const nftId = tbcNFT.id;
const nftValue = stdlib.parseCurrency(4);
const numberOfTickets = 8;
const priceOfOneTicket = 1;
const params = { nftId, nftValue, numberOfTickets, priceOfOneTicket };

let done = false;
const gamers = [];
const startGamers = async () => {
    const runGamer = async (who) => {
        const accB = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        await accB.tokenAccept(nftId);
        gamers.push([who, accB]);
        const ctcB = accB.contract(backend, ctcA.getInfo());

        try {
            const ticketNum = await ctc.apis.Bob.buyTicket();
            console.log(`Gamer: ${who} just purchased ticket number ${ticketNum}.`);
        } catch (e) {
            console.log(`Gamer: ${who} failed to buy a ticket`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
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
    while ( ! done ) {
        await stdlib.wait(1);
    }
};

const ctcA = accA.contract(backend);
await ctcA.participants.Deployer({
    ...stdlib.hasRandom, 
    ...stdlib.hasConsoleLogger,
    launchTipBoard: Fun([], Object({
      nftId: Token,
      nftValue: UInt,
      numberOfTickets: UInt,
      priceOfOneTicket: UInt,
    })),
    computeWinningNumber: Fun([], UInt),
    showTicketPrice: Fun([UInt], Null),
    computeRandomTicketNumber: Fun([], UInt),
    seeTicketSale: Fun([Address], Null),
    log: (data)=> {
        stdlib.hasConsoleLogger.log(data);
    },
    showOutcome: (winner, ticketNumber) => {
        console.log(`Deployer saw that ${stdlib.formatAddress(winner)} won with ticket number ${ticketNumber}`);
    },
});

done = true;

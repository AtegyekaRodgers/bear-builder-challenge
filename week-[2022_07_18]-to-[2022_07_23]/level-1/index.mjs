import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const reach = loadStdlib();

const who = 'Alice';

console.log(`${who} is deploying the contract.`);

let accAlice = await reach.newTestAccount(reach.parseCurrency(500));

let ctcAlice = accAlice.contract(backend);
const interact = {
    notifyMembers: () => {
        console.log("Alice's contract is ready. ");
    },
};

const citizens = ["Samson", "Jesca", "Johnson", "Moses", "Christine"];

console.log("Creating new bob users ...");
const users = citizens.map(async (citizen, i) => {
    const acc = await reach.newTestAccount(reach.parseCurrency(500));
    return { name: citizen, acc };
});

Promise.all(users).then(values => {
  const cotizensAddresses = values.map(v => ({name:v.name, addr: v.acc.networkAccount.addr}));
  console.log(`The created users list: \n${JSON.stringify(cotizensAddresses)}`);
});


await ctcAlice.p.Alice(interact);

console.log(`\n Done! \n`);



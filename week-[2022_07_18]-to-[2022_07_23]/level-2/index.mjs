import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const reach = loadStdlib();

console.log(`Alice is deploying the contract.`);
const meetingEndTime = 500;

let accAlice = await reach.newTestAccount(reach.parseCurrency(500));

let ctcAlice = accAlice.contract(backend);
const interactAlice = {
    ...reach.hasRandom, 
    ...reach.hasConsoleLogger,
    meetingEndTime, 
    notifyMembers: () => {
        console.log("Contract is ready, Alice is disconnecting ... ");
        reach.disconnect();
    },
    log: (data) => {
       reach.hasConsoleLogger.log(`\n ${data}`);  
    },
};

await reach.withDisconnect(() => ctcAlice.p.Alice(interactAlice));

const citizens = ["Samson", "Jesca", "Johnson", "Moses", "Christine"];

console.log("Creating new bob users ...");
const users = citizens.map(async (citizen, i) => {
    const acc = await reach.newTestAccount(reach.parseCurrency(500));
    return { name: citizen, acc };
});

Promise.all(users).then(values => {
  const cotizensAddresses = values.map(v => ({name:v.name, addr: v.acc.networkAccount.addr}));
  console.log(`The created users list: \n${JSON.stringify(cotizensAddresses)}`);


const ctcWho = (citizenIndex) => values[citizenIndex].acc.contract(backend, ctcAlice.getInfo());

const attachToContract = async (idx) => {
  const citizenName = values[idx].name;
  const account = values[idx].acc;
  const ctcHandle = ctcWho(idx);
  console.log(`${citizenName} is attaching to the contract ...`);
  const { usersCount, citizenIndex, exists, added } = await ctcHandle.apis.Bob.attachToContract(idx);
  console.log(`\n ================================================================== `);
  if(added){
    console.log(`\n Account '${account.networkAccount.addr}' added. \n New List: `);
    for (var i; i < usersCount; i++){
        console.log(`\n ${users[i].name} -> ${users[i].acc} ,`);
    }
  }else{
      if(usersCount >= 5){
        console.log(`(${citizenName}) was rejected because max of 5 attachers has been reached`);
      }
      if(exists){
        console.log(`Account '${account.networkAccount.addr}' (${citizenName}) already exits`);
      }
  }
  
  console.log(`\n -------------------------------------------------------------- `);
};

citizens.forEach((ctzn, i) => {
    attachToContract(i); 
});

});

console.log(`\n Counting untill deadline ...`);
await reach.wait(meetingEndTime);

console.log(`\n Done! \n`);



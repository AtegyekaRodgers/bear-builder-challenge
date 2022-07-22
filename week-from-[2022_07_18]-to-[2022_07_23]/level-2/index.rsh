'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    
    const Alice = Participant('Alice', {
        ...hasConsoleLogger,
        log: Fun(true, Null),
        meetingEndTime: UInt,
        notifyMembers: Fun([], Null),
    });
    
    const Bob = API('Bob', {
        attachToContract: Fun([UInt], Struct([["usersCount", UInt], ["citizenIndex", UInt], ["exists", Bool], ["added", Bool]])),
        endMeeting: Fun([], Bytes(50)),
    });
    
    init();
    
    Alice.only(() => {
        interact.notifyMembers();
        const meetingEndTime = declassify(interact.meetingEndTime);
    });
    
    Alice.publish(meetingEndTime);
    const invariantCondition = true;
    
    const users = new Set();
    
    const [
        beforeMeetingEndTime,
        usersCount
    ] = parallelReduce([true, 0])
        .invariant( invariantCondition )
        .while( beforeMeetingEndTime )
        .api(Bob.attachToContract,
            (_) => { const _ = true; },
            (_) => 0,
            ((citizenIndex, respond) => {
                if (usersCount < 5){
                    const exists = users.member(this);
                    if (exists){
                        const added = false;
                        respond(Struct([["usersCount", UInt], ["citizenIndex", UInt], ["exists", Bool], ["added", Bool]]).fromObject({ usersCount: usersCount, citizenIndex: citizenIndex, exists: exists, added: added }));
                    }else{
                        users.insert(this);
                        const added = true;
                        respond(Struct([["usersCount", UInt], ["citizenIndex", UInt], ["exists", Bool], ["added", Bool]]).fromObject({ usersCount: usersCount, citizenIndex: citizenIndex, exists: exists, added: added }));
                    }
                } else {
                    const exists = false;
                    const added = false;
                    respond(Struct([["usersCount", UInt], ["citizenIndex", UInt], ["exists", Bool], ["added", Bool]]).fromObject({ usersCount: usersCount, citizenIndex: citizenIndex, exists: exists, added: added }));
                }
                
                return [beforeMeetingEndTime, usersCount+1];
            })
        ).api(Bob.endMeeting,
            () => { const _ = true; },
            () => 0,
            ((respond) => {
                if(this != Alice){
                   Alice.interact.log("Attempt to stop contract rejected.");
                   respond("Only the organiser (Alice) can ended this meeting.");
                   return [beforeMeetingEndTime, usersCount];
                }else{
                   respond("Contract stopped by Alice, the meeting chairperson");
                   return [false, usersCount];
                }
            })
        );
    
    commit();
    
    exit();
});


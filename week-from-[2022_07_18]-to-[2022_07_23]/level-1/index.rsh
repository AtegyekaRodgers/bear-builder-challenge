'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    
    const Alice = Participant('Alice', {
        notifyMembers: Fun([], Null),
    });
    
    const Bob = API('Bob', {
    
    });
    
    init();
    
    Alice.only(() => {
        interact.notifyMembers();
    });
    
    Alice.publish();
    commit();
    
    exit();
});


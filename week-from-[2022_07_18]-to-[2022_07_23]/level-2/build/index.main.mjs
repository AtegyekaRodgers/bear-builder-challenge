// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Bob_attachToContract0_38: ctc3,
    Bob_endMeeting0_38: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['usersCount', ctc2], ['citizenIndex', ctc2], ['exists', ctc6], ['added', ctc6]]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v201 = stdlib.protect(ctc2, interact.meetingEndTime, 'for Alice\'s interact field meetingEndTime');
  
  stdlib.protect(ctc0, await interact.notifyMembers(), {
    at: './index.rsh:21:31:application',
    fs: ['at ./index.rsh:20:15:application call to [unknown function] (defined at: ./index.rsh:20:19:function exp)'],
    msg: 'notifyMembers',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v201],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v205], secs: v207, time: v206, didSend: v27, from: v204 } = txn1;
      
      ;
      const v208 = true;
      const v209 = stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0');
      const v210 = v206;
      
      if (await (async () => {
        
        return v208;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v205], secs: v207, time: v206, didSend: v27, from: v204 } = txn1;
  ;
  let v208 = true;
  let v209 = stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0');
  let v210 = v206;
  
  while (await (async () => {
    
    return v208;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v239], secs: v241, time: v240, didSend: v106, from: v238 } = txn2;
    switch (v239[0]) {
      case 'Bob_attachToContract0_38': {
        const v242 = v239[1];
        undefined /* setApiDetails */;
        ;
        const v250 = v242[stdlib.checkedBigNumberify('./index.rsh:35:13:spread', stdlib.UInt_max, '0')];
        const v251 = stdlib.lt(v209, stdlib.checkedBigNumberify('./index.rsh:39:34:decimal', stdlib.UInt_max, '5'));
        if (v251) {
          const v252 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v238), null);
          let v253;
          switch (v252[0]) {
            case 'None': {
              const v254 = v252[1];
              v253 = false;
              
              break;
              }
            case 'Some': {
              const v255 = v252[1];
              v253 = true;
              
              break;
              }
            }
          if (v253) {
            const v256 = {
              added: false,
              citizenIndex: v250,
              exists: true,
              usersCount: v209
              };
            await txn2.getOutput('Bob_attachToContract', 'v256', ctc7, v256);
            const v267 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
            const cv208 = true;
            const cv209 = v267;
            const cv210 = v240;
            
            v208 = cv208;
            v209 = cv209;
            v210 = cv210;
            
            continue;}
          else {
            await stdlib.mapSet(map0, v238, null);
            const v270 = {
              added: true,
              citizenIndex: v250,
              exists: false,
              usersCount: v209
              };
            await txn2.getOutput('Bob_attachToContract', 'v270', ctc7, v270);
            const v281 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
            const cv208 = true;
            const cv209 = v281;
            const cv210 = v240;
            
            v208 = cv208;
            v209 = cv209;
            v210 = cv210;
            
            continue;}}
        else {
          const v283 = {
            added: false,
            citizenIndex: v250,
            exists: false,
            usersCount: v209
            };
          await txn2.getOutput('Bob_attachToContract', 'v283', ctc7, v283);
          const v294 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
          const cv208 = true;
          const cv209 = v294;
          const cv210 = v240;
          
          v208 = cv208;
          v209 = cv209;
          v210 = cv210;
          
          continue;}
        break;
        }
      case 'Bob_endMeeting0_38': {
        const v321 = v239[1];
        undefined /* setApiDetails */;
        ;
        const v376 = stdlib.addressEq(v238, v204);
        if (v376) {
          const v390 = 'Contract stopped by Alice, the meeting chairperson';
          await txn2.getOutput('Bob_endMeeting', 'v390', ctc8, v390);
          const cv208 = false;
          const cv209 = v209;
          const cv210 = v240;
          
          v208 = cv208;
          v209 = cv209;
          v210 = cv210;
          
          continue;}
        else {
          const v379 = 'Attempt to stop contract rejected.';
          stdlib.protect(ctc0, await interact.log(v379), {
            at: './index.rsh:62:38:application',
            fs: ['at ./index.rsh:62:38:application call to [unknown function] (defined at: ./index.rsh:62:38:function exp)', 'at ./index.rsh:62:38:application call to "liftedInteract" (defined at: ./index.rsh:62:38:application)', 'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          const v380 = 'Only the organiser (Alice) can ended this meeting.';
          await txn2.getOutput('Bob_endMeeting', 'v380', ctc8, v380);
          const cv208 = true;
          const cv209 = v209;
          const cv210 = v240;
          
          v208 = cv208;
          v209 = cv209;
          v210 = cv210;
          
          continue;}
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Bob_attachToContract3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_attachToContract3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_attachToContract3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bob_attachToContract0_38: ctc4,
    Bob_endMeeting0_38: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['usersCount', ctc3], ['citizenIndex', ctc3], ['exists', ctc7], ['added', ctc7]]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v204, v209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3]);
  const v218 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:36:17:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)', 'at ./index.rsh:32:23:application call to "runBob_attachToContract0_38" (defined at: ./index.rsh:35:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'in',
    who: 'Bob_attachToContract'
    });
  const v225 = ['Bob_attachToContract0_38', v218];
  
  const txn1 = await (ctc.sendrecv({
    args: [v204, v209, v225],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v239], secs: v241, time: v240, didSend: v106, from: v238 } = txn1;
      
      switch (v239[0]) {
        case 'Bob_attachToContract0_38': {
          const v242 = v239[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_attachToContract"
            });
          ;
          const v250 = v242[stdlib.checkedBigNumberify('./index.rsh:35:13:spread', stdlib.UInt_max, '0')];
          const v251 = stdlib.lt(v209, stdlib.checkedBigNumberify('./index.rsh:39:34:decimal', stdlib.UInt_max, '5'));
          if (v251) {
            const v252 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v238), null);
            let v253;
            switch (v252[0]) {
              case 'None': {
                const v254 = v252[1];
                v253 = false;
                
                break;
                }
              case 'Some': {
                const v255 = v252[1];
                v253 = true;
                
                break;
                }
              }
            if (v253) {
              const v256 = {
                added: false,
                citizenIndex: v250,
                exists: true,
                usersCount: v209
                };
              const v257 = await txn1.getOutput('Bob_attachToContract', 'v256', ctc8, v256);
              
              const v267 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
              const v598 = v267;
              sim_r.isHalt = false;
              }
            else {
              await stdlib.simMapSet(sim_r, 0, v238, null);
              const v270 = {
                added: true,
                citizenIndex: v250,
                exists: false,
                usersCount: v209
                };
              const v271 = await txn1.getOutput('Bob_attachToContract', 'v270', ctc8, v270);
              
              const v281 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
              const v601 = v281;
              sim_r.isHalt = false;
              }}
          else {
            const v283 = {
              added: false,
              citizenIndex: v250,
              exists: false,
              usersCount: v209
              };
            const v284 = await txn1.getOutput('Bob_attachToContract', 'v283', ctc8, v283);
            
            const v294 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
            const v604 = v294;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_endMeeting0_38': {
          const v321 = v239[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v239], secs: v241, time: v240, didSend: v106, from: v238 } = txn1;
  switch (v239[0]) {
    case 'Bob_attachToContract0_38': {
      const v242 = v239[1];
      undefined /* setApiDetails */;
      ;
      const v250 = v242[stdlib.checkedBigNumberify('./index.rsh:35:13:spread', stdlib.UInt_max, '0')];
      const v251 = stdlib.lt(v209, stdlib.checkedBigNumberify('./index.rsh:39:34:decimal', stdlib.UInt_max, '5'));
      if (v251) {
        const v252 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v238), null);
        let v253;
        switch (v252[0]) {
          case 'None': {
            const v254 = v252[1];
            v253 = false;
            
            break;
            }
          case 'Some': {
            const v255 = v252[1];
            v253 = true;
            
            break;
            }
          }
        if (v253) {
          const v256 = {
            added: false,
            citizenIndex: v250,
            exists: true,
            usersCount: v209
            };
          const v257 = await txn1.getOutput('Bob_attachToContract', 'v256', ctc8, v256);
          if (v106) {
            stdlib.protect(ctc0, await interact.out(v242, v257), {
              at: './index.rsh:35:14:application',
              fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:14:function exp)', 'at ./index.rsh:43:32:application call to "respond" (defined at: ./index.rsh:38:13:function exp)', 'at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)'],
              msg: 'out',
              who: 'Bob_attachToContract'
              });
            }
          else {
            }
          
          const v267 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
          const v598 = v267;
          return;
          }
        else {
          await stdlib.mapSet(map0, v238, null);
          const v270 = {
            added: true,
            citizenIndex: v250,
            exists: false,
            usersCount: v209
            };
          const v271 = await txn1.getOutput('Bob_attachToContract', 'v270', ctc8, v270);
          if (v106) {
            stdlib.protect(ctc0, await interact.out(v242, v271), {
              at: './index.rsh:35:14:application',
              fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:14:function exp)', 'at ./index.rsh:47:32:application call to "respond" (defined at: ./index.rsh:38:13:function exp)', 'at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)'],
              msg: 'out',
              who: 'Bob_attachToContract'
              });
            }
          else {
            }
          
          const v281 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
          const v601 = v281;
          return;
          }}
      else {
        const v283 = {
          added: false,
          citizenIndex: v250,
          exists: false,
          usersCount: v209
          };
        const v284 = await txn1.getOutput('Bob_attachToContract', 'v283', ctc8, v283);
        if (v106) {
          stdlib.protect(ctc0, await interact.out(v242, v284), {
            at: './index.rsh:35:14:application',
            fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:14:function exp)', 'at ./index.rsh:52:28:application call to "respond" (defined at: ./index.rsh:38:13:function exp)', 'at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)'],
            msg: 'out',
            who: 'Bob_attachToContract'
            });
          }
        else {
          }
        
        const v294 = stdlib.add(v209, stdlib.checkedBigNumberify('./index.rsh:55:58:decimal', stdlib.UInt_max, '1'));
        const v604 = v294;
        return;
        }
      break;
      }
    case 'Bob_endMeeting0_38': {
      const v321 = v239[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_endMeeting3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_endMeeting3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_endMeeting3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Bob_attachToContract0_38: ctc5,
    Bob_endMeeting0_38: ctc4
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v204, v209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3]);
  const v229 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:16:function exp)', 'at ./index.rsh:32:23:application call to "runBob_endMeeting0_38" (defined at: ./index.rsh:57:14:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'in',
    who: 'Bob_endMeeting'
    });
  const v233 = ['Bob_endMeeting0_38', v229];
  
  const txn1 = await (ctc.sendrecv({
    args: [v204, v209, v233],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v239], secs: v241, time: v240, didSend: v106, from: v238 } = txn1;
      
      switch (v239[0]) {
        case 'Bob_attachToContract0_38': {
          const v242 = v239[1];
          
          break;
          }
        case 'Bob_endMeeting0_38': {
          const v321 = v239[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_endMeeting"
            });
          ;
          const v376 = stdlib.addressEq(v238, v204);
          if (v376) {
            const v390 = 'Contract stopped by Alice, the meeting chairperson';
            const v391 = await txn1.getOutput('Bob_endMeeting', 'v390', ctc7, v390);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v380 = 'Only the organiser (Alice) can ended this meeting.';
            const v381 = await txn1.getOutput('Bob_endMeeting', 'v380', ctc7, v380);
            
            const v625 = v209;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v239], secs: v241, time: v240, didSend: v106, from: v238 } = txn1;
  switch (v239[0]) {
    case 'Bob_attachToContract0_38': {
      const v242 = v239[1];
      return;
      break;
      }
    case 'Bob_endMeeting0_38': {
      const v321 = v239[1];
      undefined /* setApiDetails */;
      ;
      const v376 = stdlib.addressEq(v238, v204);
      if (v376) {
        const v390 = 'Contract stopped by Alice, the meeting chairperson';
        const v391 = await txn1.getOutput('Bob_endMeeting', 'v390', ctc7, v390);
        if (v106) {
          stdlib.protect(ctc0, await interact.out(v321, v391), {
            at: './index.rsh:57:15:application',
            fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)', 'at ./index.rsh:66:27:application call to "respond" (defined at: ./index.rsh:60:13:function exp)', 'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
            msg: 'out',
            who: 'Bob_endMeeting'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v380 = 'Only the organiser (Alice) can ended this meeting.';
        const v381 = await txn1.getOutput('Bob_endMeeting', 'v380', ctc7, v380);
        if (v106) {
          stdlib.protect(ctc0, await interact.out(v321, v381), {
            at: './index.rsh:57:15:application',
            fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)', 'at ./index.rsh:63:27:application call to "respond" (defined at: ./index.rsh:60:13:function exp)', 'at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
            msg: 'out',
            who: 'Bob_endMeeting'
            });
          }
        else {
          }
        
        const v625 = v209;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_attachToContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_attachToContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_attachToContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Bob_attachToContract3(ctcTop, interact);}
  };
export async function Bob_endMeeting(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_endMeeting expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_endMeeting expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Bob_endMeeting3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_attachToContract(uint64)(uint64,uint64,byte,byte)`, `Bob_endMeeting()byte[50]`],
    pure: [],
    sigs: [`Bob_attachToContract(uint64)(uint64,uint64,byte,byte)`, `Bob_endMeeting()byte[50]`]
    },
  appApproval: `BiAHAAECCObe7L0LAwUmAwEAAQEAIjUAMRhBAxcqZEkiWzUBJVs1AjEZIxJBAAgxACgoZkIC5jYaABdJQQAyIjUEIzUGSSEEDEAAESEEEkQqNf8pNP9QJa9QQgAqgcaomKoFEkQ2GgE1/yg0/1BCABY2GgIXNQQ2GgM2GgEXSSQMQAIDJBJEIQU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/4EgWzX+STUFNf2ABB4G5rA0/VCwNP0iVUAAxzT9VwEINfw0/Bc1+zT+IQYMQQCDMQCIAnpJNfkiVUAABiI1+kIABiM1+kIAADT6QQAwgAgAAAAAAAABADT+FjT7FlApUChQULA0/hY0+xZQKVAoUDUHNP8jNP4jCDIGQgGbMQAoKWaACAAAAAAAAAEONP4WNPsWUChQKVBQsDT+FjT7FlAoUClQNQc0/yM0/iMIMgZCAWaACAAAAAAAAAEbNP4WNPsWUChQKFBQsDT+FjT7FlAoUChQNQc0/yM0/iMIMgZCATYxADT/EkEAfYA6AAAAAAAAAYZDb250cmFjdCBzdG9wcGVkIGJ5IEFsaWNlLCB0aGUgbWVldGluZyBjaGFpcnBlcnNvbrCAMkNvbnRyYWN0IHN0b3BwZWQgYnkgQWxpY2UsIHRoZSBtZWV0aW5nIGNoYWlycGVyc29uNQc0/yI0/jIGQgCxgDoAAAAAAAABfE9ubHkgdGhlIG9yZ2FuaXNlciAoQWxpY2UpIGNhbiBlbmRlZCB0aGlzIG1lZXRpbmcusIAyT25seSB0aGUgb3JnYW5pc2VyIChBbGljZSkgY2FuIGVuZGVkIHRoaXMgbWVldGluZy41BzT/IzT+MgZCADQiEkSBoI0GiADNIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQAjIjIGQgAANf81/jX9Nfw0/UEAGTT8NP4WUChLAVcAKGdIIQU1ATIGNQJCAB9CAAAxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Bob_attachToContract0_38",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_endMeeting0_38",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "usersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "citizenIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "added",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v256",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "usersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "citizenIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "added",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v270",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "usersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "citizenIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "added",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v283",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes18",
            "name": "elem1",
            "type": "bytes18"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v380",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes18",
            "name": "elem1",
            "type": "bytes18"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v390",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_attachToContract",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "usersCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "citizenIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "added",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_endMeeting",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes18",
            "name": "elem1",
            "type": "bytes18"
          }
        ],
        "internalType": "struct T11",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Bob_attachToContract0_38",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_endMeeting0_38",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200135138038062001351833981016040819052620000269162000281565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000df565b6040805160608082018352600082840181815283528351918201845280825260208083018290528285018290528084019283528351339052825160019052825101525143920191909152620000d78162000109565b505062000360565b81620001055760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200018657604080518082018252600080825260208083018281528551516001600160a01b03168085528683015183015182526003909355436001558451808301939093525182850152835180830385018152606090920190935280519192620001819260029290910190620001a1565b505050565b600080805560018190556200019e9060029062000230565b50565b828054620001af9062000323565b90600052602060002090601f016020900481019282620001d357600085556200021e565b82601f10620001ee57805160ff19168380011785556200021e565b828001600101855582156200021e579182015b828111156200021e57825182559160200191906001019062000201565b506200022c9291506200026a565b5090565b5080546200023e9062000323565b6000825580601f106200024f575050565b601f0160209004906000526020600020908101906200019e91905b5b808211156200022c57600081556001016200026b565b60008183036040808212156200029657600080fd5b80518082016001600160401b038082118383101715620002c657634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002e057600080fd5b8351945060208501915084821081831117156200030d57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200033857607f821691505b602082108114156200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b610fe180620003706000396000f3fe60806040526004361061006e5760003560e01c8063545c55e01161004b578063545c55e0146100e857806383230757146100fd578063ab53f2c614610112578063e2196a671461013557005b80631e93b0f1146100775780632f3204851461009b5780633bc5b7bf146100bb57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100ae6100a9366004610bd1565b610148565b6040516100929190610bea565b3480156100c757600080fd5b506100db6100d6366004610c2e565b610185565b6040516100929190610c86565b6100f06101b1565b6040516100929190610cb8565b34801561010957600080fd5b50600154610088565b34801561011e57600080fd5b506101276101f3565b604051610092929190610ce0565b610075610143366004610d3d565b610290565b6101506109a1565b6101586109cd565b602081810180515160009052515101518390526101736109ec565b61017d82826102b4565b519392505050565b60408051606081018252600080825260208201819052918101919091526101ab82610811565b92915050565b60408051808201909152600080825260208201526101cd6109cd565b602081015151600190526101df6109ec565b6101e982826102b4565b6020015192915050565b60006060600054600280805461020890610d55565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610d55565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b50505050509050915091509091565b6102986109ec565b6102b06102aa36849003840184610e23565b826102b4565b5050565b6102c4600360005414600a6108e9565b81516102df9015806102d857508251600154145b600b6108e9565b6000808055600280546102f190610d55565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90610d55565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b50505050508060200190518101906103829190610ecd565b905061038c610a1e565b7f458d15ab73b8dc0c4c1f9d2ce4f1acf0a55f31ebf1e3f374653041f2849b981233856040516103bd929190610f33565b60405180910390a160006020850151515160018111156103df576103df610c52565b14156106395760208085015151015181526103fc341560086108e9565b6005826020015110156105c557600061041433610811565b51600181111561042657610426610c52565b14156104385760006020820152610463565b600161044333610811565b51600181111561045557610455610c52565b141561046357600160208201525b8060200151156105315760208083015160408084018051929092528351518251909301929092528051600190830152805160006060909101525190517fc34abcfc91b06c6c387a1146ca404df22df1cd838c71a1a1df5937a5a800a95c916104ca91610bea565b60405180910390a1604081015183526104e1610a7d565b825181516001600160a01b0390911690526020808201516001908190529084015161050c9190610f85565b6020808301805190910191909152514360409091015261052b8161090e565b5061080b565b336000908152600460209081526040808320805462ff00ff191660019081179091558583015160608681018051929092528651518251909501949094528051830194909452835190920191909152905190517f3ee169b9bc3c38dd43a7ca6c45df92184b9ed399baa7bdc6513157d2ebd2b5c2916105ae91610bea565b60405180910390a1606081015183526104e1610a7d565b60208083015160808301805191909152825151815190920191909152805160006040918201819052825160600152905190517fca757b93e2599050b9fd7b92f30bdc56ef28c7c96729e8ad6df35a300553f3819161062291610bea565b60405180910390a1608081015183526104e1610a7d565b600160208501515151600181111561065357610653610c52565b141561080b57610665341560096108e9565b81516001600160a01b03163314156107415760c0810180517f436f6e74726163742073746f7070656420627920416c6963652c20746865206d905280517132b2ba34b7339031b430b4b93832b939b7b760711b602090910152516040517fb5fef4c2ace02bcead71eef2dd921b7b88e940c6f73a6783c3fb845079732704916106ed91610cb8565b60405180910390a160c08101516020840152610707610a7d565b825181516001600160a01b039091169052602080820180516000905281850151815190920191909152514360409091015261052b8161090e565b60a0810180517f4f6e6c7920746865206f7267616e697365722028416c696365292063616e20659052805171373232b2103a3434b99036b2b2ba34b7339760711b602090910152516040517fe5c0390bb5377604d3d0e759ab0644a41267ebf38ad295cd003c69a47417a02a916107b791610cb8565b60405180910390a160a081015160208401526107d1610a7d565b825181516001600160a01b039091169052602080820180516001905281850151815190920191909152514360409091015261052b8161090e565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561085d5761085d610c52565b14156108da576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561089e5761089e610c52565b60018111156108af576108af610c52565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b816102b05760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561098857604080518082018252600080825260208083018281528551516001600160a01b031680855286830151830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926109839260029290910190610ab5565b505050565b6000808055600181905561099e90600290610b39565b50565b604051806080016040528060008152602001600081526020016000151581526020016000151581525090565b6040518060400160405280600081526020016109e7610b73565b905290565b60405180604001604052806109ff6109a1565b81526020016109e7604080518082019091526000808252602082015290565b6040805161010081018252600060e0820181815282526020820152908101610a446109a1565b8152602001610a516109a1565b8152602001610a5e6109a1565b81526020016109ff604080518082019091526000808252602082015290565b604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610ac190610d55565b90600052602060002090601f016020900481019282610ae35760008555610b29565b82601f10610afc57805160ff1916838001178555610b29565b82800160010185558215610b29579182015b82811115610b29578251825591602001919060010190610b0e565b50610b35929150610b86565b5090565b508054610b4590610d55565b6000825580601f10610b55575050565b601f01602090049060005260206000209081019061099e9190610b86565b60405180602001604052806109e7610b9b565b5b80821115610b355760008155600101610b87565b60408051606081019091528060008152602001610bc46040518060200160405280600081525090565b8152600060209091015290565b600060208284031215610be357600080fd5b5035919050565b815181526020808301519082015260408083015115159082015260609182015115159181019190915260800190565b6001600160a01b038116811461099e57600080fd5b600060208284031215610c4057600080fd5b8135610c4b81610c19565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061099e57634e487b7160e01b600052602160045260246000fd5b81516060820190610c9681610c68565b8083525060208301511515602083015260408301511515604083015292915050565b815181526020918201516dffffffffffffffffffffffffffff19169181019190915260400190565b82815260006020604081840152835180604085015260005b81811015610d1457858101830151858201606001528201610cf8565b81811115610d26576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610d4f57600080fd5b50919050565b600181811c90821680610d6957607f821691505b60208210811415610d4f57634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715610dbb57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610dbb57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610dbb57634e487b7160e01b600052604160045260246000fd5b60008183036080811215610e3657600080fd5b610e3e610d8a565b833581526060601f1983011215610e5457600080fd5b610e5c610dc1565b610e64610df2565b602086013560028110610e7657600080fd5b81526020603f1985011215610e8a57600080fd5b610e92610dc1565b604087013581526020820152606086013593508315158414610eb357600080fd5b604081019390935291825260208101919091529392505050565b600060408284031215610edf57600080fd5b6040516040810181811067ffffffffffffffff82111715610f1057634e487b7160e01b600052604160045260246000fd5b6040528251610f1e81610c19565b81526020928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190610f5f81610c68565b806040850152506020810151516060840152604081015115156080840152509392505050565b60008219821115610fa657634e487b7160e01b600052601160045260246000fd5b50019056fea264697066735822122035c05821d452c739357e68910503b00c8155fbd0365d61541351de08488c2b8064736f6c634300080c0033`,
  BytecodeLen: 4945,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_attachToContract": Bob_attachToContract,
  "Bob_endMeeting": Bob_endMeeting
  };
export const _APIs = {
  Bob: {
    attachToContract: Bob_attachToContract,
    endMeeting: Bob_endMeeting
    }
  };

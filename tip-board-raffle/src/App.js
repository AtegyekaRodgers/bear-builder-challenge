import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import {
  mdiHeartOutline,
  mdiAbacus,
  mdiMenu,
  mdiAccountTie,
  mdiCartOutline,
} from '@mdi/js';
import './App.css';
import * as backend from './reach-build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';

const reach = loadStdlib({
  REACH_CONNECTOR_MODE: "ALGO-devnet",
  //PUBLIC_URL: "https%3A%2F%2Fr.bridge.walletconnect.org"
});

reach.setWalletFallback(reach.walletFallback({
  providerEnv: {
    ALGO_TOKEN: '',
    ALGO_SERVER: "https://testnet-api.algonode.cloud",
    ALGO_PORT: '',
    ALGO_INDEXER_TOKEN: '',
    ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
    ALGO_INDEXER_PORT: '',
  },
  WalletConnect
}));


function App() {

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <nav id="header" className="w-full z-30 top-0 py-1 bg-blue-100">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
              
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Tickets</a></li>
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">How it works</a></li>
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-2">
                <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    <Icon path={ mdiAbacus } size={1} className={`my-auto inline-block text-current mr-4`}/>
                    The Tip Board Raffle NFT
                </a>
            </div>

            <div className="order-2 md:order-3 flex items-center" id="nav-content">

                <a className="inline-block no-underline hover:text-black" href="#">
                    <Icon path={ mdiAccountTie } size={1} className={`my-auto inline-block text-current`}/>
                </a>

                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                    <Icon path={ mdiCartOutline } size={1} className={`my-auto inline-block text-current`}/>
                </a>

            </div>
        </div>
      </nav>
    
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 border border-gray-300">
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <a href="#">
                    <img className="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"/>
                    <div className="pt-3 flex items-center justify-between">
                        <p className="">TBR NFT</p>
                        <Icon path={ mdiHeartOutline } size={1} className={`my-auto inline-block text-current`}/>
                    </div>
                </a>
            </div>
            
            

            <div className="w-full md:w-2/3 xl:w-1/4 p-6 flex flex-col">
                
            </div>
            
            
        </div>
      </section>

      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
            <div className="w-full mx-auto flex flex-wrap">
                <div className="flex w-full lg:w-1/2 ">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900">About</h3>
                        <p className="py-4">
                            An NFT Raffle program that functions like a tip board - the key is 
                            that the winning number is set at the creation of the raffle, 
                            but hidden from other participants while we draw numbers for their tickets.
                        </p>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900">References</h3>
                        <ul className="list-reset items-center pt-3">
                            <li>
                                <a className="inline-block no-underline hover:text-black hover:underline py-1" 
                                href="https://docs.reach.sh/tut/rps/#tut">
                                    Reach basic tutorial - The Aock, Paper Scissor (RPS)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

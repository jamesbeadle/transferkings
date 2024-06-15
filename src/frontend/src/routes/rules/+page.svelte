<script>
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    import Layout from "../Layout.svelte";

</script>
<Layout>    
    <div class="p-4">
        <div class="flex flex-row items-center">
            <LogoIcon fill='#FFFFFF' className="w-6 mr-2" />
            <p class="text-xl">Transfer Kings Gameplay Rules</p>
        </div>
        <div class="bg-Brand5z w-full p-4 mt-4 rounded-lg border-solid border-Brand5w border-2">
            <b class="text-lg"><u>How It Works</u></b>
            <p class="mt-2 mb-4">Transfer Kings is all about being a good football agent. 
                You run your own agency, creating contracts with football players from around the world at at all levels. 
                As your clients perform well in the real world, your portfolio value increases, earning you $FOOTBALL tokens.</p>

            <div class="horizontal-divider my-2 mb-4" />
            <b class="text-lg"><u>Contract Center</u></b>
            <b class="text-lg"></b>

            <p class="mt-2">You can fill contracts by accessing the 'Contract Center' through the side navigation panel.
            </p>
            
            <p class="my-2">When you setup your agency you receive a default set of contracts you can fill, selecting from any player around the world.
                There are 5 Transfer Kings contract types, each is listed below with the number allocated with your starting team:
            </p>
            <ul class="my-2">
                <li>All Star <small>(5 Initially)</small></li>
                <li>Squad Player <small>(20 Initially)</small></li>
                <li>Prospect <small>(20 Initially)</small></li>
                <li>Academy <small>(25 Initially)</small></li>
                <li>Lower League <small>(30 Initially)</small></li>
            </ul>

            <p class="mt-2 mb-4">After you have your contracts setup you can manage your clients through the 'Agent Hub'. </p>

            <p>An agency starts with a budget of €250m. 
                The acquisition and sale price of a player is 10% of their value, the cost associated with the on going promotion of your clients.</p>

            <div class="horizontal-divider my-2 mb-4" />
            <b class="text-lg"><u>Agent Hub</u></b>

            <p class="mt-2">The Agent Hub is where you manage your clients on a day to day basis. 
                Here you select clients to be promoted, multiplying your rewards for real life football achievements.</p>
            
            <p class="mt-2">The Agent Hub contains 15 places, ranked from your favourite client down. 
                The client in your first promotion position will earn you the biggest multiplier, reducing as you get to promotion position 15.
                The multiplier percentages are listed below:
            </p>
            <div class="mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <ul>
                            <li>1st: 3X</li>
                            <li>2nd: 2.8X</li>
                            <li>3rd: 2.6X</li>
                            <li>4th: 2.4X</li>
                            <li>5th: 2.2X</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>6th: 2X</li>
                            <li>7th: 1.9X</li>
                            <li>8th: 1.8X</li>
                            <li>9th: 1.7X</li>
                            <li>10th: 1.6X</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>11th: 1.5X</li>
                            <li>12th: 1.4X</li>
                            <li>13th: 1.3X</li>
                            <li>14th: 1.2X</li>
                            <li>15th: 1.1X</li>
                        </ul>
                    </div>
                </div>
            </div>


            <p class="mt-2 mb-4">To prevent your players going stale they have to be rotated out of the Agent Hub every 4 weeks. A player is then restricted from being repromoted for a further 4 weeks. 
                This ensures each of your clients receives the attention they deserve.</p>

            <div class="horizontal-divider my-2 mb-4" />
            <b class="text-lg"><u>How You Earn</u></b>

            <p class="mt-2">Gameplay: The players you promote in the Agent Hub will earn $FOOTBALL tokens each week based on their in game performances combined with the level of competition they are playing. 
                This revenue can then be banked and viewed within the Contract Center earnings to date. Before depositing earnings into the Contract Center, you can swap earnings for additional contracts of any type.</p>

            <p class="mt-2 mb-4">Career Achievements: All players listed within your Contract Center will earn you $FOOTBALL tokens based on their career achievements. 
                Each achievement is weighted based on how difficult it is to acheive. All achievement rewards are multiplied by the change in value of a player since you signed their contract.
                This means that if you get a player at the beginning of their career and hold them until they win the World Cup, 
                the $FOOTBALL earned would increase by the factor the player's value changed since you purchased them.
            </p>
    
            <div class="horizontal-divider my-2" />
            <b class="text-lg">Growing Your Agency</b>

            <p class="mt-2">The players you have under contract are worth the same amount as their real world counter parts. 
                As their value changes, you will be able to increase your budget through selling high performing players.
                When a player's contract ends, the current value of that player is added back to your budget.
                You can end a contract early, receiving 80% of a player's current value.
                To grow your agency you will need to obtain more than the 100 contracts initially available for you to fill. 
                This can be done when earnings are made through the players you promote in the Agent Hub.
                To realise Agent Hub $FOOTBALL token earnings you deposit the tokens into your Contract center, increasing the contract earnings of the player. 
                When transferring these earnings you are able to select the % of earnings to transfer, obtaining additional contracts for the reduced amount.
            </p>
    
            <div class="horizontal-divider my-2 mb-4" />
            <b class="text-lg"><u>Private Agencies</u></b>

            <p class="mt-2 mb-4">Along with participating in the free global Transfer Kings game, you can setup a paid private agency to enhance your experience with your friends.
                Within a Private Agency, you select from the same group of players, with no one allowed to select the same player. 
                You can customise your league design, rewards and entry requirements to suit your needs.
            </p>

            
            <div class="horizontal-divider my-2 mb-4" />
            <b class="text-lg"><u>Bot Prevention Controls</u></b>
            <p>Our built in controls will ensure rewards are based on genuine user participation, with rewards directly effected by how often you manage your global agency.</p>
            
        </div>
    </div>
</Layout>

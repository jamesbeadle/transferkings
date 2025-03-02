<script>
    import IcfcIcon from "$lib/icons/icfc-icon.svelte";
    import ShirtIcon from "$lib/icons/shirt-icon.svelte";
    import Layout from "../Layout.svelte";

    export let cardId = "0000000000001";
    export let playerName = "Darwin Nunez";
    export let team = "Liverpool";
    export let position = "Forward";
</script>

<Layout>
    <div class="flex flex-row text-black space-x-4">
       
        <div class="w-full h-full bg-white rounded-lg p-4 shadow-lg test-card">
            <div class="bg-white w-full h-full p-4">

            <p class="text-sm text-gray-600">
                Card ID: {cardId}
            </p>

            <div class="badge-container">
                <IcfcIcon 
                    className="w-96 py-4 rotated-badge ml-8 mt-16" 
                    borderFill="#2CC4B9" 
                    icfcFill="#000000" 
                    innerFill="#E50113" 
                    ballFill="#000000" 
                />
                <p>2024/25</p>
            </div>

                <h1 class="player-name absolute transform top-[150px] text-4xl font-bold text-black">
                    <div class="flex flex-row items-center">
                        <ShirtIcon className='w-16 mt-4' club={{id:1, abbreviatedName: '', shirtType: { Filled: null }, primaryColourHex: '#E50113', secondaryColourHex: '#FFFFFF', name: '', friendlyName: '', thirdColourHex: '#2CC4B9'}} />
                        {playerName}        
                    </div>
                    
                    <div class="details text-sm">
                        <p class="text-gray-700">{team}</p>
                        <p class="text-gray-600">{position}</p>
                    </div>
                </h1>

            </div>
        </div>
    </div>
</Layout>

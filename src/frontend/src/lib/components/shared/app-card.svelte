<script lang="ts">
    import InfoIcon from "$lib/icons/info-icon.svelte";
    import ShirtIcon from "$lib/icons/shirt-icon.svelte";
    import type { Card } from "$lib/types/card";
    import type { ClubDTO } from "../../../../../declarations/data_canister/data_canister.did";


    export let card: Card;

    export let isFlipped: boolean;
    export let onFlip: (id: string, event: MouseEvent) => void;

    let club: ClubDTO = {
        id:14,
        secondaryColourHex:"#FFFFFF",
        name:"Manchester United",
        friendlyName:"Man United",
        thirdColourHex:"#FEF104",
        abbreviatedName:"MUN",
        shirtType: { Filled : null },
        primaryColourHex:"#C00814"
    }
</script>

<div class="relative min-h-[420px] w-full aspect-[1/1.4] group perspective hover:scale-[1.02] transition-transform duration-300">
    <div class={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div class="absolute w-full h-full p-8 rounded-2xl backface-hidden bg-{card.color} text-{card.textColor} transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col">
            <div class="flex items-center justify-between">
                <div class="relative z-20 w-12 h-12">
                    <svelte:component this={card.logo} className="w-full h-full" />
                </div>

                <button
                    on:click={(e) => onFlip(card.id, e)}
                    aria-label="Show card details"
                    class="z-30 flex items-center justify-center group"
                >
                    <InfoIcon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-180" fill={card.textColor}  />
                </button>
            </div>

            <div class="absolute transform {card.backgroundPosition} {card.backgroundOpacity}">
                <svelte:component this={card.background} className={card.backgroundSize} />
            </div>
                    
            <div class="relative z-10 flex justify-center my-4">
                <ShirtIcon className='w-32' {club} />
            </div>
            
            <div class="relative z-10 mt-auto">
                <p class="mb-1 text-lg opacity-75 cta-text">{card.id}</p>
                <h3 class="text-3xl font-[1000]">{card.title}</h3>
            </div>
        </div>

        <div class="absolute w-full h-full p-8 rounded-2xl backface-hidden rotate-y-180 bg-{card.color} text-{card.textColor} flex flex-col">
            <div class="flex items-center justify-between">
                <div class="relative z-20 w-12 h-12">
                    <svelte:component this={card.logo} className="w-full h-full" />
                </div>

                <button
                    on:click={(e) => onFlip(card.id, e)}
                    aria-label="Hide card details"
                    class="z-30 flex items-center justify-center group"
                >
                    <InfoIcon className="w-7 h-7 transition-transform duration-300 group-hover:-rotate-180" fill={card.textColor} />
                </button>
            </div>

            <div class="flex flex-col h-full pt-4">
                <p class="pl-1 my-2 text-lg opacity-75 cta-text">{card.id}</p>
                <h3 class="mb-3 text-2xl font-[1000]">{card.title}</h3>
                <div class="w-full h-[2px] bg-current mb-4"></div>
                <p class="mb-4 text-sm">{card.description}</p>
                <a 
                    href={card.link}
                    target="_blank"
                    class={`px-6 py-3 mt-auto border text-center transition-colors duration-300 bg-transparent transform rounded-md shadow-md ${
                        card.textColor === 'white' 
                            ? 'border-BrandGrayShade6 hover:bg-BrandGrayShade6' 
                            : 'border-black hover:bg-black'
                    } hover:shadow-lg hover:-translate-y-1 hover:text-${card.color}`}
                >
                    BUY NOW
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .perspective {
        perspective: 1000px;
    }
    
    .transform-style-3d {
        transform-style: preserve-3d;
    }
    
    .backface-hidden {
        backface-visibility: hidden;
    }
    
    .rotate-y-180 {
        transform: rotateY(180deg);
    }
</style> 
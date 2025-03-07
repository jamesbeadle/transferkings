<script lang="ts">
    import AppCard from "$lib/components/shared/app-card.svelte";
    import FootballGodIcon from "$lib/icons/appIcons/background/FootballGodIcon.svelte";
    import FootballGodLogo from "$lib/icons/appIcons/logo/FootballGodLogo.svelte";
import IcfcIcon from "$lib/icons/icfc-icon.svelte";
    import ShirtIcon from "$lib/icons/shirt-icon.svelte";
    import type { Card } from "$lib/types/card";
    import Layout from "../Layout.svelte";

    export let cardId = "0000000000001";
    export let playerName = "Darwin Nunez";
    export let team = "Liverpool";
    export let position = "Forward";

    let card: Card = {
          id: "00000000000001",
          title: "Jamie Vardy",
          background: FootballGodIcon,
          logo: FootballGodLogo,
          color: "FootballGodBackground",
          textColor: "white",
          description: "Jamie Vardy is a massive legend.",
          link: "https://footballgod.xyz",
          backgroundOpacity: "opacity-[0.15]",
          backgroundSize: "w-[80%] h-[80%]",
          backgroundPosition: "-bottom-10 -right-20"
      }


    let flippedCards = new Set();

    const toggleFlip = (id: string, event: MouseEvent) => {
        event.preventDefault();
        if (flippedCards.has(id)) {
            flippedCards.delete(id);
        } else {
            flippedCards.add(id);
        }
        flippedCards = flippedCards;
    };


</script>



<Layout> 
    <div class="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AppCard {card} 
            isFlipped={flippedCards.has(card.id)}
            onFlip={toggleFlip}
         />
        <AppCard {card} 
        isFlipped={flippedCards.has(card.id)}
        onFlip={toggleFlip}
        />
        <AppCard {card} 
            isFlipped={flippedCards.has(card.id)}
            onFlip={toggleFlip}
         />
         <AppCard {card} 
            isFlipped={flippedCards.has(card.id)}
            onFlip={toggleFlip}
         />
         <AppCard {card} 
            isFlipped={flippedCards.has(card.id)}
            onFlip={toggleFlip}
         />
    </div>
</Layout>

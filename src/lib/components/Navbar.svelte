<script>
    import { page } from "$app/stores";

    import Close from '$lib/components/icons/Close.svelte';
    import Hamburger from '$lib/components/icons/Hamburger.svelte';

    let isNavShowing = false;
</script>

<!-- Mobile nav Control -->
<button class="fixed right-6 top-6 z-navBarToggle" on:click={()=> isNavShowing = !isNavShowing} >
    {#if isNavShowing}
        <Close width={32} height={32} />
    {:else}
        <Hamburger width={32} height={32} />
    {/if}
</button>

<header class="absolute md:relative z-navBar md:col-span-3 bg-daisyBush text-center w-full h-screen -translate-x-full md:translate-x-0 transition-transform" class:translate-x-0={isNavShowing}>
    <div class="my-10">
        <a href="/invoices">
            <img src="/images/logo.svg" class="mx-auto" alt="DH" />
        </a>
    </div>
    <nav>
        <ul class="list-none text-2xl font-bold">
            <li><a class="mx-auto" class:active={$page.url.pathname === "/invoices"} href="/invoices">Invoices</a></li>
            <li><a class="mx-auto" class:active={$page.url.pathname === "/clients"} href="/clients">Clients</a></li>
            <li><a class="mx-auto" class:active={$page.url.pathname === "/#"} href="/#">Settings</a></li>
            <li><a class="mx-auto" class:active={$page.url.pathname === "/#"} href="/#">Logout</a></li>
        </ul>
    </nav>
</header>

<style lang="postcss">
    nav ul li {
        @apply mb-6;
    }

    nav ul li a{
        @apply font-bold text-white hover:text-goldenFizz;
    }

    nav ul li a.active{
        @apply text-robinEggBlue px-8 transition-[padding];
        background: url('/images/active-nav--left.svg') left top no-repeat,url('/images/active-nav--right.svg') right top no-repeat;
    }

    nav ul li a.active:hover{
        @apply px-9
    }
</style>
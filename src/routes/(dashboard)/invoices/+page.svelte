<script lang="ts">
    import { onMount } from 'svelte';
    import Search from '$lib/components/Search.svelte';
    import CircledAmount from '$lib/components/CircledAmount.svelte';
    import InvoiceRow from "./InvoiceRow.svelte";
    import { loadInvoices,invoices } from '$lib/stores/InvoiceStore';
    import {sumInvoices,centsToDollars } from "$lib/utils/moneyHelpers";
    import BlankState from './BlankState.svelte';
    import InvoiceRowHeader from './InvoiceRowHeader.svelte';
    import Modal from '$lib/components/Modal.svelte';
    
    onMount(()=>{
        loadInvoices();
    });
</script>

<svelte:head>
    <title>
        Invoices
    </title>
</svelte:head>

<div class="flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center lg:mb-16 gap-y-6 md:gap-y-4 mb-7">
    {#if $invoices.length > 0}
        <Search />
    {:else}
        <div />
    {/if}
    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 lg:px-10 py-2 lg:py-3 font-sansSerif text-base lg:text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all">+ Invoices</button>
    </div>
</div>

<div class="w-full">
    {#if $invoices === null}
        Loading...
    {:else if $invoices.length <=0}
        <BlankState />
    {:else}
        <InvoiceRowHeader className="text-daisyBush" />
        <div class="flex flex-col-reverse">
            {#each $invoices as invoice}
                <InvoiceRow {invoice} />
            {/each}
        </div>
        <CircledAmount label="amount" amount={`$${centsToDollars(sumInvoices($invoices))}`} />
    {/if}
</div>


<Modal />
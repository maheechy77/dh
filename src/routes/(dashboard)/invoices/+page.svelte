<script lang="ts">
    import { onMount } from 'svelte';
    import Search from '$lib/components/Search.svelte';
    import CircledAmount from '$lib/components/CircledAmount.svelte';
    import InvoiceRow from "./InvoiceRow.svelte";
    import { loadInvoices,invoices } from '$lib/stores/InvoiceStore';

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
    <Search />
    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 lg:px-10 py-2 lg:py-3 font-sansSerif text-base lg:text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all">+ Invoices</button>
    </div>
</div>

<div class="w-full">
    <div class="hidden lg:grid table_header text-daisyBush invoice_table">
        <h3>Status</h3>
        <h3>Due Date</h3>
        <h3>ID</h3>
        <h3>Client</h3>
        <h3>Amount</h3>
        <div />
    </div>

    {#each $invoices as invoice}
        <InvoiceRow />
    {/each}
</div>

<CircledAmount label="amount" amount="$1,499.00" />

<style lang="postcss">
    .table_header h3{
        @apply text-xl font-black leading-snug;
    }

   
</style>
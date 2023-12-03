<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import Tag from '$lib/components/Tag.svelte';
</script>

<svelte:head>
    <title>
        Invoices
    </title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
    <Search />
    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all">+ Invoices</button>
    </div>

    <div>
        <div class="table_header text-daisyBush invoice_table">
            <h3>Status</h3>
            <h3>Due Date</h3>
            <h3>ID</h3>
            <h3>Client</h3>
            <h3>Amount</h3>
            <div />
        </div>

        <div class="invoice_table items-center bg-white py-6 rounded-lg shadow-tableRow">
            <div><Tag label="draft" /></div>
            <div>8/2/2023</div>
            <div>12345</div>
            <div>Compressed</div>
            <div>$504.00</div>
            <div>View</div>
            <div>More</div>
        </div>
    </div>

    <div>
        Total: $1,044.00
    </div>
</div>

<style lang="postcss">
    .table_header h3{
        @apply text-xl font-black leading-snug;
    }

</style>
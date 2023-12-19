<script>
    import InvoiceRowHeader from './InvoiceRowHeader.svelte';
    import BlankRow from '$lib/components/BlankRow.svelte';

</script>

<div>
    <div class="-mt-8 md:-mt-6 lg:-mt-14">
        <h2 class="pt-14 pl-28 pr-0 md:pl-0 md:pr-28 text-left md:text-right mb-10 bg-left bg-arrowLeftUp md:bg-arrowRightUp md:bg-right bg-no-repeat font-handwriting text-2xl md:text-4xl font-bold text-caribbeanGreen">Add Your First Invoice.</h2>
    </div>
    <InvoiceRowHeader className="text-fog" />
    <BlankRow />
    <BlankRow />
    <BlankRow />
</div>
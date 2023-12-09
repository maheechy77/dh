<script>
    import View from '$lib/components/icons/View.svelte';
    import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
    import Tag from '$lib/components/Tag.svelte';
</script>

<div class="invoice_table invoice_row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow">
    <div class="status"><Tag className="ml-auto lg:ml-0" label="draft" /></div>
    <div class="text-sm lg:text-lg dueDate">8/2/2023</div>
    <div class="text-sm lg:text-lg invoiceNumber">12345</div>
    <div class="text-base lg:text-xl font-bold clientName">Compressed</div>
    <div class="text-sm lg:text-lg font-bold font-mono amount text-right">$504.00</div>
    <div class="text-sm lg:text-lg center viewButton hidden lg:block"><a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a></div>
    <div class="text-sm lg:text-lg center moreButton hidden lg:block"><button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button></div>
</div>

<style lang="postcss">
    .invoice_row{
        grid-template-areas: 'invoiceNumber invoiceNumber'
        'clientName amount'
        'dueDate status';
    }

    @media(min-width:1024px){
        .invoice_row{
            grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
        }
    }

    .invoice_row .status{
        grid-area: status;
    }

    .invoice_row .dueDate{
        grid-area: dueDate;
    }

    .invoice_row .status{
        grid-area: status;
    }

    .invoice_row .invoiceNumber{
        grid-area: invoiceNumber;
    }

    .invoice_row .clientName{
        grid-area: clientName;
    }

    .invoice_row .amount{
        grid-area: amount;
    }

    .invoice_row .viewButton{
        grid-area: viewButton;
    }

    .invoice_row .moreButton{
        grid-area: moreButton;
    }

</style>
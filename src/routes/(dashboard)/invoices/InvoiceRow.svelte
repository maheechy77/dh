<script lang="ts">
    import View from '$lib/components/icons/View.svelte';
    import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
    import Tag from '$lib/components/Tag.svelte';
    import AdditionalOptions from "$lib/components/AdditionalOptions.svelte";
    import { sumLineItems,centsToDollars } from '$lib/utils/moneyHelpers';
    import { convertDate,isLate }from '$lib/utils/dateHelpers';
    import Send from '$lib/components/icons/Send.svelte';
    import Edit from '$lib/components/icons/Edit.svelte';
    import Trash from '$lib/components/icons/Trash.svelte';

    export let invoice:Invoice;
    let isOptionsDisabled = false;
    let isAddMenuShowing:boolean = false;

    const handleDelete = () =>{
        console.log("delete");
    }

    const handleEdit = () =>{
        console.log("edit");
    }

    const handleSendInvoice = () =>{
        console.log("sending");
    }

    const getInvoiceLabel = () => {
        if(invoice.invoiceStatus === "draft"){
            return "draft";
        }else if(invoice.invoiceStatus === "sent" && !isLate(invoice.dueDate)){
            isOptionsDisabled = true;
            return "sent";
        }else if(invoice.invoiceStatus === "sent" && isLate(invoice.dueDate)){
            isOptionsDisabled = true;
            return "late";
        }else if(invoice.invoiceStatus === "paid"){
            isOptionsDisabled = true;
            return "paid";
        }
    }
</script>

<div class="invoice_table invoice_row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow">
    <div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceLabel()} /></div>
    <div class="text-sm lg:text-lg dueDate">{convertDate(invoice.dueDate)}</div>
    <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
    <div class="text-base lg:text-xl font-bold clientName whitespace-nowrap truncate">{invoice.client.name}</div>
    <div class="text-sm lg:text-lg font-bold font-mono amount text-right">${centsToDollars(sumLineItems(invoice.lineItems))}</div>
    <div class="text-sm lg:text-lg center viewButton hidden lg:flex"><a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a></div>
    <div class="text-sm lg:text-lg center moreButton hidden lg:flex relative"><button on:click={()=> isAddMenuShowing = !isAddMenuShowing} class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>{#if isAddMenuShowing}<AdditionalOptions options={[
        {label:"Edit",icon:Edit,onClick:handleEdit,disabled:isOptionsDisabled},
        {label:"Send",icon:Send,onClick:handleSendInvoice,disabled:isOptionsDisabled},
        {label:"Delete",icon:Trash,onClick:handleDelete,disabled:false}
    ]} />{/if}</div>
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
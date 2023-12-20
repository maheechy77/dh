<script>
    import Portal from "$lib/components/Portal.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import Cancel from "$lib/components/icons/Cancel.svelte";
</script>

<Portal>
    <Overlay />
    <div class="fixed inset-0 z-modal center">
        <div class="relative max-w-[450px] min-h-[230px] w-full rounded-lg bg-white px-10 py-7">
            <button class="right-4 left-4 absolute text-pastelPurple hover:text-daisyBush"><Cancel /></button>
            <slot></slot>
        </div>
    </div>
</Portal>
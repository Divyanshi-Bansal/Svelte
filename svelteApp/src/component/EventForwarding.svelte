<script>
     export let isDisplay = false;
</script>

<main>

    {#if isDisplay}
        <div class="modal" on:click|self>
            <div class="alert">
                <h1>Practice-8</h1>
                <h2>Event Forwarding</h2>
                <h3>Description</h3>
                <h3>Click anywhere to come out.</h3>
            </div>
        </div>
        <slot></slot>
    {/if}
</main>

<style>
    .modal{
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        padding:20px;
    }
    .alert{
        background-color: white;
        color: grey;
        height: 200px;
        padding: 19px;
        margin: 30px;
        width: 400px;
    }
</style>


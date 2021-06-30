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
                <slot></slot>
                <slot name='another-slot'></slot>
            </div>
        </div>
        
    {/if}
</main>

<style>
    .modal{
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.5);
        /* position: fixed; */
        padding: 20px;
    }
    .alert{
        background-color: white;
        color: grey;
        /* height: 200px; */
        padding: 19px;
        margin: 10% auto;
        width: 400px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
</style>


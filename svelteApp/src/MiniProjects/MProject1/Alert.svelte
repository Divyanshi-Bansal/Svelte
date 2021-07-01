<script>
    export let isDisplay = true;
    export let alertMessage = 'Kindly Register Yourself First :)';
    const toggleDisplay = () =>{
        isDisplay = !isDisplay;
    }
</script>

<main>
    {#if isDisplay}
    <div class="alert">
        <h3>{alertMessage}</h3>
        <button on:click={toggleDisplay}>Okay!!</button>
    </div>
    {/if}
</main>

<style>
    .alert{
        border-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    h3{
        color: black;
        margin: 10%;
    }
    button{
        padding: 10px;
        margin: 20px;
        color:grey;
        background-color: black;
    }
</style>
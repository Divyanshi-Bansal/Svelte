<script>
    import Form from './Form.svelte';
    import { Router, Link, Route , navigate} from "svelte-routing";
    export let isDisplay = false;
    export let alertMessage = 'Kindly Register Yourself First :)';
    let isShowForm = false;
    const toggleDisplay = () =>{
        isDisplay = !isDisplay;
        navigate("/Form", { replace: true });
        // isShowForm = true;
    }
</script>
<!-- <Form isShowForm={isShowForm}/> -->
<main>
    {#if isDisplay}
    <div class="main">
    <div class="alert">
        <slot></slot>
        <h3>{alertMessage}</h3>
        <button on:click={toggleDisplay}>Go tO siGn uP !!</button>
    </div>
</div>
    {/if}
</main>

<style>
    
    .alert{
        
        background: rgba(0, 0, 0,.8);
        /* padding: 20px; */
        /* margin: 10% auto; */
        height:500px;
        width: 600px;
        position: fixed;
        margin: 10% auto;
        margin-top: 0;
        margin-left: 500px;
        margin-top: 5px;
        /* position: absolute; */
    }
    h3{
        color: white;
        margin: 10% auto;
    }
    button{
        padding: 10px;
        margin: 20px auto;
        color:white;
        background-color: grey;
        width: 200px auto;
        cursor: pointer;
    }
</style>
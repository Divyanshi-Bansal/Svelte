<script>
    let isDisplay=true;
    const handleSubmit = () => {

    }
</script>

<main>
    <h1>Practice-9</h1>
    {#if isDisplay}
        <form on:submit|preventDefault={handleSubmit}>
            <h2>LogIn</h2>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Username:)</label>
            <input type="text" placeholder="enter name"/>
            <label for="">Choose Course</label>
            <input type="checkbox"/> Btech <br>
            <input type="checkbox"/> Bba <br>
            <input type="checkbox"/> Mba<br>
            <input type="checkbox"/> Mtech <br>
            <label for="">Choose Section</label>
            <input type="checkbox"/> A <br>
            <input type="checkbox"/> B <br>
            <input type="checkbox"/> C <br>
            <input type="checkbox"/> D <br>
            <button>Submit</button>
        </form>
    {/if}
</main>

<style>
    h1{
        color: rgba(0, 128, 0,0.8);
        background-color: rgba(95, 158, 160, 0.5);
        width:220px;
        padding: 10px;
        border-radius: 9px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 2% auto;
    }

    form{
        border: 1px solid blue;
        width: 500px;
        margin: 4% auto;
        padding: 10px;
        background-color: rgba(186, 198, 201, 0.5);
    }

    label{
        font-weight: bold;
        font-style: italic;
        margin: 10px;
    }
    input{
        padding: 10px;
    }

    button{
        background-color: cornflowerblue;
        color:white;
        border-radius: 9px;
        padding: 10px;
        margin: 10px;
    }

</style>
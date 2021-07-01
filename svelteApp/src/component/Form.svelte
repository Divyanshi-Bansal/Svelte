<script>
import { get_store_value } from "svelte/internal";


    let name;
    let isDisplay=true;
    let isShowData = false;
    // let Btech = false;
    // let Bba = false;
    // let Mtech = false;
    // let Mba = false;
    // let A = false;
    // let B = false;
    // let C = false;
    // let D = false;
    let StudentDetail = [];
    let College;

    const handleSubmit = () => {
        isDisplay = !isDisplay;
        isShowData = !isDisplay;
    }
</script>

<main>
    <h1>Practice-9</h1>
    {#if isDisplay}
        <form on:submit|preventDefault={handleSubmit}>
            <h2>LogIn</h2>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Username:)</label>
            <input type="text" placeholder="enter name" bind:value={name}/>
            <label for="">Choose Course</label>
            <!-- <input type="checkbox" bind:checked={Btech}/> Btech <br>
            <input type="checkbox" bind:checked={Bba}/> Bba <br>
            <input type="checkbox" bind:checked={Mba}/> Mba<br>
            <input type="checkbox" bind:checked={Mtech}/> Mtech <br> -->
            <input type="checkbox" bind:group={StudentDetail} value="Btech"/> Btech <br>
            <input type="checkbox" bind:group={StudentDetail} value="Bba"/> Bba <br>
            <input type="checkbox" bind:group={StudentDetail} value="Mba"/> Mba<br>
            <input type="checkbox" bind:group={StudentDetail} value="Mtech"/> Mtech <br>
            <label for="">Choose Section</label>
            <!-- <input type="checkbox" bind:checked={A}/> A <br>
            <input type="checkbox" bind:checked={B}/> B <br>
            <input type="checkbox" bind:checked={C}/> C <br>
            <input type="checkbox" bind:checked={D}/> D <br> -->
            <input type="checkbox" bind:group={StudentDetail} value="A"/> A <br>
            <input type="checkbox" bind:group={StudentDetail} value="B"/> B <br>
            <input type="checkbox" bind:group={StudentDetail} value="C"/> C <br>
            <input type="checkbox" bind:group={StudentDetail} value="D"/> D <br>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Choose College</label>
            <select bind:value={College}>
                <option value="GLA">GLA</option>
                <option value="GL Bajaj">GL Bajaj</option>
                <option value="IPU">IPU</option>
                <option value="LPU">LPU</option>
            </select>
            <button>Submit</button>
        </form>
    {/if}
    {#if isShowData}
    <alert>Submitted Successfully!!</alert>
        <div class="data">
            <h2>{name}</h2>
            <!-- <h3>{Btech}</h3>
            <h3>{Bba}</h3>
            <h3>{Mba}</h3>
            <h3>{Mtech}</h3> -->
            {#each StudentDetail as cs}
                <h3>{cs}</h3>
            {/each}
            <h3>{College}</h3>
        </div>
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
        cursor: pointer;
    }

    .data{
        border: 1px solid blue;
        width: 500px;
        margin: 4% auto;
        padding: 10px;
        background-color: rgba(186, 198, 201, 0.5);
    }

</style>
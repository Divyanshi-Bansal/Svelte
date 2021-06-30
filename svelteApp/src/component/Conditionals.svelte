<script>
import EventForwarding from "./EventForwarding.svelte";

    let array = [
        {name:"Divyanshi", age:20 , color:["black", 'red' , 'wheat']},
        {name:"janny", age:17 , color:["black" , 'blue']},
        {name:"mosh", age:15 , color:["black" , 'wheat']},
        {name:"anuj", age:16 , color:["black" , 'wheat']},
        {name:"sneha", age:17 , color:["black" , 'wheat']},
        {name:"simmi", age:18 , color:["black" , 'wheat']},
        {name:"john", age:19 , color:["black" , 'wheat']},
        {name:"lary", age:10 , color:["black" , 'wheat']},
        {name:"harry", age:9 , color:["black" , 'wheat']},
        {name:"anne", age:5 , color:["black" , 'wheat']}
    ]

    let limit=0;
    let showModal = false;
	const toggleClick = () =>{
		showModal = !showModal;
	};

</script>
<button on:click|once={toggleClick}>Click</button>
<EventForwarding isDisplay={showModal} on:click={toggleClick}>
<main>
    
    <h1>Practice-6</h1>
    <h2>conditionls</h2>
    <h3>if-else</h3>
    <input type="text" bind:value={limit}>
    <div class="details">
        {#each array as a}
            {#if a.age > limit}
                <div class="info">
                    <h4>{a.name}</h4>
                    <h5>{a.age}</h5>
                </div>
                <!-- {:else if a.age < limit}
                    <div>
                        <h4>{a.name}</h4>
                        <h5>{a.age}</h5>
                        <hr>
                    </div>
                {:else}
                    <p>Nothing to show...</p>
                    <h5>student of {a.age} is not present.</h5> -->
            {/if}
        {/each}
    </div>
</main>
</EventForwarding>

<style>
    h1{
        color: green;
    }
    h2 , h3{
        color: indianred;
        font-family: cursive;
    }
    input{
        text-align: center;
    }
    .details{
        display: flex;
        flex-direction: row;
        margin:30px;
    }
    .info{
        color: lightblue;
        border-radius: 12px;
        border: 1px solid rgb(7, 118, 133);
        box-shadow: 3px 2px 1px 2px lightblue;
        width: 300px;
        margin: 30px;
    }
</style>
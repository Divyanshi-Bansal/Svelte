<script>
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

</script>

<main>
    <h1>Practice-6</h1>
    <h2>conditionls</h2>
    <h3>if-else</h3>
    <input type="text" bind:value={limit}>

    {#each array as a}
        {#if a.age > limit}
            <div>
                <h4>{a.name}</h4>
                <h5>{a.age}</h5>
            </div>
            {:else if a.age < limit}
                <div>
                    <h4>{a.name}</h4>
                    <h5>{a.age}</h5>
                </div>
            {:else}
                <p>Nothing to show...</p>
                <h5>student of {a.age} is not present.</h5>
        {/if}
    {/each}
</main>

<atyle></atyle>
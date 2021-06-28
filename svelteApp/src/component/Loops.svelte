<script>
    // array list
    let array = [
        {name:"Divyanshi", age:20 , color:["black", 'red' , 'wheat']},
        {name:"Priyanshi", age:17 , color:["black" , 'blue']},
        {name:"Hariom", age:15 , color:["black" , 'wheat']}
    ]
    let length = array.length;
</script>

<main>
    <h1>Practice-4</h1>
    <h2>Loops: for-each loop, if-else inside for-each</h2>
    {#each array as siblings}
        <div id="siblings-info">
            <h4 id="name">{siblings.name}</h4>
            <h5 id='age'>{siblings.age}</h5>
            {#each siblings.color as colors}
                <h5 id="color" style="color: {colors};">{colors}</h5>
            {/each}
        </div>
    {/each}
</main>

<style>
    h1{
        color:green;
    }
    h2{
        color: blueviolet;
        font-family: 'Courier New', Courier, monospace;
    }
    #siblings-info{
        border: 1px solid grey;
        border-radius: 10px;
        box-shadow: 2px 1px 2px 1px solid black;
        font-family: cursive;
        width: 300px;
        margin-block: 30px;
        margin-left: 600px;
    }
    h5{
        color:brown;
    }
h4{
    color: crimson;
}
    #color{
        display: inline-block;
        padding: 10px;
    }
</style>


<script>
    let firstname='Divyanshi';
    let lastname = 'Bansal';

    // reactive values format
    $: fullname = `${firstname} ${lastname}`;

    let statement1 , statement2 , statement3 , statement4 ,statements ,lastStatement = '';
    //reactive statements
    $: {
        statements = `${statement1} ${statement2}`;
        console.log(statement3);
        lastStatement  =`${statement4}`;
    }
    
</script>

<main>
    <h1>Practice-3</h1>
    <h3 class="prac-ex">Reactive Values: Automatically updates values when either of the values inside reactive values are changed.</h3>
    <h2>{firstname +" "+ lastname}</h2>
    <h3>by reactive value: {fullname}</h3>
    <input type="text" bind:value={firstname} >
    <input type="text" bind:value={lastname}>
    <h3 class="prac-ex">Reactive Statements: similar like reactive values but here is sentence.<br> we can use reactive values inside reactive statement.</h3>
    <input type="text" bind:value={statement1}>
    <input type="text" bind:value={statement2}>
    <input type="text" bind:value={statement3}>
    <input type="text" bind:value={statement4}>
    <p>reactive statement: {statements}</p>
    <p>reactive statement: {lastStatement}</p>
</main>

<style>
    .prac-ex{
        color: rgb(69, 96, 105);
    }

    h1{
        color: green;
    }
    input{
        display: inline-block;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

p{
    color:blueviolet;
}
</style>


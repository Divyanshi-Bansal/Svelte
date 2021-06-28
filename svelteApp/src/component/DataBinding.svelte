<script>
    let color = 'black';

    function updateColor(){
        color = 'red';
    }

    function handleInput(e){
        color = e.target.value;
    }
</script>

<main>
    <h1>Practice-2</h1>
    <h2>Data Binding</h2>
    <h3 id="color-name" style="color: {color};">{color} color name</h3>
    <button on:click={updateColor}>Click to update</button>
    <!-- <input type="text" on:input={handleInput} value={color}>  two-way binding -->
    <!-- bind attribute works instead of both on:input event handler and the value attribute -->
    <input type="text" bind:value={color}>

</main>

<style>
    
</style>
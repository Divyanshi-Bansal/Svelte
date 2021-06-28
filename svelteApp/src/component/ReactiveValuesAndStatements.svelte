<script>
    let firstname='Divyanshi';
    let lastname = 'Bansal';

    // reactive values format
    $: fullname = `${firstname} ${lastname}`;
    
</script>

<main>
    <h1>Practice-3</h1>
    <h2>Reactive Values: Automatically updates values when either of the values inside reactive values are changed.</h2>
    <h3>{firstname +" "+ lastname}</h3>
    <h3>by reactive value: {fullname}</h3>
    <input type="text" bind:value={firstname} >
    <input type="text" bind:value={lastname}>
</main>

<style>
    body{
        display: block;
    }

</style>
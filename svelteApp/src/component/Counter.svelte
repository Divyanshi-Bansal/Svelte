<script>
    let count=0;
    function increase(){
        count=count+1;
    }
    function decrease(){
        count = count-1;
    }
</script>

<main>
    <h1 class="prac-no">Practice-1</h1>
    <h2 id="prac-name">Counter</h2>
    <h3>Counter value: {count}</h3>
    <button on:click={increase}>CLick to increase</button>
    <button on:click={decrease}>Click to decrease</button>
</main>

<style>
    main{
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    button{
        cursor: pointer;
    }
</style>
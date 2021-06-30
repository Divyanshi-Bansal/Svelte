<script>
    const handleSubmit = () => {

    }
</script>

<main>
    <h1>Practice-9</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <h2>LogIn</h2>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Username:)</label>
        <input type="text" placeholder="enter name"/>
        <label for="">Choose Course</label>
        <input type="checkbox"/>Btech <br>
        <input type="checkbox"/>Bba <br>
        <input type="checkbox"/>Mba<br>
        <input type="checkbox"/>Mtech <br>
        <label for="">Choose Section</label>
        <input type="checkbox"/>A <br>
        <input type="checkbox"/>B <br>
        <input type="checkbox"/>C <br>
        <input type="checkbox"/>D <br>
        <button>Submit</button>
    </form>
</main>

<style>

</style>
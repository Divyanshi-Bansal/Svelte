<script>
    let name;
    let age;
    let address;
    const handleSubmit = (e) =>{
        console.log(e)
    }
</script>

<main>
    <form class="container" on:submit|preventDefault={handleSubmit}>
        <div class="header">
            <img src='' alt="logo">
        </div>
        <h2>Create your account</h2>
        <input type="text" placeholder="enter your name" bind:value={name}>
        <input type="number" placeholder="your age" bind:value={age}>
        <input type="text" placeholder="your address" bind:value={address}>
        <button>SignUp</button>
    </form>
</main>

<style>

</style>
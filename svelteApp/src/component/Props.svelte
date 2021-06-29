<script>
    export let message1 = "default message1";
    export let message2 = "default message2";
    export let isPromo = false;
</script>

<main>
    <h1>Practice-7</h1>
    <h2>Props</h2>
    <p class:promo={isPromo}>{message1}</p>
    <h4>{message2}</h4>
</main>

<style>
    h1{
        color: green;
    }
    h2{
        color: grey;
    }
    p{
        color: indianred;
    }
    h4{
        color: indigo;
    }
    .promo{
        background-color: khaki;
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        color: black;
    }
</style>
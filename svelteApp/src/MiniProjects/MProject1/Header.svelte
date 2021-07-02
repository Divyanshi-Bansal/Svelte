<script>
    let src='assests/morr-logo.jpg';
    const Login = (e) =>{
        e.preventDefault();
        navigate("/Form", { replace: true });
    }

</script>

<main>
    <div class="header">
        <img src={src} alt="logo" class="logo"/>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="">Customers</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="">Contact</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="" on:click={Login}>Log In</a>
    </div>
</main>

<style>
    .header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: auto;
        padding: 15px;
        padding-bottom: 15px;
        background-color: #e5a68b;
    }

    .logo{
        /* border: 1px solid black; */
        float: left;
        padding: 0;
        height: 90px;
    }
    
    a{
        float: right;
        padding: 10px;
        margin-right: 10px;
        color: white;
    }
</style>
<script>
    import Form from './Form.svelte';
    import { Router, Link, Route , navigate} from "svelte-routing";
    let src='assests/morr-logo.jpg';
    const Login = (e) =>{
        e.preventDefault();
        navigate("/Form", { replace: true });
    }

    const Customers = (e) =>{
        e.preventDefault();
        navigate('/UsersData' , {replace:true});
    }

</script>

<main>
    <div class="header">
        <img src={src} alt="logo" class="logo"/>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="" on:click={Customers}>Customers</a>
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
        /* padding: 15px; */
        /* padding-bottom: 15px; */
        background-color: #e5a68b;
    }

    .logo{
        /* border: 1px solid black; */
        float: left;
        padding: 0;
        height: 110px;
    }
    
    a{
        float: right;
        padding: 30px;
        margin-right: 17px;
        color: white;
    }
</style>
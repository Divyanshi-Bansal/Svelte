<script>

    import { Router, Link, Route } from "svelte-routing";
    
    import Alert from './Alert.svelte';
    import Form from './Form.svelte';
    let ReadMore = false;
    const isReadMore = () => {
        ReadMore = true;
    }
</script>

<Router></Router>

<main>
    
    <div class="container">
        <Alert alertMessage='Kindly Register Yourself First' isDisplay={ReadMore}>
            <h3 style="color: white;">Welcome to Morr :))</h3>
            <h4 style="color: white;">For further Detais, <br> you can register yourself</h4>
            <h4 style="color: white;">It's Safe and Secure!!</h4>
        </Alert>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel impedit autem? Eum, culpa similique! Excepturi mollitia iste hic ut doloremque. Voluptates, quae! Omnis odio cum quam iusto, reiciendis distinctio!</p>
        
        <button on:click={isReadMore}>Read More</button>
    </div>
</main>

<style>
    .container{
        text-align: center;
        margin: 10% auto;
        justify-content: center;
        align-items: center;
    }
    button{
        cursor: pointer;
    }
</style>
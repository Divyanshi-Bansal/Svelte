<script>
    let name;
    let age;
    let mobile;
    let address;
    const handleSubmit = (e) =>{
        console.log(e)
    }

    let count =0;
    const checkDetails = () => {
        if (name === '' || age === '' || address === '' || mobile === '') {
            
        } else {
            
        }
    };
</script>

<main>
    <form class="container" on:submit|preventDefault={handleSubmit}>
        <div class="header">
            <img src='' alt="logo">
        </div>
        <h2>CREATE YOUR ACCOUNT</h2>
        <input type="text" placeholder="enter your name" bind:value={name}>
        <input type="number" placeholder="your age" bind:value={age}>
        <input type="number" placeholder="your mobile no." bind:value={mobile}>
        <input type="text" placeholder="your address" bind:value={address}>
        <button on:click={checkDetails}>SignUp</button>
    </form>
</main>

<style>
    .container{
        border: 1px solid blue;
        width: 550px;
        margin: 10% auto;
        /* padding: 20px; */
        background-color: rgb(255, 241, 235);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
    }
    .header{
        border: 2px solid rgb(255, 192, 202);
        padding: 10px;
        margin-bottom: 13px;
        width:530px ;
    }
    h2{
        color: rgb(255, 123, 145);
        margin: 20px;
    }

    input{
        border: none;
        padding: 5px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        border: none;
        outline: none;
        border-bottom-style: groove;
        background-color:rgb(255, 241, 235);
        color:grey;
        width: 300px;
        text-align: center;
        margin:15px;
    }

    input::selection{
        font-size: 20px;
        font-weight: lighter;
        font-style: oblique;
    }
    button{
        margin:15px;
        color: white;        
        background: rgba(0, 0, 0);
        cursor: pointer;
        border-radius: 10px;
        padding:10px;

    }

    button:hover{
        background-color: crimson;
        font-weight: bold;
        font-size: 20px;
    }
</style>
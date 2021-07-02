<script>
import Alert from './Alert.svelte';
import { createEventDispatcher} from 'svelte';
import { Link, navigate } from 'svelte-routing';
import UsersData from './UsersData.svelte';
import UserDataJS from '../stores/UsersData';

    let dispatch = createEventDispatcher();
    let name;
    let age;
    let mobile;
    let address;
    let message;
    let isDisplay = true;
    let isShowForm = true;
    let src='assests/morr-logo.jpg';
    const handleSubmit = (e) =>{
        const user = {
            name,
            age,
            mobile,
            address
        };
        dispatch('addUser' , user);
    }

    let count =0;
    const handleSignup = () => {
        navigate("/UsersData", { replace: true });
    };
let list =[];

    const addUser = (e) => {
        // console.log(e.details);
        const user1 = e.detail;
        list = [user1 , ...list]
    };
</script>


<main>
    {#if isShowForm}
    <!-- <div class="left-img"><img src={src} alt="logo"></div> -->
        <form class="container" on:submit|preventDefault={handleSubmit}>
            <div class="header">
                <img src={src} alt="logo">
            </div>
            
            <h2>CREATE YOUR ACCOUNT</h2>
            <input type="text" placeholder="enter your name" bind:value={name}>
            <input type="number" placeholder="your age" bind:value={age}>
            <input type="number" placeholder="your mobile no." bind:value={mobile}>
            <input type="text" placeholder="your address" bind:value={address}>
            <button on:click={handleSignup}>SignUp</button>
        </form>
    {/if}
    
</main>
<!-- <UsersData list={addUser}/> -->

<style>
    main{
        display:flex;
        flex-direction: row;
        align-items: center;
        background: linear-gradient(180deg, #e5a68b,  #f5efef);
        margin: 0;
        padding: 0;
        top: -10px;
        left:0;
        position: fixed;
        width: 100%;
        height:100%;
    }
    /* .left-img{
        margin: 30px;
        border: 1px solid black;
    } */
    .container{
        /* border: 1px solid blue; */
        width: 550px;
        margin: 10% auto;
        /* padding: 20px; */
        background-color: rgb(255, 241, 235);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        box-shadow: 2px 3px 2px 3px #f5efef;
        border-radius: 13px;
    }
    .header{
        /* border: 2px solid rgb(255, 192, 202); */
        /* padding: 10px; */
        margin-bottom: 13px;
        width:550px ;
        border-radius: 13px;
        background-color: #e5a68b;
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
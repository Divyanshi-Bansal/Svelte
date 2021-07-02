<script>
import Header from "./Header.svelte";

    export const addUser = (e) => {
        console.log("welcome");
    }
    let list=[
        {name:"Divyanshi Bansal" , age:20 , mobile:8989898989 , address:"Aligarh,up"},
    ];

    
</script>
<!-- svelte-ignore missing-declaration -->

<main>
    <Header/>
    {#each list as user1}
        <div class="box">
            <h2>{user1.name}</h2>
            <h3>{user1.age}</h3>
            <h2>{user1.mobile}</h2>
            <h3>{user1.address}</h3>
        </div>
    {/each}
</main>

<style>
    .box{
        border: 1px solid burlywood;
        border-radius: 15px;
        padding: 10px;
        width:300px;
        justify-content: center;
        background-color:rgb(255, 241, 235);
    }
</style>
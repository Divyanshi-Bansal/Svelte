<script>
    export const addUser = (e) => {
        console.log("welcome");
    }
    let users=[
        {name:"Divyanshi Bansal" , age:20 , mobile:8989087723 , address:"Aligarh,up"},
    ];
</script>
<!-- svelte-ignore missing-declaration -->

<main>
    {#each users as user1}
        <div class="box">
            <h2>{user1.name}</h2>
            <h3>{user1.age}</h3>
            <h2>{user1.mobile}</h2>
            <h3>{user1.address}</h3>
        </div>
    {/each}
</main>

<style>

</style>
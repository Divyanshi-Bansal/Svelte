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

    <table>
        <thead><h2>OuR HaPpy CUstomErs!</h2></thead>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>Residence</th>
                <th>FeedBack</th>
            </tr>

            {#each list as user1}
                    <td>{user1.name}</td>
                    <td>{user1.age}</td>
                    <td>{user1.mobile}</td>
                    <td>{user1.address}</td>
                    <td>Coming...</td>
            {/each}



        </tbody>
    </table>
</main>

<style>
    main{
        /* border: 1px solid black; */
        margin-top: 7%;
    }
    table{
    border-collapse: collapse;
    align-items: center;
    margin: 10px auto;
    justify-content: space-evenly;
}

thead{
    color: #e5a68b;
    font-size: 26px;
   
    margin: 5% auto;
}
thead h2{
    text-align: center;
    align-items: center;
    margin: 5% auto;
}
td,th{
    border-bottom: 1px solid grey;
    font-size: 23px;
    padding: 20px;
}
th{
    background-color: #e5a68b;
    color: white;
}
</style>
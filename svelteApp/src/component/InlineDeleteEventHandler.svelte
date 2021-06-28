<script>
    let details = [
        {name:"Divyanshi" , id:1},
        {name:"Priyanshi" , id:2},
        {name:"Hariom" , id:3},
        {name:"Deepanshu" , id:4},
        {name:"Shalini" , id:5},
        {name:"Anshika" , id:6},
        {name:"Rahul" , id:7},
        {name:"Anjali" , id:8},
    ]

    function DeleteById(id){
        // we delete that particular record from original details so we used filter
        details = details.filter((a) => id != a.id)
    }

</script>

 <main>
    <h1>Practice-5</h1>
    <h2>we will going to delete the particular record<br>by inline event handler. </h2>
    <!-- for-each loop -->

    {#each details as student}
        <div class="student-info">
            <h4>{student.name}</h4>
            <button on:click={() => DeleteById(student.id)}>Delete</button>
            <hr>
            <!-- we can't pass DeleteById(id) directly in onclick just because it will be invoked directly when it prints, then delete suddenly, so  -->
            <!-- to get rid from this automation, we use inline event handler through this we can pass arguments. -->
        </div>
    {/each}
 </main>

 <style>
     
     h4{
         padding: 10px;
     }
     button{
         height: 40px;
         text-align: center;
     }
 </style>
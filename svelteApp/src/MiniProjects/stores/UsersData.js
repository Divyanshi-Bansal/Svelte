import {writable} from 'svelte';

const addUser = writable( [
        {name:"Divyanshi Bansal" , age:20 , mobile:8989898989 , address:"Aligarh,up"}
]);

export default addUser;
<script>

    import { Router, Link, Route , navigate} from "svelte-routing";
    
    import Alert from './Alert.svelte';
    import Form from './Form.svelte';
    let ReadMore = false;
    const isReadMore = () => {
        ReadMore = true;
    }

    const Login = (e) =>{
        e.preventDefault();
        navigate("/Form", { replace: true });
    }

    let src = 'assests/morr-logo.jpg';
</script>

<!-- <Router>
    <div>
        <Link to="/Form"></Link>
        <Link to='/Alert'></Link>
    </div>
</Router> -->

<main>
    
    <div class="container">
        <Alert alertMessage='Kindly Register Yourself First' isDisplay={ReadMore}>
            <h3 style="color: white;">Welcome to Morr :))</h3>
            <h4 style="color: white;">For further Detais, <br> you can register yourself</h4>
            <h4 style="color: white;">It's Safe and Secure!!</h4>
        </Alert>
        
        <div class="second">
            <div class="header">
                <img src={src} alt="logo" class="logo"/>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="">Customers</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="">Contact</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="" on:click={Login}>Log In</a>
            </div>
            <div class="sec-img"><img src="https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2.png" loading="lazy" height="500px" sizes="(max-width: 479px) 77vw, (max-width: 767px) 57vw, (max-width: 991px) 32vw, 100vw" srcset="https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2-p-500.png 500w, https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2-p-800.png 800w, https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2-p-1600.png 1600w, https://uploads-ssl.webflow.com/5f57c471e9fc90819485fda5/600f9e8844a08a7009c7584c_Landing%20Page%20Stock%20Photos-2.png 1920w" alt="" class="image"></div>
            <div class="content">
                <h1>Grow Your business today by <br>launching your own loyalty program</h1>
                <button on:click|preventDefault={isReadMore}>Want to know more...<br>Click For More</button>
            </div>  
        </div>
        
        
        
    </div>
</main>

<style>
    main{
        background-color: #f5f1ea;
    }
    .container{
        text-align: center;
        margin: 10% auto;
        justify-content: center;
        align-items: center;
        background-color: #f5f1ea;
    }
    button{
        cursor: pointer;
        background-color: #e5a68b;
        color:white;
        border-radius: 53px;        
        padding: 20px;
        font-size: 20px;
    }
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
    .image{
        float: right;
        /* margin-right: 100px; */
    }
    a{
        float: right;
        padding: 10px;
        margin-right: 10px;
        color: white;
    }
    .second{
        left: 0;
        margin-top: 0px;
        right: 0;
        bottom: auto;
        padding: 20px;
        padding-bottom: 20px;
    background-color: #f5f1ea;
   
    
    }
    .content{
        align-items: center;
        margin:150px;
        margin-top: 180px;
        /* border: 1px solid black; */
        width:600px;
        
    }
    h1 , h3{
        font-family: 'Open Sans',sans-serif;
    font-size: 40px;
    line-height: 45px;

    }
</style>
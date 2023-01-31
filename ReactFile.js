const onSubmit = data => {

    const url='https://mechanicalparts.onrender.com/reviews';
    fetch(url,{
    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(data)


    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            toast.success('Your Review is added')
        }
       
    })
}
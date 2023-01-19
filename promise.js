let posts =[{
    title: "post one",
    body: "this is post one",
    createdAt : new Date().getTime()
},{
    title: "post two",
    body: "this is post two",
    createdAt : new Date().getTime()
}]
let intervalId;
function getPost(){
    clearInterval(intervalId);
    intervalId =setInterval(()=>{
        let output = "";
        posts.forEach((post)=>{
            output+= `<li>${post.title} - last updated ${(new Date().getTime()-`${post.createdAt}`)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output;
    
    },1000)
    
}
/* function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt :new Date().getTime()})
        callback()
    },2000)
}
createPost({
    title: "post three",
    body: "this is post three"
},getPost) */


function createPost (post){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt :new Date().getTime()})
           const error=false;
           if(!error){
            resolve();
           }else{
            reject('Error:something went wrong')
           }
        },3000)
    })
   
} 

//deletepost fucntion
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if (posts.length>0) {
            posts.pop()
           }
            let error;
            if(posts.length == 0){
                error =true
            }else{
                error = false
            }
            if(!error){
                resolve()
            }else{
                reject('Error: Array is empty now.')
            }
        },1000)
    })
}
createPost({ title: "post three",
body: "this is post three"}).then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost.then(()=>{})
                .catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))

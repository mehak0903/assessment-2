const xhr=new XMLHttpRequest()
let url="https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
xhr.open('GET',url)
xhr.onreadystatechange=()=>{
    if(xhr.status===200 && xhr.readyState===4){
        const response=JSON.parse(xhr.responseText)
        let output=''
        for(let i=0;i<response.length;i++){
            output+=`
            <div style="width:22%;margin:0.5em;border:2px solid gray;text-align:center;">
            <h4>${response[i].title}</h4>
            
            <h3>${response[i].body}</h3>
            </div>
            `
        }
        document.querySelector('#blogs').innerHTML=output
    }
}
xhr.send()



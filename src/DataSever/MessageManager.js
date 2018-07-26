import{
    AddCommentURL,
}from './URLConfig';
class MessageManager{
async AddComment(image,OrderMainID,ProductID,CustomerID,CommentContent){
    try {
        const token=localStorage.token;
        const formData=new FormData();
        formData.append("image",image);
        formData.append("OrderMainID",OrderMainID);
        formData.append("ProductID",ProductID);
        formData.append("CustomerID",CustomerID);
        formData.append("CommentContent",CommentContent);
        const res=await fetch(AddCommentURL,{
            method:'POST',
            body:formData,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                 uid=localStorage.uid,
                 token=localStorage.token
            },
        });
        const result=await res.json();
        console.log(result);
        return result;
    } catch (error) {
        return{
            success:false,
            errorMessage:'网络错误'
        }
    }
}
}

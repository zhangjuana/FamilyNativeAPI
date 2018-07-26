import {AddOrderMainURL,SearchOrderURL,UpdateOrderMainURL} from './URLConfig';
class OrderMainManager{
    async AddOrderMain(AddressID,ProdectsInForm){
        try {
            const orderInForm={
                AddressID,
                ProdectsInForm
            }
            const res=await fetch(AddOrderMainURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body:JSON.stringify(orderInForm)
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                success:'false',
                errorMessage:'网络错误'
            }
        }
    }
    //查询该用户订单信息
    async SearchOrder(){
        try {
            const res=await fetch(SearchOrderURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body:JSON.stringify()
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                success:'false',
                errorMessage:'网络错误'
            }
        }
    }
    async UpdateOrder(OrderID,IsOK){
        try {
            const CollectProduct={
                OrderID,
                IsOK
            }
            const res=await fetch(UpdateOrderMainURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body:JSON.stringify(CollectProduct)
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                success:'false',
                errorMessage:'网络错误'
            }
        }
    }

}
export default new OrderMainManager();
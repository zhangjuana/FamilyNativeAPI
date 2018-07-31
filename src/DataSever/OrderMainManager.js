import {AddOrderMainURL,
    SearchOrderURL
    ,UpdateOrderMainURL
    ,GetNoPayOrderURL,
    GetNoSendURL,
    GetNoCollectURL,
    GetCollectOrderURL,
    GetAllOrderURL,
} from './URLConfig';
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
    //查询已下单未发货的订单
    async GetNoPayOrder(){
        try {
            const res=await fetch(GetNoPayOrderURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
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
    //查询已付款的订单
    async GetNoSend(){
        try {
            const res=await fetch(GetNoSendURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
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
    //查询已发货的订单
    async GetNoCollect(){
        try {
            const res=await fetch(GetNoCollectURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
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
    //查询已收货的订单
    async GetCollectOrder(){
        try {
            const res=await fetch(GetCollectOrderURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
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
    //查询所有的订单
    async GetAllOrder(){
        try {
            const res=await fetch(GetAllOrderURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
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
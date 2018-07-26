import{SearchByIDURL,SearchProductURL,SearchGoodsTypeURL} from './URLConfig';
class ProductManager{
    //根据商品id查询详细信息
    async SearchByID(id){
        try {
            const res=await fetch(SearchByIDURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                     uid=localStorage.uid,
                     token=localStorage.token
                },
                body:JSON.stringify(id)
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                state:'false',
                errorMessage:'网络错误'
            }
        }
    }
    //根据商品类别查询商品
    async SearchProduct(GoodsTypeID){
        try {
            const res=await fetch(SearchProductURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                     uid=localStorage.uid,
                     token=localStorage.token
                },
                body:JSON.stringify(GoodsTypeID)
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                state:'false',
                errorMessage:'网络错误'
            }
        }
    }
    //查询商品类别
    async SearchGoods(){
        try {
            const res=await fetch(SearchProductURL,{
                method:"post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                     uid=localStorage.uid,
                     token=localStorage.token
                },
                body:JSON.stringify()
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return{
                state:'false',
                errorMessage:'网络错误'
            }
        }
    }
}
export default new ProductManager();
import{
    AddTrollerURL,
    UpdateTrollerURL,
    DeleteTrollerURL,
    SearchTrollerURL,
}from './URLConfig';

class TrollerManager{
    async AddTroller(ProdictID,Number){
        try {
            const Troller={
                token:localStorage.token,
                uid:localStorage.uid,
                ProductID,
                Number
            }
            const res =await fetch(AddTrollerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body: JSON.stringify(Troller)
            });
            const result=await res.json();
            return result;
            
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async UpdateTroller(id,ProdictID,Number){
        try {
            const Troller={
                id:id,
                ProductID,
                Number,
            }
            const res =await fetch(UpdateTrollerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body: JSON.stringify(Troller)
            });
            const result=await res.json();
            if (result.success === true) {
                localStorage.access_token = result.data.access_token
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }

    }

    async DeleteTroller(id){
        try {
            const Troller={
                token:localStorage.token,
                id
            }
            const res =await fetch(DeleteTrollerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body: JSON.stringify(Troller)
            });
            const result=await res.json();
            if (result.success === true) {
                localStorage.access_token = result.data.access_token
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }

    async SearchTroller(Troller){
        try {
            const Troller={
                token:localStorage.token,
                Troller
            }
            const res =await fetch(SearchTrollerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body: JSON.stringify(Troller)
            });
            const result=await res.json();
            return result;
            
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }

    }
}
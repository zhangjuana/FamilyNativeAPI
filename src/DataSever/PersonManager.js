import{
    AddAddressURL,
    UpdateAddressURL,
    DeleteAddressURL,
    SearchAddressURL,
}from './URLConfig';

class AddressManager{
    async AddAddress(CustomerID,Addressee,Phone,SaveCode,CityCode,AreaCode,Addresss){
    try {
        const Address={
            token:localStorage.token,
            uid:localStorage.uid,
            CustomerID,
            Addressee,
            Phone,
            SaveCode,
            CityCode,
            AreaCode,
            Addresss
        }
        const res =await fetch(AddAddressURL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'uid':localStorage.uid,
                'token':localStorage.token
            },
            body: JSON.stringify(Address)
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

    async UpadteAddress(CustomerID,Addressee,Phone,SaveCode,CityCode,AreaCode,Addresss){
    try {
        const Address={
            CustomerID,
            Addressee,
            Phone,
            SaveCode,
            CityCode,
            AreaCode,
            Addresss
        }
        const res =await fetch(UpdateAddressURL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'uid':localStorage.uid,
                'token':localStorage.token
            },
            body: JSON.stringify(Address)
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

    async SearchAddress(Addresss){
        try {
            const Address={
              token:localStorage.token,
              Addresss
            }
            const res =await fetch(SearchAddressURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'uid':localStorage.uid,
                    'token':localStorage.token
                },
                body: JSON.stringify(Address)
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

    async DeleteAddress(id){
            try {
                const Address={
                    token:localStorage.token,
                    id
                }
                const res =await fetch(DeleteAddressURL,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'uid':localStorage.uid,
                        'token':localStorage.token
                    },
                    body: JSON.stringify(Address)
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
}
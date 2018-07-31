import {
    loginURL,
    registURL,
    UpdateCustomerURL,
    SearchCustomerURL,
    ChangePasswordURL
} from './URLConfig';

class UserManager {
    async login(Phone, pwd) {
        try {
            const Customer = {
                Phone,
                pwd
            }
            console.log(Customer);
            console.log(loginURL);
            const res = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Customer)
            })
            const result = await res.json();
            console.log(result);
            if (result.success === true) {
                localStorage.token = result.data.token;
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async register(Phone, pwd) {
        try {
            const Customer = {
                Phone,
                pwd
            }
            console.log(Customer);
            const res = await fetch(registURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Customer)
            });

            const result = await res.json();
            if (result.success === true) {
                localStorage.token = result.data.token;
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    logout() {
        localStorage.token = '';
    }
    isLogin() {
        if (localStorage.token === '' || !localStorage.token) {
            return false;
        } else {
            return true;
        }
    }
    async UpdateCustomer(nickname,files) {
        try {
            const formData = new FormData();
            if (nickname) {
                formData.append("NickName", nickname);
            }
            if (files) {
                formData.append("HeadImg", files.file);
            }
            const res = await fetch(UpdateCustomerURL, {
                method: 'PUT',
                body: formData,
                headers:{
                    'token':localStorage.token,
                    'uid':localStorage.uid
                }
            });
            // const result = res.json();
            console.log(res);
            return res;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async SearchCustomer() {
        try {
            const formData = new FormData();
            const token=localStorage.token;
            const uid= localStorage.uid;
            const user={
                uid,
                token
            }
            const res = await fetch(SearchCustomerURL, {
                method: 'POST',
                body: formData,
                headers:{
                    'token':localStorage.token,
                    'uid':localStorage.uid
                }
            });
            const result = res.json();
            console.log(result);
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }

    async ChangePassword(Pwd,newPwd){
        try {
            const formData = new FormData();
            if (Pwd) {
                formData.append("Pwd", newPwd);
            }
        
            const res = await fetch(ChangePasswordURL, {
                method: 'Put',
                body: formData,
                headers:{
                    'token':localStorage.token,
                    'uid':localStorage.uid
                }
            });
            const result = await res.json();
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
}
export default new UserManager()
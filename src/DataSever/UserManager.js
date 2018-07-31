import {
    loginURL,
    registURL,
    UpdateCustomerURL
} from './URLConfig';

class UserManager {
    async login(Phone, pwd) {
        try {
            const Customer = {
                Phone,
                pwd
            }
            const res = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Customer)
            })
            const result = await res.json();
            console.log(result)
            if (result.state === true) {
                localStorage.token = result.token;
                localStorage.uid = result.uid;
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
                formData.append("HeadImg", files[0]);
            }
            const res = await fetch(UpdateCustomerURL, {
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
}
export default new UserManager()
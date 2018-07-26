import {
    loginURL,
    registerURL,
    UpdateCustomerURL
} from './URLConfig';

class UserManager {
    async login(Phone, pwd) {
        try {
            const user = {
                Phone,
                pwd
            }
            const res = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
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
    async register(Phone, pwd) {
        try {
            const user = {
                Phone,
                pwd
            }
            console.log(user);
            const res = await fetch(registerURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
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
        localStorage.access_token = '';
    }
    isLogin() {
        if (localStorage.token === '' || !localStorage.token) {
            return false;
        } else {
            return true;
        }
    }
    async UpdateCustomer(userInfo) {
        try {
            const token = localStorage.token;
            const formData = new FormData();
            formData.append("accexx_token", access_token);
            if (userInfo.name) {
                formData.append("name", userInfo.name);
            }
            if (userInfo.headimg) {
                formData.append("headimg", userInfo.image.headimg);
            }
            const res = await fetch(UpdateCustomerURL, {
                method: 'POST',
                body: formData
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
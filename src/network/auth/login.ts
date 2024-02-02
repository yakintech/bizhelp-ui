import axios from "axios";


export const LoginServices = {
    login: async (email: string, password: string) => {
        try {
            let response = await axios.post('http://localhost:8080/api/login', { email, password });

            
            
            if (response.status == 200) {
                return response.data;
            }
            else{
                return null
            }

        } catch (error) {
            return null

        
        }
    }
}
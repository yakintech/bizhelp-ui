import SecureLS from "secure-ls";



const tokenService = {
    setToken: (token: string) => { 
        const ls = new SecureLS({ encodingType: 'aes' });
        ls.set('token', token);
    },
    getToken: () => {
        
        try {
            const ls = new SecureLS({ encodingType: 'aes' });
            return ls.get('token');
        }
        catch (e) {
            return null;
        }
       
    },
    removeToken: () => {
        const ls = new SecureLS({ encodingType: 'aes' });
        ls.remove('token');
    }
}

export default tokenService;
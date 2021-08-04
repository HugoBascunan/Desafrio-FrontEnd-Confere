//Pega a lista em string transforma em objeto
const parse = (str) => {
    return JSON.parse(str);
};

//Pega a lista em obj e transforma em string
const stringify = (obj) => {
    return JSON.stringify(obj, null, 0);
};

//Pra adicionar e usar o localStorage
export const StorageService = {
    //chamada para adicionar o produto no localStorage
    addToStorage(item, ref) {
        const str = stringify(item);
        localStorage.setItem(ref, str);
    },

    //chamada para utilizar o produto salvo no localStorage
    getFromStorage(ref) {
        const str = localStorage.getItem(ref);
        
        //garantir que é um objeto no uso
        if (!!str)
            return parse(str);
        
        return null;
    },
};

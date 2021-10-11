function useLocalStorage(itemName, initialValue){
    
    const getTasks = () => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem){
            //LocalStorage is empty
            localStorage.setItem(itemName, JSON.stringify(initialValue) );
            parsedItem = initialValue;
        }else {
            //LocalStorage has tasks
            parsedItem = JSON.parse(localStorageItem);
         }
        
        return parsedItem;
    }
    
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
    };

    return {
        saveItem,
        getTasks,
    }
}

export { useLocalStorage }
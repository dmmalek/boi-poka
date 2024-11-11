//Mark as Read Button

const getStoredData = () => {
    let strData = localStorage.getItem('read-list');
    if (strData) {
        const storedListData = JSON.parse(strData);
        return storedListData;
    }
    else {
        return [];
    }
}

const addToStoreData = (id) => {
    const storeList = getStoredData();
    if (storeList) {  //check data exist
        console.log(id, 'data exist');
    }
    else {
        storeList.push(id);
        const storedListData = JSON.stringify(storeList);
        localStorage.setItem('read-list', storedListData);
    }
}

export { addToStoreData };
// for wish list button

const getWishListData = () => {
    let wishData = localStorage.getItem('wish-list');
    if (wishData) {
        const storeWishList = JSON.parse(wishData);
        return storeWishList;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    let strWishList = getWishListData();
    if (strWishList) {
        console.log(id, 'data exist')
    }
    else {
        strWishList.push(id);
        const storedListData = JSON.stringify(strWishList);
        return storedListData;
    }
}
export { addToWishList };
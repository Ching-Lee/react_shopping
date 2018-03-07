//收藏功能的redux action
export function update(data) {
    return {
        type:'STORE_UPDATE',
        data
    }
}

export function add(item) {
    return{
        type:'STORE_ADD',
        data:item
    }
}

export function remove(item) {
    return{
        type:'STORE_REMOVE',
        data:item
    }
}
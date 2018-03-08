//收藏功能的redux action

//更新收藏列表
export function update(data) {
    return {
        type: 'STORE_UPDATE',
        data
    }
}

export function add(item) {
    console.log('触发了add');
    return {
        type: 'STORE_ADD',
        data: item
    }
}

export function remove(item) {
    return {
        type: 'STORE_REMOVE',
        data: item
    }
}

//在App.js中完成页初始化，从后台获取该用户的所有收藏商品id存储到redux中
export function getInitStore(username) {
    return function (dispatch) {
        console.log('getInitStore执行了');
        let option = {method: 'GET'};
        fetch(`/api/store/getStore/${username}`, option)
            .then(res => res.json())
            .then(json => dispatch(update(json)));
    };
}

//用户添加收藏时，先向后台发送请求
//item就是调用方法时传入的{id:''}
export function addStore(item) {
    return function (dispatch) {
        let option = {method: 'GET'};
        fetch(`/api/store/addStore/${JSON.stringify(item)}`, option)
            .then(res => res.json())
            .then(json => {
                    if (json)
                        dispatch(add(item));
                    else
                        alert('网络不畅');
                }
            );
    };

}

//用户删除收藏时，先向后台发送请求
export function removeStore(item) {
    return function (dispatch) {
        let option = {method: 'GET'};
        fetch(`/api/store/removeStore/${JSON.stringify(item)}`, option)
            .then(res => res.json())
            .then(json => {
                if (json)
                    dispatch(remove(item));
                else
                    alert('删除失败');
            });
    };

}
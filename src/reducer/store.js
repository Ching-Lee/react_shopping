
const initialState =[];
//收藏创建的规则
export default function store(state=initialState,action) {
    switch (action.type){
        //修改城市名字
        case 'STORE_UPDATE':
            return action.data;

        case 'STORE_ADD':
            state.unshift(action.data);
            return state;

        case 'STORE_REMOVE':
            return state.filter(item=>{
                if(item.id!==action.data.id)
                    return item;
            });

        default:
            return state;

    }
}
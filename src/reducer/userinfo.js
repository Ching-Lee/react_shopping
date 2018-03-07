const initialState ={};
//这是和用户信息相关的规则，这里定义了一个更新城市名字的规则
export default function userinfo(state=initialState,action) {
    switch (action.type){
        //修改城市名字
        case 'USERINFO_UPDATE':
            return action.data;

        default:
            return state;

    }
}
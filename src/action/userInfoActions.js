
//这是redux触发数据改变的行为，type类型要和reducer中定义的actiontype相同
//第四步：创建更新用户信息的Action
export function update(data) {
    return {
        type:'USERINFO_UPDATE',
        data
    }
}
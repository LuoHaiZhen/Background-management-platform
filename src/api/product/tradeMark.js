//主要获取品牌管理的相关数据
import request from "@/utils/request";

export const reqTradeMarkList = (page,limit) => request({ url:`/admin/product/baseTrademark/${page}/${limit}`, method:'get'});

export const reqAddOrUpdateTradeMark=(tradeMark)=>{
    if(tradeMark.id){
        //修改品牌
        return request({
            url:`/admin/product/baseTrademark/update`,
            method:'put',
            data:tradeMark
        })
    }else{
        //新增品牌
        return request({
            url:`/admin/product/baseTrademark/save`,
            method:'post',
            data:tradeMark
        })
    }
}
//删除品牌的接口
export const reqDeleteTradeMark = (id)=>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'});
import request from '@/utils/request';
//获取spu数据


export const reqSpuList = (page, limit, category3Id) => 
request({url:`/admin/product/${page}/${limit}`,method:'get',params:{category3Id}});

//获取spu信息
export const reqSpu=(spuId)=>request({url:`/admin/product/getSpuById/${spuId}`,method:'get'});

//获取品牌信息
export const reqTradeMarkList=()=>request({url:`/admin/product/baseTrademark/getTrademarkList`,method:'get'});

//获取品牌图片
export const reqSpuImageList=(spuId)=>request({url:`/admin/product/spuImageList/${spuId}`,method:'get'});

//获取销售属性
export const reqBaseSaleAttrList=()=>request({url:`/admin/product/baseSaleAttrList`,method:'get'});

//修改和添加SPU
export const reqAddOrUpdateSpu = (spuInfo) => {
    //携带的参数带有id----修改spu
    if (spuInfo.id) {
        return request({ url: '/admin/product/updateSpuInfo', method: 'post', data: spuInfo });
    } else {
        //携带的参数不带id---添加SPU
        return request({ url: '/admin/product/saveSpuInfo', method: 'post', data: spuInfo });
    }
}
//删除spu
export const reqDeleteSpu=(spuId)=>request({url:`/admin/product/deleteSpu/${spuId}`,method:'delete'})
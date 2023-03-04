//统一暴露

import * as attr from './product/attr';
import * as spu from './product/spu';
import * as sku from './product/sku';
import * as trademark from './product/tradeMark';
import * as user from './acl/user';
import  permission from './acl/permission';
import role from './acl/role';

//对外暴露
export default {
    trademark,
    spu,
    sku,
    attr,
    user,
    permission,
    role,
}
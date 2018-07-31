<<<<<<< HEAD
const host = 'http://localhost:';
const port = 46560;
=======
const host = 'http://192.168.1.31:';
const port = 60004;
>>>>>>> zhangyu
const registURL = host+port+'/api/user/regist';
const loginURL = host+port+'/api/user/login';
const UpdateCustomerURL = host+port+'/api/api/User/UpdateCustomer';
const AddAddressURL = host+port+'/api/api/Address/Add';
const UpdateAddressURL = host+port+'/api/Address/Update';
const DeleteAddressURL = host+port+'/api/Address/Delete';
const SearchAddressURL = host+port+'/api/Address/Search';
const AddOrderMainURL = host+port+'/api/OrderMain/Add';
const SearchOrderURL = host+port+'/api/Order/Search';
const UpdateOrderMainURL = host+port+'/api/OrderMain/Update';
const AddCommentURL = host+port+'/api/Comment/Add';
const SearchGoodsTypeURL = host+port+'/api/GoodsType/Search';
const SearchProductURL = host+port+'/api/Product/Search';
const SearchByIDURL = host+port+'/api/Product/SearchByID';
<<<<<<< HEAD
const BarSearchURL = host+port+'/api/Bar/Search';
const SpecialSearchURL = host+port+'/api/Special/Search';
const HotSaleSearchURL = host+port+'/api/HotSale/Search';

const AddTrollerURL = host+port+'/api/Trolley/Add';
const UpdateTroller = host+port+'/api/Trolley/Update';
const DeleteTroller = host+port+'/api/Trolley/Delete';
const SearchTroller = host+port+'/api/Trolley/Search';


=======
//查询已下单未发货的订单
const GetNoPayOrderURL = host+port+'/api/PersonInfo/GetNoPayOrder';
//查询已付款的订单
const GetNoSendURL = host+port+'/api/PersonInfo/GetNoSendOrder';
//查询已发货的订单
const GetNoCollectURL = host+port+'/api/PersonInfo/GetNoCollectOrder';
//查询已收货的订单
const GetCollectOrderURL = host+port+'/api/PersonInfo/GetCollectOrder';
//查询所有的订单
const GetAllOrderURL = host+port+'/api/PersonInfo/GetAllOrder';
>>>>>>> zhangyu

const imageBaseURL = host+port+'/resource/image/';

export {
    GetNoPayOrderURL,
    GetNoSendURL,
    GetNoCollectURL,
    GetCollectOrderURL,
    GetAllOrderURL,
    registURL,
    loginURL,
    UpdateCustomerURL,
    AddAddressURL,
    UpdateAddressURL,
    DeleteAddressURL,
    SearchAddressURL,
    AddOrderMainURL,
    SearchOrderURL,
    UpdateOrderMainURL,
    AddCommentURL,
    SearchGoodsTypeURL,
    SearchProductURL,
    SearchByIDURL,
    imageBaseURL,
    BarSearchURL,
    SpecialSearchURL,
    HotSaleSearchURL,
    AddTrollerURL,
    UpdateTroller,
    DeleteTroller,
    SearchTroller
}
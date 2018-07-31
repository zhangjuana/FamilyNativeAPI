const host = 'http://localhost:';
const port = 46560;
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
const BarSearchURL = host+port+'/api/Bar/Search';
const SpecialSearchURL = host+port+'/api/Special/Search';
const HotSaleSearchURL = host+port+'/api/HotSale/Search';

const AddTrollerURL = host+port+'/api/Trolley/Add';
const UpdateTroller = host+port+'/api/Trolley/Update';
const DeleteTroller = host+port+'/api/Trolley/Delete';
const SearchTroller = host+port+'/api/Trolley/Search';



const imageBaseURL = host+port+'/resource/image/';

export {
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
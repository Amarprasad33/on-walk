
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import CreateStore from './pages/merchant/CreateStore';
import MerchantLanding from './pages/merchant/MerchLanding';
import StoreManager from './pages/merchant/StoreManager';
import StoreView from './pages/user/StoreView';
import Directions from './pages/user/Directions';
import ItemDetail from './pages/merchant/ItemDetail';
import Confirmation from './pages/merchant/Confirmation';
import ItemManager from './pages/merchant/ItemManager';
import ProductView from './pages/user/ProductView';
import MerchSignIn from './pages/MerchSignIn';
import NearbyStores from './components/NearbyStores';
import AboutShop from './components/AboutShop';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/nearby-store' element={<NearbyStores />} />
          <Route path='/about' element={<AboutShop />} />
          <Route path='/merch/signin' element={<MerchSignIn />} />
          <Route path='/merch/signup' element={<CreateStore />} />
          <Route path='/merch' element={<MerchantLanding />} />
          <Route path='/merch/confirm' element={<Confirmation />} />
          <Route path='/merch/manage/' element={<StoreManager />} />
          <Route path='/merch/manage/items' element={<ItemManager />} />
          <Route path='/merch/additem' element={<ItemDetail />} />
          <Route path='/user/store/view' element={<StoreView />} />
          <Route path='/user/directions' element={<Directions />} />
          <Route path='/user/detailproduct/:id' element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// https://ugly-malawi-prot-surveillance.trycloudflare.com
export default App

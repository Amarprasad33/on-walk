
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/BuyersLandingPage/Home';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import CreateStore from './pages/merchant/CreateStore';
import MerchantLanding from './pages/merchant/MerchLanding';
import StoreManager from './pages/merchant/StoreManager';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/merch/create' element={<CreateStore />} />
          <Route path='/merch' element={<MerchantLanding />} />
          <Route path='/merch/manage/store' element={<StoreManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

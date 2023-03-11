import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderComplete } from './pages/OrderComplete'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route> 
        <Route path="/ordercomplete" element={<OrderComplete />}></Route> 
      </Route>
    </Routes>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import CartPage from '../pages/CartPage'
import WishlistPage from '../pages/WishlistPage'
import { useAuthStore } from '../store'
import ProtectedRouter from './ProtectedRouter'

export default function RouterApp() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />

                    <Route path='cart' element={
                        <ProtectedRouter to={"/login"} isAuthenticated={isAuthenticated}>
                            <CartPage />
                        </ProtectedRouter>
                    } />
                    <Route path='wishlist' element={
                        <ProtectedRouter to={"/login"} isAuthenticated={isAuthenticated}>
                            <WishlistPage />
                        </ProtectedRouter>
                    } />
                    {/* <Route path='wishlist' element={
                        isAuthenticated ? <WishlistPage /> : <Navigate to={"/login"} />
                    } /> */}
                    <Route path='login' element={
                        <ProtectedRouter to={"/"} isAuthenticated={isAuthenticated}>
                            <LoginPage />
                        </ProtectedRouter>
                    } />
                    {/* <Route path="login" element={
                        isAuthenticated ? <Navigate to={"/"} /> : <LoginPage />
                    } /> */}
                    <Route path='register' element={
                        <ProtectedRouter to={"/"} isAuthenticated={isAuthenticated}>
                            <RegisterPage />
                        </ProtectedRouter>
                    } />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
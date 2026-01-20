import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function RouterApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
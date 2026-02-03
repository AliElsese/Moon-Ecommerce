import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/RouterApp";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-center" />
                <RouterApp />
            </BrowserRouter>
        </>
    )
}

import React from "react"
import AppHeader from "../AppHeader"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

interface AuthLayoutProps {
    children: React.ReactNode
}

export default class AuthLayout extends React.Component<AuthLayoutProps, {}> {
    render() {
        const { children } = this.props
        return (
            <div className="bg-gray-50 relative">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <AppHeader />
                {children}
            </div>
        );
    }
}
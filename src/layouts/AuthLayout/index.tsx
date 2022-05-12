import React from "react"
import AppHeader from "../AppHeader"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default class AuthLayout extends React.Component<AuthLayoutProps, {}> {
    render() {
        const { children } = this.props
        return (
            <div className="bg-gray-50">
                <AppHeader />
                {children}
            </div>
        );
    }
}
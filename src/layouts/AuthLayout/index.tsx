import React from "react"
import { UserProperty } from "../../types/user"
import AppHeader from "../AppHeader"

interface AuthLayoutProps {
    children: React.ReactNode
    user?: UserProperty,
}

export default class AuthLayout extends React.Component<AuthLayoutProps, {}> {
    render() {
        const { children, user } = this.props
        return (
            <div className="bg-gray-50">
                <AppHeader user={user} />
                {children}
            </div>
        );
    }
}
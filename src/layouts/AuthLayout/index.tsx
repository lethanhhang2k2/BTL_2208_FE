import React from "react"
import { Interface } from "readline"
import { AvatarSize, UserProperty } from "../../types/user"
import AppHeader from "../AppHeader"

interface AuthLayoutProps {
    children: React.ReactNode
    displayAvt?: boolean
    showName?: boolean
    twoLine?: boolean
    contentWidth?: string,
    user?: UserProperty,
    sizeAvt?: AvatarSize

}

export default class AuthLayout extends React.Component<AuthLayoutProps, {}> {
    render() {
        const { children, displayAvt, showName, twoLine, contentWidth = "4/5", user, sizeAvt } = this.props
        return (
            <div>
                <AppHeader
                    displayAvt={displayAvt}
                    user={user}
                    sizeAvt={sizeAvt}
                    showName={showName}
                    twoLine={twoLine}
                    contentWidth={contentWidth}
                />
                {children}
            </div>
        );
    }
}
import AppHeader from "../AppHeader"

export default function AuthLayout({ children, displayAvt, user, sizeAvt, showName, twoLine, contentWidth }) {
    return (
        <>
            <AppHeader
                displayAvt={displayAvt}
                user={user}
                sizeAvt={sizeAvt}
                showName={showName}
                twoLine={twoLine}
                contentWidth={contentWidth}
            />
            { children }
        </>
    )
}
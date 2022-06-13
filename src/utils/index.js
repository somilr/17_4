export const isLogin = () => {
    if (sessionStorage.getItem("users")) {
        return true
    } else {
        return false
    }
}
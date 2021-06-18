export const copyToClipboard = (str, successCallback, errorCallback, noPermissionsCallback) => {
    const updateClipboard = copyString => {
        navigator.clipboard.writeText(copyString).then(
            successCallback,
            errorCallback
        )
    }
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state === "granted" || result.state === "prompt") {
            updateClipboard(str)
        }else{
            noPermissionsCallback()
        }
    })
}

export const handleMail = (alert) => {
    const noPermissionsCallback = () => {
        alert.info("Clipboard permissions are denied for this page. Feel free to copy this email 'krishchilvery@gmail.com'", { timeout: 10000 })
    }
    const errorCallback = () => {
        alert.error("There seems to be some error copying to clipboard. Feel free to copy this email 'krishchilvery@gmail.com'", { timeout: 10000})
    }
    const successCallback = () => {
        alert.success("Email 'krishchilvery@gmail.com' has been copied to clipboard")
    }
    copyToClipboard("krish.chilvery@gmail.com", successCallback, errorCallback, noPermissionsCallback)
}
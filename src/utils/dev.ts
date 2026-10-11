const msApi = 'https://parall-para-api.ms.fun/api/v1'
const renderApi = 'https://api.parap.dpdns.org/api/v1'
// 判断是否为开发环境
export const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
// 获取主机名
export const getHostName = async (spaceName: string): Promise<string> => {
    if (window.wvPort) {
        const port = await window.wvPort()
        console.log(port)
        return port
    }
    if (isDev) {
        return '/api/v1'
    } else {
        if (spaceName === 'render') {
            return renderApi
        } else if (spaceName === 'vercel') {
            return 'https://vercel.pzx.cc.cd/api/v1'
        } else if (spaceName === 'ms') {
            return msApi
        } else if (spaceName === 'hf') {
            return 'https://p4zx-api.hf.space/api/v1'
        } else if (spaceName === 'railway') {
            return 'https://kratosrender-production.up.railway.app/api/v1'
        } else {
            return renderApi
        }

    }
}

// 下载文件
export const downloadFile = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
}

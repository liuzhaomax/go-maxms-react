import env from "../env/env.json"

if (typeof process === "undefined") {
    window.process = {
        env: {
            NODE_ENV: "production"
        },
    }
}

const config = {
    domain: env.prod.fe.domain,
    beBaseUrl: process.env.NODE_ENV === "production" ?
        `${env.prod.be.protocol}://${env.prod.be.domain}` :
        `${env.dev.be.protocol}://${env.dev.be.host}:${env.dev.be.port}`
}
export default config
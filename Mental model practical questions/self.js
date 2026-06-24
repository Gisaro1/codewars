let richard = {status:'waguan fr'}
let agent = new Proxy(richard, {})
console.log(agent.status)
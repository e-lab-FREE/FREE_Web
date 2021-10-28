
const server = {
  "hostname": "http://127.0.0.1",
  "port": "8000",
  "api": "/api/v1/"
}

const DJANGO_BASE_URL = `${server.hostname}:${server.port}`
const DJANGO_BASE_API = `${DJANGO_BASE_URL}${server.api}`

const CONFIG_URL = `${DJANGO_BASE_API}configexecution`
const RUN_URL = `${DJANGO_BASE_API}runexecution/` 
const STATUS_URL = `${DJANGO_BASE_API}statusexecution/`

export {
   DJANGO_BASE_URL, 
   DJANGO_BASE_API,
   CONFIG_URL,
   RUN_URL,
   STATUS_URL
}
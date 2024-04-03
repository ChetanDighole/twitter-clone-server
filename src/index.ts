import { initiServer } from "./app";

async function init(){
    const app = await initiServer()
    app.listen(8000, () => console.log('server running at port 8000'))
}

init();

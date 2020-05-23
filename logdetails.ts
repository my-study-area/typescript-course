// type alias
type Uid = string | number | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`);
}


type PLataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: PLataform) {
    return platform;
}

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Adriano");
logInfo("123", "Adriano");

renderPlatform('Windows');
renderPlatform('Linux');
renderPlatform('ios');

// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
};

const account: AccountInfo = {
    id: 123,
    name: "Adriano"
};

type CharInfo = {
    nickname: string;
    level: number
};

const char: CharInfo = {
    nickname: "adrianoavelino",
    level: 100
};

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "Adriano",
    nickname: "adriano",
    level: 100
};

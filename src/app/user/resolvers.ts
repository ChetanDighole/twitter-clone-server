const quries = {
    verifyGoogleToken: async(parent: any, {token}: {token:string}) => {
        return token
    }
}

export const resolvers = { quries }
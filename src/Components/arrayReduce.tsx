export const arrayReduce = (array: any) => array.reduce((obj: any, user: any) => ({
        ...obj,
        [user.id]: user
    }
), {})

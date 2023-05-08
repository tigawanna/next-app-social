import PocketBase from 'pocketbase'


export const pb_url = process.env.NEXT_PUBLIC_PB_URL
export const pb_api_url = pb_url + `/api`

export const pb = new PocketBase(pb_url)



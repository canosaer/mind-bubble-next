export const auth = {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
    }
}

export const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
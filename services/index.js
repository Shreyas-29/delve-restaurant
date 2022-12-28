import { gql, request } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getDishes = async() => {
    const query = gql `
        query Dishes {
            dishesConnection {
                edges {
                    cursor
                    node {
                        featuredImage {
                            url
                        }
                        id
                        info
                        slug
                        title
                        price
                        review
                        discount
                    }
                }
            }
        }
    `
    const result = await request(graphAPI, query);
    return result.dishesConnection.edges;
}

export const getDishDetails = async(slug) => {
    const query = gql `
        query GetDishDetails($slug : String!) {
            dish(where: {slug: $slug}){
                featuredImage {
                    url
                }
                id
                description
                slug
                title
                price
                review
                category {
                    slug
                    title
                }
            }
        }
    `
    const result = await request(graphAPI, query, { slug });
    return result.dish;
}

// Menu
export const getMenu = async() => {
    const query = gql `
        query Menus {
            menusConnection {
                edges {
                    cursor
                    node {
                        featuredImage {
                            url
                        }
                        id
                        info
                        slug
                        title
                        price
                        review
                        discount
                        category{
                            title 
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphAPI, query);
    return result.menusConnection.edges;
}

export const getMenuDetails = async(slug) => {
    const query = gql `
        query GetMenuDetails($slug : String!) {
            menu(where: {slug: $slug}){
                featuredImage {
                    url
                }
                id
                description
                slug
                title
                price
                review
                category {
                    slug
                    title
                }
            }
        }
    `
    const result = await request(graphAPI, query, { slug });
    return result.menu;
}

// Categories
export const getCategories = async() => {
    const query = gql `
        query GetCategories{
            categories{
                title 
                slug 
            }
        }
    `
    const result = await request(graphAPI, query);
    return result.categories;
}
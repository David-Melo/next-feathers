import gql from 'graphql-tag';

export default gql`
    query ($domain: String!) {
        app: GetAppByDomain(domain: $domain) {
            id
            name
            description
            tagline
            logo_image
            splashview {
                id
                slug
                type
                collection_id
                page_id
                page {
                    id
                    slug
                    title
                    content
                    image
                    splash_logo
                }
                collection {
                    id
                    slug
                    pages {
                        id
                        slug
                        title
                        content
                        image
                        splash_logo
                    }
                }
            }
            homeview {
                id
                slug
                type
                collection_id
                page_id
                page {
                    id
                    slug
                    data
                }
            }
        }
    }
`;

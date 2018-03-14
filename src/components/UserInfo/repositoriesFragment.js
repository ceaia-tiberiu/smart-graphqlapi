import gql from 'graphql-tag';

const REPOSITORY_FRAGMENT = gql`
    fragment repository on Repository {
        id
        name
        url
        descriptionHTML
        primaryLanguage {
            name
        }
        owner {
            login
            url
        }
    }
`;

export default REPOSITORY_FRAGMENT;

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';
import Repositories from '../Repositories';
import REPOSITORY_FRAGMENT from './repositoriesFragment';

/**
 * UserInformation component - Dumb component
 * @param {object} param0 - get's the data from the graphqlapi,
 * loading - boolean - if it's true, the call is in progress
 * error - error message of the call
 * user - object with all the informations
 */
const UserInfo = ({ data: { loading, error, user } }) => {
    if (error) {
        return <div>{error.toString()}</div>;
    }
    if (loading && !user) {
        return <Loading isCenter={true} />;
    }

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h5>Company: {user.company}</h5>
            <div>Location: {user.location}</div>
            {user.repositories && (
                <Repositories repositories={user.repositories} />
            )}
        </div>
    );
};

/**
 * graphql query for the user and all the info's
 */
const USER_INFORMATION = gql`
    query($username: String!) {
        user(login: $username) {
            id
            name
            company
            location
            avatarUrl(size: 10)
            bio
            email
            repositories(first: 20, isFork: false) {
                edges {
                    node {
                        ...repository
                    }
                }
            }
        }
    }
    ${REPOSITORY_FRAGMENT}
`;
/**
 * variables of the query and other configurations
 */
const USER_INFORMATION_CONFIG = {
    options: ({ user }) => ({
        variables: {
            username: user,
        },
        skip: user === '',
        notifyOnNetworkStatusChange: true,
    }),
};

export default graphql(USER_INFORMATION, USER_INFORMATION_CONFIG)(UserInfo);

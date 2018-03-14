import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';
import Repositories from '../Repositories';
import REPOSITORY_FRAGMENT from './repositoriesFragment';

const UserInfo = ({ data: { loading, error, user } }) => {
    if (error) {
        return <div>{error.toString()}</div>;
    }
    if (loading && !user) {
        return <Loading isCenter={true} />;
    }
    if (user) {
        console.log(user);
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

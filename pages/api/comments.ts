import { gql, GraphQLClient } from 'graphql-request';
import { NextApiHandler } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
const graphCMSToken = process.env.GRAPHCMS_TOKEN || '';

const comments: NextApiHandler = async (req, res) => {
  console.log(graphCMSToken);
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: { authorization: `Bearer ${graphCMSToken}` },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export default comments;

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q0lg952p0l01xkdcvz2mgg/master',
  cache: new InMemoryCache()
})
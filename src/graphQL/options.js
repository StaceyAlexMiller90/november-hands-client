import { gql } from '@apollo/client';

export const GET_ALL_OPTIONS = gql`
query {
  options {
     product {
       name
 }
     colour {
       name
     }
     price,
     collectionid {
       name
     }
   mainimage {
     alternativeText,
     url,
   }
   additionalimages {
     url,
     alternativeText
   }
  }
}`
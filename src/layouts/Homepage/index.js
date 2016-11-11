import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"

const Homepage = (props, { collection, metadata: { settings } }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, Number(settings.post_count))

  return (
    <Page { ...props }>
      <h2>{ "Latest Posts" }</h2>
      <PagesList pages={ latestPosts } />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
}

export default Homepage

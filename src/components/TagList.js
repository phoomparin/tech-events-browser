import React from 'react'
import styled from 'react-emotion'

import Tags from '../components/Tags'

const concat = (x, y) => [...x, ...y]
const unique = vec => [...new Set(vec)]

const TagFilter = key => events =>
  unique(events.map(event => event[key]).reduce(concat, []))

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const topicTags = TagFilter('topics')
const categoryTags = TagFilter('categories')

const TagList = ({data}) => (
  <TagsContainer>
    <Tags data={topicTags(data)} color="#8e44ad" />
    <Tags data={categoryTags(data)} color="#3498db" />
  </TagsContainer>
)

export default TagList

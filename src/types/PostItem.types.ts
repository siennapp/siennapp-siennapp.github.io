

export type PostFrontmatterType = {
    title: string
    startDate: string
    endDate: string
    skills: string[]
    thumbnail: {
      publicURL: string
    }

    link: string
  }

  export type PostListItemType = {
    node: {
      id: string
      fields: {
        slug: string
      }
      frontmatter: PostFrontmatterType
    }
  }
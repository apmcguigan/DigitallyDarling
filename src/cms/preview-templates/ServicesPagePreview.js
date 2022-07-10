import React from 'react'
import ServicesPageTemplate from '../../templates/ServicesPageTemplate'

const ServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ServicesPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        image={getAsset(data.image)}
        posts={[]}
        about={data.about || {}}
        about_image={getAsset(data.about.image.image)}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ServicesPagePreview
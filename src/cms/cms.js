import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('projects-index', ProjectsPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
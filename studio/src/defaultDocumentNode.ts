import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

interface MySanityDocument extends SanityDocument {
  slug?: {
    current?: string;
  };
}


function getPreviewUrl(doc: MySanityDocument) {
  return doc?.slug?.current
    ? `https://point-arena-light-house.netlify.app/${doc.slug.current}?preview=true`
    : `${window.location.host}`
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

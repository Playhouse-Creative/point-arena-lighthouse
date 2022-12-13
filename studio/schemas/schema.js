// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import author from "./documents/author";
import category from "./documents/category";
import page from "./documents/page";
import post from "./documents/post";
import blogPreviewSection from './sections/blogPreviewSection';
import ctaRowSection from './sections/ctaRowSection';
import heroSection from './sections/heroSection';
import infoRowsSection from './sections/infoRowsSection';
import smallInfoRowsSection from './sections/smallInfoRowsSection';
import cta from './components/cta';
import ctaPlug from './components/ctaPlug';
import heroImage from './components/heroImage';
import simpleBlockContent from './components/simpleBlockContent';
import textWithIllustration from './components/textWithIllustration';
import mainImage from './components/mainImage';
import excerptPortableText from './components/excerptPortableText';
import authorReference from './components/authorReference';
import categoryReference from './components/categoryReference';
import bodyPortableText from './components/bodyPortableText';
import link from './components/link'
import route from './components/route';
import navMenu from './components/navMenu';
import menuLink from './components/menuLink';
import funFactsSection from './sections/funFactsSection';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'point-arena-lighthouse-schema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    author,
    category,
    page,
    post,
    blogPreviewSection,
    ctaRowSection,
    heroSection,
    infoRowsSection,
    smallInfoRowsSection,
    authorReference,
    categoryReference,
    bodyPortableText,
    cta,
    ctaPlug,
    excerptPortableText,
    heroImage,
    link,
    mainImage,
    menuLink,
    navMenu,
    route,
    simpleBlockContent,
    textWithIllustration,
    funFactsSection
  ]),
})

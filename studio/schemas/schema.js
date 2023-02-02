import author from "./documents/author";
import category from "./documents/category";
import categoryReference from './components/categoryReference';
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
import bodyPortableText from './components/bodyPortableText';
import link from './components/link'
import route from './components/route';

import menuLink from './components/menuLink';
import funFactsSection from './sections/funFactsSection';
import lodgingHeroSection from './sections/lodgingHeroSection';
import datePickerSection from './sections/datePickerSection';
import iconListItem from './components/iconListItem';
import roomCard from './components/roomCard';
import roomCardSection from './sections/roomCardsSection';
import gridListItem from './components/gridListItem';
import listSection from './sections/listSection';
import reviewListItem from './components/reviewListItem';
import infoListItem from './components/infoListItem';
import tableSection from './sections/tableSection';
import tableColumn from './components/tableColumn';
import articleSection from './sections/articleSection';
import bannerSection from './sections/bannerSection';
import colorlist from './components/colorlist';
import portraitImage from './components/portraitImage';
import portraitSection from './sections/portraitSection';
// Then we give our schema to the builder and provide the result to Sanity
export default  [
    tableColumn,
    articleSection,
    tableSection,
    infoListItem,
    gridListItem,
    reviewListItem,
    listSection,
    author,
    category,
    categoryReference,
    page,
    post,
    blogPreviewSection,
    ctaRowSection,
    heroSection,
    infoRowsSection,
    smallInfoRowsSection,
    authorReference,
    bodyPortableText,
    cta,
    ctaPlug,
    excerptPortableText,
    heroImage,
    link,
    mainImage,
    menuLink,
    route,
    simpleBlockContent,
    textWithIllustration,
    funFactsSection,
    lodgingHeroSection,
    datePickerSection,
    roomCardSection,
    iconListItem,
    roomCard, 
    colorlist,
    portraitImage,
    portraitSection,
    bannerSection
  ]
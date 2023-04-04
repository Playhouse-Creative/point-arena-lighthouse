import { sanityClient } from '../lib/sanity-server';
import { groq } from 'next-sanity';
import Link from 'next/link';

const query = groq`
  {
    "pageSections": *[_type == "page" && slug == "home"] {
      title,
      "content": content[] {
        ...,
        ctaRowSection->{
        title,
        rows[]{
          title,
          cta->{
            title,
            route,
            anchorLink[]->{ title, 'linkId': linkId->{current}},
            link
          }
        }
      }
      }
    }
  }
`;


export default function Home({ pageData, result }) {
  const sections = pageData.pageSections[0].content;
  

  return (
    <div>
      {console.log('result:', result, 'sections:', sections)}
      {sections.map((section, index) => {
        if (section._type === 'ctaRowSection') {
          return (
            <div key={index}>
              <h2>{section.title}</h2>
              {section.rows.map((row, index) => (
                <div key={index}>
                  <h3>{row.title}</h3>
                  <p>{row.cta.title}</p>
                  {row.cta.anchorLink && (<>
                    {/* <Link href={`/page/${row.cta.anchorLink.linkId.slug.current}`}>
                      <a>Link to {row.cta.anchorLink.linkId.current}</a>
                    </Link> */}</>
                  )}
                </div>
              ))}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export async function getStaticProps() {
  const pageData = await sanityClient.fetch(query);
  const result = await sanityClient.fetch(`*[_id == $id][0] {
    ...,
    referencedDocument-> {
     ...,
    }
  }`, { id: 'affdfe35-aecf-41ee-b79c-abfc2fe2d6ca' });


  return {
    props: {
      pageData,
      result
    },
  };
}
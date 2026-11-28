import { ABOUT_DESCRIPTION } from './about.ts';
import type { BlogPost } from './blog-frontmatter.ts';
import { caseStudies, caseStudyPath } from './case-studies.ts';
import {
  ABOUT_PATH,
  absoluteSiteUrl,
  BLOG_INDEX_DESCRIPTION,
  CONTACT_EMAIL,
  HOME_DESCRIPTION,
  HERO_SUMMARY,
  HERO_TITLE,
} from './site.ts';

export function renderLlms(posts: BlogPost[]): string {
  const blogLinks = posts.map(
    (post) => `- [${post.title}](${absoluteSiteUrl(`/blog/${post.slug}/`)}): ${post.excerpt}`,
  );
  const workLinks = caseStudies.map(
    (study) => `- [${study.title}](${absoluteSiteUrl(caseStudyPath(study.id))}): ${study.description}`,
  );

  return [
    '# Revv Studio',
    '',
    `> ${HOME_DESCRIPTION}`,
    '',
    `${HERO_TITLE}. ${HERO_SUMMARY}`,
    '',
    `Contact: ${CONTACT_EMAIL}`,
    '',
    '## About',
    '',
    `- [About Scott McBride](${absoluteSiteUrl(ABOUT_PATH)}): ${ABOUT_DESCRIPTION}`,
    '',
    '## Services',
    '',
    '- Digital experience and workflow optimization, for teams focused on clarity, efficiency, and better experiences. Includes workflow mapping, UX and service design, process design, and tool alignment.',
    '- Agentic AI and intelligent systems, for teams ready to work alongside AI agents. Includes opportunity assessment, agent workflow design, human-agent interfaces, and trust.',
    '- User experience (UX) and agentic experience (AX) together: interfaces for people, and systems where agents can act within clear boundaries.',
    '',
    '## Blog',
    '',
    `- [Blog](${absoluteSiteUrl('/blog/')}): ${BLOG_INDEX_DESCRIPTION}`,
    ...blogLinks,
    '',
    '## Case studies',
    '',
    ...workLinks,
    '',
  ].join('\n');
}

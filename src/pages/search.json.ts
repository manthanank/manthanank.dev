import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const posts = await getCollection('blog');
  const projects = await getCollection('projects');
  
  const postResults = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    url: `/blog/${post.id}`,
    type: 'blog',
    category: 'Blog',
    tags: post.data.tags || []
  }));

  const projectResults = projects.map(project => ({
    title: project.data.title,
    description: project.data.description,
    url: `/projects/${project.id}`,
    type: 'project',
    category: 'Projects',
    tags: project.data.tags || []
  }));

  return new Response(
    JSON.stringify([...postResults, ...projectResults]),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

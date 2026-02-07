import { getCollection } from 'astro:content';

export async function GET() {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects');

  const searchIndex = [
    ...blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags || [],
      url: `/blog/${post.id}`,
      type: 'blog',
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      tags: project.data.tags || [],
      url: `/projects/${project.id}`,
      type: 'project',
    })),
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}

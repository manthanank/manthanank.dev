import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  
  const mainPages = [
    { id: 'home', title: 'Manthan Ankolekar', description: 'Full Stack Developer Portfolio • Building exceptional digital experiences.' },
    { id: 'about', title: 'About Me', description: 'Learn more about my journey, skills, and the technologies I use to build the web.' },
    { id: 'projects', title: 'My Projects', description: 'A showcase of my recent work, open-source contributions, and technical experiments.' },
    { id: 'blog', title: 'Technical Blog', description: 'Thoughts, tutorials, and deep dives into Angular, Node.js, and modern web development.' },
    { id: 'contact', title: 'Get In Touch', description: 'Have a project in mind? Let\'s collaborate and build something remarkable together.' },
  ];

  return [
    ...mainPages.map((page) => ({
      params: { id: page.id },
      props: { title: page.title, description: page.description },
    })),
    ...blogPosts.map((post) => ({
      params: { id: post.id },
      props: { title: post.data.title, description: post.data.description },
    })),
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as { title: string; description: string };
  const projectRoot = process.cwd();
  
  try {
    // Read font
    const fontPath = path.join(projectRoot, 'src/assets/fonts/Inter-Bold.ttf');
    const fontData = await fs.readFile(fontPath);

    // Read profile image
    const profileImgPath = path.join(projectRoot, 'public/profile.jpg');
    const profileImgData = await fs.readFile(profileImgPath);
    const profileImgBase64 = `data:image/jpeg;base64,${profileImgData.toString('base64')}`;

    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            width: '1200px',
            height: '630px',
            backgroundColor: '#0f172a',
            padding: '80px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'Inter',
            position: 'relative',
          },
          children: [
            // Background decoration
            {
              type: 'div',
              props: {
                style: {
                  position: 'absolute',
                  top: '-10%',
                  right: '-10%',
                  width: '600px',
                  height: '600px',
                  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                }
              }
            },
            // Content
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 10,
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '24px',
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            style: {
                              width: '40px',
                              height: '4px',
                              backgroundColor: '#00d4ff',
                              borderRadius: '2px',
                            }
                          }
                        },
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '24px',
                              color: '#00d4ff',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              letterSpacing: '2px',
                            },
                            children: 'Technical Article',
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: 'h1',
                    props: {
                      style: {
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '24px',
                        lineHeight: 1.1,
                      },
                      children: title,
                    },
                  },
                  {
                    type: 'p',
                    props: {
                      style: {
                        fontSize: '32px',
                        color: '#94a3b8',
                        lineHeight: 1.4,
                        maxWidth: '900px',
                      },
                      children: description,
                    },
                  },
                ],
              },
            },
            // Footer
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  zIndex: 10,
                },
                children: [
                  {
                    type: 'img',
                    props: {
                      src: profileImgBase64,
                      style: {
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '3px solid #00d4ff',
                      },
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                      },
                      children: [
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '28px',
                              fontWeight: 'bold',
                              color: '#ffffff',
                            },
                            children: 'Manthan Ankolekar',
                          },
                        },
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '20px',
                              color: '#94a3b8',
                            },
                            children: 'Full Stack Developer • manthanank.dev',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer as any, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response('Error generating image', { status: 500 });
  }
};

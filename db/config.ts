import { defineDb, defineTable, column } from 'astro:db';

const PageViews = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number({ default: 0 }),
  }
});

const PageLikes = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number({ default: 0 }),
  }
});

const Subscribers = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    createdAt: column.date({ default: new Date() }),
  }
});

const Guestbook = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text({ optional: true }),
    message: column.text(),
    createdAt: column.date({ default: new Date() }),
  }
});

export default defineDb({
  tables: {
    PageViews,
    PageLikes,
    Subscribers,
    Guestbook
  }
});

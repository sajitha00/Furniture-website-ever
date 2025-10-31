import { PrismaClient, ContentType, ContentMode } from '@prisma/client';

const prisma = new PrismaClient();

function convertISTToUTC(localTimeString: string): Date {
  // For datetime-local format (YYYY-MM-DDTHH:MM), treat as IST
  const localTime = new Date(localTimeString + ':00');
  // IST is UTC+5:30, so subtract 5.5 hours to get UTC
  const utcTime = new Date(localTime.getTime() - (5.5 * 60 * 60 * 1000));
  return utcTime;
}

function convertUTCToIST(utcDate: Date): Date {
  const istTime = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000));
  return istTime;
}

export const ContentService = {
  // Create content
  async createContent({ content, tags, categories, type, title, location, time, thumbnail, mode, seoTitle, metaDescription, metaKeywords }) {
    // Upsert tags
    const tagObjs = await Promise.all(
      (tags || []).map((name: string) =>
        prisma.tag.upsert({ where: { name }, update: {}, create: { name } })
      )
    );
    // Upsert categories
    const catObjs = await Promise.all(
      (categories || []).map((name: string) =>
        prisma.categories.upsert({ where: { name }, update: {}, create: { name } })
      )
    );
    let validTime: Date | null = null;
    if (time) {
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(time)) {
        validTime = convertISTToUTC(time);
      } else if (!isNaN(new Date(time).getTime())) {
        validTime = new Date(time);
      }
      // no time error, just null for blogs
    }
    return prisma.content.create({
      data: {
        content,
        type,
        title,
        location,
        time: validTime,
        thumbnail,
        mode,
        seoTitle,
        metaDescription,
        metaKeywords,
        tags: { create: tagObjs.map(tag => ({ tag: { connect: { id: tag.id } } })) },
        categories: { create: catObjs.map(cat => ({ category: { connect: { id: cat.id } } })) },
      },
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
    });
  },

  // List/filter contents
  async listContents({ mode, type, category }) {
    const whereClause = {};
    if (mode) Object.assign(whereClause, { mode });
    if (type && type !== 'ALL') Object.assign(whereClause, { type });
    if (category) Object.assign(whereClause, {
      categories: { some: { category: { name: category } } },
    });
    const contents = await prisma.content.findMany({
      where: whereClause,
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return contents.map(content => ({
      id: content.id,
      content: content.content,
      title: content.title,
      type: content.type,
      thumbnail: content.thumbnail,
      location: content.location,
      time: content.time ? convertUTCToIST(content.time) : null,
      mode: content.mode,
      createdAt: content.createdAt,
      seoTitle: content.seoTitle,
      metaDescription: content.metaDescription,
      metaKeywords: content.metaKeywords,
      tags: content.tags.map(tr => tr.tag.name),
      categories: content.categories.map(cr => cr.category.name),
    }));
  },

  // Get single content by ID
  async getContentById(id: string) {
    const content = await prisma.content.findUnique({
      where: { id },
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
    });
    if (!content) throw new Error('Content not found');
    return {
      id: content.id,
      content: content.content,
      title: content.title,
      type: content.type,
      thumbnail: content.thumbnail,
      location: content.location,
      mode: content.mode,
      createdAt: content.createdAt,
      time: content.time ? convertUTCToIST(content.time) : null,
      seoTitle: content.seoTitle,
      metaDescription: content.metaDescription,
      metaKeywords: content.metaKeywords,
      tags: content.tags.map(tr => tr.tag.name),
      categories: content.categories.map(cr => cr.category.name),
    };
  },

  // Update content by ID
  async updateContent(id: string, { content, tags, categories, type, title, location, time, thumbnail, mode, seoTitle, metaDescription, metaKeywords }) {
    // Upsert all tags and categories
    const tagObjs = await Promise.all(
      (tags || []).map((name: string) =>
        prisma.tag.upsert({ where: { name }, update: {}, create: { name } })
      )
    );
    const catObjs = await Promise.all(
      (categories || []).map((name: string) =>
        prisma.categories.upsert({ where: { name }, update: {}, create: { name } })
      )
    );
    let validTime: Date | null = null;
    if (time) {
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(time)) {
        validTime = convertISTToUTC(time);
      } else if (!isNaN(new Date(time).getTime())) {
        validTime = new Date(time);
      }
    }
    // Remove all old tag/category links
    await prisma.contentTag.deleteMany({ where: { contentId: id } });
    await prisma.contentCategory.deleteMany({ where: { contentId: id } });
    const result = await prisma.content.update({
      where: { id },
      data: {
        content,
        type,
        title,
        location,
        time: validTime,
        thumbnail,
        mode,
        seoTitle,
        metaDescription,
        metaKeywords,
        tags: { create: tagObjs.map(tr => ({ tag: { connect: { id: tr.id } } })) },
        categories: { create: catObjs.map(cr => ({ category: { connect: { id: cr.id } } })) },
      },
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
    });
    return {
      id: result.id,
      content: result.content,
      title: result.title,
      type: result.type,
      thumbnail: result.thumbnail,
      location: result.location,
      mode: result.mode,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      time: result.time ? convertUTCToIST(result.time) : null,
      seoTitle: result.seoTitle,
      metaDescription: result.metaDescription,
      metaKeywords: result.metaKeywords,
      tags: result.tags.map(tr => tr.tag.name),
      categories: result.categories.map(cr => cr.category.name),
    };
  },

  // Delete content by ID
  async deleteContent(id: string) {
    await prisma.contentTag.deleteMany({ where: { contentId: id } });
    await prisma.contentCategory.deleteMany({ where: { contentId: id } });
    return prisma.content.delete({ where: { id } });
  },
}

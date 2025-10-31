import express from 'express';
import { ContentService } from './service';

const router = express.Router();

// POST /contents -- create content
router.post('/', async (req, res) => {
  try {
    const saved = await ContentService.createContent(req.body);
    res.status(201).json({ message: 'Content saved successfully!', data: saved });
  } catch (e) {
    res.status(500).json({ error: e.message || 'Failed to save content' });
  }
});

// GET /contents -- list all (with filters)
router.get('/', async (req, res) => {
  try {
    const { mode, type, category } = req.query;
    const result = await ContentService.listContents({
      mode: mode as string,
      type: type as string,
      category: category as string,
    });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message || 'Failed to get contents' });
  }
});

// GET /contents/:id -- get content by ID
router.get('/:id', async (req, res) => {
  try {
    const content = await ContentService.getContentById(req.params.id);
    res.json(content);
  } catch (e) {
    res.status(404).json({ error: e.message || 'Not found' });
  }
});

// PUT /contents/:id -- update content
router.put('/:id', async (req, res) => {
  try {
    const updated = await ContentService.updateContent(req.params.id, req.body);
    res.json({ message: 'Content updated successfully', data: updated });
  } catch (e) {
    res.status(400).json({ error: e.message || 'Update failed' });
  }
});

// DELETE /contents/:id -- delete content
router.delete('/:id', async (req, res) => {
  try {
    await ContentService.deleteContent(req.params.id);
    res.json({ message: 'Content deleted successfully' });
  } catch (e) {
    res.status(404).json({ error: e.message || 'Delete failed' });
  }
});

// GET /contents/upcoming-blog
router.get('/upcoming-blog', async (req, res) => {
  try {
    const allBlogs = await ContentService.listContents({ mode: 'PUBLISHED', type: 'BLOG' });
    const now = new Date();
    const upcoming = allBlogs
      .filter(blog => blog.time && new Date(blog.time) > now)
      .sort((a, b) => (new Date(a.time).getTime() - new Date(b.time).getTime()));
    if (upcoming.length === 0) {
      res.status(404).json({ error: 'No upcoming news updates found' });
      return;
    }
    res.json(upcoming[0]);
  } catch (e) {
    res.status(500).json({ error: e.message || 'Failed to fetch' });
  }
});

// GET /contents/upcoming-event
router.get('/upcoming-event', async (req, res) => {
  try {
    const allEvents = await ContentService.listContents({ mode: 'PUBLISHED', type: 'EVENTS' });
    const now = new Date();
    const upcoming = allEvents
      .filter(event => event.time && new Date(event.time) > now)
      .sort((a, b) => (new Date(a.time).getTime() - new Date(b.time).getTime()));
    if (upcoming.length === 0) {
      res.status(404).json({ error: 'No upcoming events found' });
      return;
    }
    res.json(upcoming[0]);
  } catch (e) {
    res.status(500).json({ error: e.message || 'Failed to fetch' });
  }
});

// GET /contents/upcoming-events (max 5)
router.get('/upcoming-events', async (req, res) => {
  try {
    const allEvents = await ContentService.listContents({ mode: 'PUBLISHED', type: 'EVENTS' });
    const now = new Date();
    const upcoming = allEvents
      .filter(event => event.time && new Date(event.time) > now)
      .sort((a, b) => (new Date(a.time).getTime() - new Date(b.time).getTime()));
    if (upcoming.length === 0) {
      res.status(404).json({ error: 'No upcoming events found' });
      return;
    }
    res.json(upcoming.slice(0, 5));
  } catch (e) {
    res.status(500).json({ error: e.message || 'Failed to fetch' });
  }
});

export default router;

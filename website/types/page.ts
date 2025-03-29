export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  description?: string;
  author?: string;
  tags?: string[];
}

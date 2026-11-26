import { useEffect, useState } from 'react';
import App from './App';
import BlogIndex from './pages/BlogIndex';
import BlogPostPage from './pages/BlogPost';

export default function Router() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const postMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  if (postMatch) return <BlogPostPage slug={decodeURIComponent(postMatch[1])} />;
  if (path === '/blog' || path === '/blog/') return <BlogIndex />;
  return <App />;
}

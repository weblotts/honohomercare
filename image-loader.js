const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/honohomercare" : "";

// Custom loader for next/image. Static export can't use the default optimizer,
// and `images.unoptimized` drops basePath from local src — so we prepend it here.
// Remote URLs are returned untouched.
export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${BASE_PATH}${src}`;
}

const BASE_PATH = "/honohomercare";

// Custom loader for next/image. Static export can't use the default optimizer,
// and `images.unoptimized` drops basePath from local src — so we prepend it here.
// Remote URLs are returned untouched.
export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${BASE_PATH}${src}`;
}

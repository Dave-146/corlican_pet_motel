/**
 * Generate responsive image srcset for desktop and mobile versions
 * Desktop images: 1200x675px
 * Mobile images: 800x450px (same filename with -mobile suffix)
 * @param {string} imagePath - Base path to the desktop image
 * @returns {Object} Object with src, srcSet, and sizes for responsive images
 */
export const getResponsiveImageSrcSet = (imagePath) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // Extract path parts
  const fullDesktopPath = imagePath.startsWith(baseUrl) 
    ? imagePath 
    : `${baseUrl}${imagePath}`;
  
  // Create mobile path by inserting -mobile before .webp extension
  const mobilePath = fullDesktopPath.replace(/\.webp$/, '-mobile.webp');
  
  return {
    src: fullDesktopPath, // Fallback for older browsers
    srcSet: `${mobilePath} 800w, ${fullDesktopPath} 1200w`,
    sizes: '(max-width: 768px) 800px, 1200px'
  };
};

/**
 * Get responsive image props for img element
 * @param {string} imagePath - Base path to the desktop image
 * @param {Object} options - Options for responsive image
 * @returns {Object} Props object for img element
 */
export const getResponsiveImageProps = (imagePath, options = {}) => {
  const { 
    sizes = '(max-width: 768px) 800px, 1200px',
    loading = 'lazy',
    decoding = 'async',
    width = 1200,
    height = 675,
    alt = '',
    className = ''
  } = options;
  
  const srcSetData = getResponsiveImageSrcSet(imagePath);
  
  return {
    src: srcSetData.src,
    srcSet: srcSetData.srcSet,
    sizes: sizes,
    loading: loading,
    decoding: decoding,
    width: width,
    height: height,
    alt: alt,
    className: className
  };
};


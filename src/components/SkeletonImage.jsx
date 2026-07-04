import { useState } from 'react'
import Image from 'next/image'

// next/image wrapped with a shimmer skeleton shown until the image decodes.
export function SkeletonImage({ className, imgClassName, alt, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={className} style={{ position: 'relative' }}>
      <Image
        alt={alt}
        className={imgClassName}
        onLoadingComplete={() => setLoaded(true)}
        {...props}
      />
      <div className="skeleton" data-loaded={loaded} />
    </div>
  )
}

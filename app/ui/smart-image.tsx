"use client";

import { useState } from "react";

const extensions = ["png", "jpg", "jpeg", "webp", "gif", "avif"];

export function SmartImage({
  name,
  alt,
  className = "",
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  const [attempt, setAttempt] = useState(0);
  const currentExtension = extensions[attempt];
  const src = `/assets/${name}.${currentExtension}`;
  const isMissing = attempt >= extensions.length;

  if (isMissing) {
    return (
      <div className={`asset-placeholder ${className}`} role="img" aria-label={alt}>
        <span>{name}</span>
      </div>
    );
  }

  return (
    // The real files can be dropped into public/assets with common image extensions.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setAttempt((value) => value + 1)}
    />
  );
}

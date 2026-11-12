/**
 * Ikon brand (WhatsApp, Instagram, TikTok) dalam SVG inline.
 * Dipakai inline agar tidak bergantung pada versi lucide-react (ikon brand sudah dihapus di versi baru).
 */
export function WhatsAppIcon({ className = "h-5 w-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.44 9.44 0 0 1-1.45-5.04c0-5.22 4.25-9.46 9.47-9.46 2.53 0 4.9.99 6.69 2.77a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.46 9.46h.36zM20.1 3.9A11.2 11.2 0 0 0 12.04.5C5.86.5.83 5.52.83 11.7c0 1.98.52 3.9 1.5 5.6L.7 23.5l6.33-1.66a11.2 11.2 0 0 0 5.01 1.2h.01c6.18 0 11.21-5.03 11.21-11.2 0-3-1.17-5.8-3.16-7.94z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M19.6 6.7a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.1h-3.2v12.9a2.6 2.6 0 1 1-1.8-2.5V9.6a5.9 5.9 0 1 0 5 5.8V9.1a8.5 8.5 0 0 0 5.3 1.8V7.7c-.1 0-.1-.9 0-1z" />
    </svg>
  );
}

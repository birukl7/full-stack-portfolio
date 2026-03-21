"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const socialLinks = [
  {
    name: "Gmail",
    href: "mailto:biruklemmadebela@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/biruk-lemma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9H2V21H6V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+251944055361",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.03 2 11c0 1.93.63 3.73 1.7 5.22L2 22l6.05-1.64A10.02 10.02 0 0 0 12 20c5.52 0 10-4.03 10-9s-4.48-9-10-9zm0 16c-1.61 0-3.13-.42-4.45-1.15l-.32-.18-3.59.97.96-3.5-.21-.33A6.94 6.94 0 0 1 4 11c0-3.87 3.58-7 8-7s8 3.13 8 7-3.58 7-8 7zm4.23-5.32c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12s-.59.75-.72.9c-.13.15-.26.17-.49.06-.23-.12-.98-.36-1.86-1.15-.69-.62-1.15-1.38-1.28-1.61-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.12-.51-1.23-.7-1.68-.18-.43-.36-.37-.51-.38h-.43c-.15 0-.39.06-.6.28-.21.23-.8.78-.8 1.9s.82 2.2.94 2.35c.12.15 1.61 2.46 3.9 3.45.55.24.98.38 1.32.49.55.18 1.05.15 1.44.09.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28z"
        />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/birukl7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M22 2L11 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/biruk_777",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.345-6.993L3.64 22H1l6.99-7.99L2 2h6.828l4.83 6.357L18.244 2zm-2.396 18h1.885L7.902 4H5.87l9.978 16z"
        />
      </svg>
    ),
  },
  {
    name: "Phone",
    href: "tel:+251944055361",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
  name: "GitHub",
  href: "https://github.com/birukl7",
  icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-1.03-.02-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.82.004 1.64.11 2.41.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
        />
      </svg>
    ),
  },
// {
//   name: "Upwork",
//   href: "https://www.upwork.com/freelancers/~01ded8dd6af250627c", // replace this
//   icon: (
//     <svg viewBox="0 0 640 640" className="w-6 h-6">
//       <path
//         fill="currentColor"
//         d="M493.9 359.6C443.6 359.6 410.4 320.7 401.1 305.7C413 210.4 447.9 180.3 493.9 180.3C539.4 180.3 574.8 216.7 574.8 270C574.8 323.3 539.4 359.7 493.9 359.7L493.9 359.6zM493.9 121.8C412 121.8 366.1 175.2 352.9 230.2C338 202.2 327 164.7 318.4 129.9L205.2 129.9L205.2 270.9C205.2 322 181.9 359.9 136.4 359.9C90.9 359.9 64.8 322.1 64.8 270.9L65.3 129.9L0 129.9L0 270.9C0 312 13.3 349.3 37.6 376C62.6 403.5 96.8 417.8 136.4 417.8C215.2 417.8 270.2 357.4 270.2 270.9L270.2 176.1C278.4 207.3 298 267.2 335.5 319.7L300.5 519.1L366.9 519.1L390 377.8C397.6 384.1 405.7 389.8 414.2 394.8C436.4 408.8 461.9 416.7 488.1 417.6C488.1 417.6 492.1 417.8 494.2 417.8C575.4 417.8 640.1 354.9 640.1 270C640.1 185.1 575.3 121.9 494.1 121.9L493.9 121.8z"
//       />
//     </svg>
//   ),
// }
  
];



function SocialIcon({
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <a
      href={link.href}
      target={"_blank"}
      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={link.name}
    >
      <div
        className={`
          relative flex items-center justify-center w-14 h-14 rounded-full
          border-2 border-foreground/20
          transition-all duration-300 ease-out
          group-hover:border-foreground group-hover:scale-110
          group-active:scale-95
          ${isHovered ? "bg-foreground text-background" : "bg-transparent text-foreground"}
        `}
      >
        <div
          className={`
            transition-transform duration-300 ease-out
            ${isHovered ? "rotate-12 scale-110" : "rotate-0 scale-100"}
          `}
        >
          {link.icon}
        </div>
      </div>
      <span
        className={`
          absolute -bottom-8 text-xs font-medium tracking-wide
          transition-all duration-300 ease-out
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
      >
        {link.name}
      </span>
    </a>
  );
}


export default function Contact() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center mb-16">
        <div className="absolute top-6 left-6">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-3">
          {"Let's connect"}
        </h1>
        <p className="text-muted-foreground text-sm">
          Pick your favorite way to reach out
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-md">
        {socialLinks.map((link) => (
          <SocialIcon key={link.name} link={link} />
        ))}
      </div>
    </main>
  );
}

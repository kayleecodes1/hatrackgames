export const siteConfig = {
  contactEmail: "hello@hatrackgames.com",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/hatrackgames",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/hatrackgames",
      icon: "instagram",
    },
    {
      label: "Twitter",
      href: "https://x.com/hatrackgames",
      icon: "x",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@hatrackgames",
      icon: "youtube",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@hatrackgames",
      icon: "tiktok",
    },
    {
      label: "Reddit",
      href: "https://www.reddit.com/user/hatrackgames",
      icon: "reddit",
    },
  ],
} as const;

export type SocialIcon = (typeof siteConfig.socialLinks)[number]["icon"];

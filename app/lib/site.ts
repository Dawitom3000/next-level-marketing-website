export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://next-level-marketing-ethiopia.felekedawit11.chatgpt.site";

export const siteName = "Next Level Marketing & Communications";

export const siteDescription =
  "More than 20 years connecting ambitious brands, institutions, and communities with the audiences that matter across Ethiopia.";

export const businessContacts = {
  phones: ["+251911998000", "+251970437830"],
  emails: ["carlos2thornton@yahoo.com", "felekedawit11@gmail.com"],
  instagram: "https://www.instagram.com/nextlevelmarkating/",
  tiktok: "https://www.tiktok.com/@next.level.market10",
} as const;

export const publicRoutes = [
  "",
  "/work",
  "/services",
  "/experience",
  "/about",
  "/contact",
] as const;

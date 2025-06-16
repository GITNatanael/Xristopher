import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    username: "@mondayschallenge",
    body: "Really goood! 💯",
    url: "https://www.instagram.com/p/CrGqX77u--6/",
  },
  {
    username: "@davihero",
    body: "Wow🔥❤️",
    url: "https://www.instagram.com/p/CwiTK_xupe8/?img_index=1",
  },
  {
    username: "@alexcarrillo.art",
    body: "Me encanta!!!! 🔥🔥🔥",
    url: "https://www.instagram.com/p/CrgODF8pM2F/",
  },
  {
    username: "@bradleymconners",
    body: "Duuuude this is fire! 🔥 🐉",
    url: "https://www.instagram.com/p/CrGqX77u--6/",
  },
  {
    username: "@santiago.aldo.m",
    body: "I love It ❤️💀",
    url: "https://www.instagram.com/p/CZqeWf-snxM/",
  },
  {
    username: "@zenzuke",
    body: "Está increíble esta 👏 🔥🔥🔥",
    url: "https://www.instagram.com/reel/Cwi1G3oO6PV/",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const InstagramLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
  </svg>
);

const ReviewCard = ({
  username,
  body,
  url,
}: {
  username: string;
  body: string;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-200 hover:bg-white/5",
        "border-white/10 bg-black/10"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 flex items-center justify-center">
          <InstagramLogo />
        </div>
        <div className="flex flex-col text-white text-left">
          <figcaption className="text-sm font-semibold">{username}</figcaption>
          <blockquote className="mt-1 text-sm text-white/80">{body}</blockquote>
        </div>
      </div>
    </a>
  );
};

export default function InstagramTestimonials() {
  return (
    <div className=" flex w-full flex-col items-center justify-center overflow-hidden sticky top-0   h-screen px-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]  ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
    </div>
  );
}

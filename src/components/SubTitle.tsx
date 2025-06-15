import { Rock_Salt } from "next/font/google";
import { TextAnimate } from "@/components/ui/text-animate";

export const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});
// bg-gradient-to-r from-[#FF0080] via-[#7928CA] via-[#0070F3] to-[#38bdf8]
export default function SubTitle() {
  return (
    <TextAnimate
      animation="blurIn"
      delay={1.5}
      duration={0.5}
      processJsx={true}
      startOnView={false}
      className={`inline-block bg-gradient-to-r  -rotate-3 ${rockSalt.className}`}
    >
      Illustrator & Animator
    </TextAnimate>
  );
}

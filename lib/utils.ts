import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScrollToDemo(
  router: AppRouterInstance,
  e?: React.MouseEvent<HTMLAnchorElement>
) {
  if (e) {
    e.preventDefault();
  }

  if (typeof window !== "undefined" && window.location.pathname === "/") {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push("/");

    setTimeout(() => {
      const demoSection = document.getElementById("demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }
}

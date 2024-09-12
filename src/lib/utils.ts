import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GithubRepo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  homepage: string;
  topics: string[];
}

export async function getGithubRepos() {
  const user = "sethburtonhall";
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100`,
  );
  const repos = await response.json();
  const showcases = repos.filter((repo: GithubRepo) =>
    repo.topics.includes("showcase"),
  );
  const shortstacks = repos.filter((repo: GithubRepo) =>
    repo.topics.includes("shortstack"),
  );
  return { showcases, shortstacks };
}

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
  const token = import.meta.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GitHub token not found. API requests may be rate-limited.");
  }

  const headers = token
    ? {
        Authorization: `token ${token}`,
      }
    : {};

  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100`,
      { headers: headers as HeadersInit },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const repos = await response.json();
    const showcases = repos.filter((repo: GithubRepo) =>
      repo.topics.includes("showcase"),
    );
    const shortstacks = repos.filter((repo: GithubRepo) =>
      repo.topics.includes("shortstack"),
    );

    return { showcases, shortstacks };
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return { showcases: [], shortstacks: [] };
  }
}

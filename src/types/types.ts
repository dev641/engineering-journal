export interface PageProps {
  params: {
    mdxPath?: string[];
    [key: string]: string | string[] | undefined;
  };
  [key: string]: any; // fallback for other injected props
}

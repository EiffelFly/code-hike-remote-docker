import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { remarkCodeHike } from "@code-hike/mdx";
import { CH } from "@code-hike/mdx/components";
import fs from "fs";
import { join } from "path";

export async function getServerSideProps() {
  // can be from a local file, database, anywhere

  const templatePath = join(process.cwd(), "src", "posts", "lorem.mdx");

  const source = fs.readFileSync(templatePath);
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false }]],
      useDynamicImport: true,
    },
  });
  return { props: { source: mdxSource } };
}

export default function Page({ source }) {
  return (
    <div style={{ width: 800, margin: "0 auto" }}>
      <MDXRemote {...source} components={{ CH }} />
    </div>
  );
}

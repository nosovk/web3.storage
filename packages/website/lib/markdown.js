import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs/promises'
import path from 'path'

/**
 * 
 * @param {string} filepath 
 * @returns {Promise<string>}
 */
async function slurp(filepath) {
  console.log('loading from ', process.cwd(), filepath)
  const fullPath = path.join(process.cwd(), filepath)
  return fs.readFile(fullPath, 'utf8')
}

/**
 * 
 * @param {string} mdxFilePath 
 * @returns 
 */
export async function loadMDX(mdxFilePath) {
  const fullContent = await slurp(mdxFilePath)
  const { content: raw, data: frontmatter } = matter(fullContent)

  if (frontmatter.snippets) {
    const snippets = {}
    for (const [key, filename] of Object.entries(frontmatter.snippets)) {
      if (typeof filename !== 'string') {
        continue
      }
      const src = await slurp(filename)
      const lang = path.extname(filename).replace('.', '')
      snippets[key] = { src, filename, lang }
    }
    frontmatter.snippets = snippets
  }

  const mdx = await serialize(raw, { scope: frontmatter })

  // TODO: for code snippets, maybe frontmatter lists sources to load here in static props
  // e.g.
  // 
  // snippets:
  //   howto: snippets/howto.js
  //
  // Then in your mdx:
  //
  //    Here's some code that frazzles the frizzlers:
  //    <CodeSnippet snippet={howto} region="friz-frazzlers" />
  //
  // 

  return {
    frontmatter,
    raw,
    mdx,
  }
}
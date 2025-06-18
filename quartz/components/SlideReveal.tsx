import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/SlideReveal.scss"
// @ts-ignore
import script from "./scripts/slide.inline"

const SlideReveal: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  // 仅在 frontmatter.useSlide 为 true 时显示按钮
  if (!fileData.frontmatter?.useSlide) return null
  console.log("SlideReveal component loaded")
  return (
    <button
      id="slide-reveal-btn"
      onClick={() => {
        // 这里的 onClick 只在 SPA 模式下生效，静态导出时请用 afterDOMLoaded
      }}
    >
      生成幻灯片
    </button>
  )
}

SlideReveal.css = style
SlideReveal.afterDOMLoaded = script

export default (() => SlideReveal) satisfies QuartzComponentConstructor
import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid")
    if (!elements) return

    async function drawMarmaid(idx: number, element: Element) {
      const id = "mermaid" + idx;
      const definition = element.textContent || "";

      const { svg } = await mermaid.render(id, definition);
      element.innerHTML = svg;
    }

    for (let i = 0; i < elements.length; i++) {
      drawMarmaid(i, elements[i]);
    }
  }, [])

  return
}

export default useMermaidEffect

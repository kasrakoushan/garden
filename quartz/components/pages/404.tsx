import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Oops</h1>
      <p>I've made some migrations on this site so some links might be broken.</p>
      <p>Try going to the <a href="https://brain.kasra.io/">homepage</a> and searching for the page you're looking for.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

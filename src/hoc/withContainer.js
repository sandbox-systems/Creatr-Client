// withContainers.js
import React from 'react'
import { Container, Subscribe } from 'unstated'

/*
 * containers: Array of `class extends Container`
 * WrappedComponent: React component
 */
function withContainers (containers, WrappedComponent, props) {
  return (...containers) => (
    <Subscribe to={containers}>
      {(...containers) => <WrappedComponent containers={containers} {...props} />}
    </Subscribe >
  )
}

export default withContainers
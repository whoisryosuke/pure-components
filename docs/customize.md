# Customize

## Choose the modules that you need.

### Extending styles using Styled Components

Since this library requires style-components, you can use it (or similar libraris like Emotion) anywhere in your app to extend the styles.

```js static
import React from 'react'
import styled, { css } from 'styled-components`
import Button from 'pure-styled-components'

const extraCSS = css`
  color: 'white';
`

const StyledButton = styled(Button)`
  background: 'teal';
  ${extraCSS}
`
```

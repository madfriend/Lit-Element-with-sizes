# Lit Element with sizes

Adds `width` and `height` properties to a LitElement + custom computed ones.

Inspired by https://github.com/renatorib/react-sizes.

## Getting Started

```
import { withSizes } from './withSizes';
import { html, LitElement } from '@polymer/lit-element';

const mapSizesToProps = ({ width, height }) => ({
  isMobile: width < 500
});

export class MyElement extends withSizes(mapSizesToProps)(LitElement) {
  static get is () { return 'my-element' };

  static get properties () {
    return { isMobile: Boolean }
  }

  _render (props) {
    return html`
      ${props.isMobile ? this._renderMobile(props) : this._renderDesktop(props)}

      I am ${props.width}&times;${props.height}px
    `;
  }

  _renderMobile (props) {
    return html`This is a <b>mobile</b> view.`;
  }

  _renderDesktop (props) {
    return html`This is a <b>desktop</b> view.`;
  }
}
```

## Authors

@madfriend